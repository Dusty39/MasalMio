// --- StoryConfig (State) ---
const StoryConfig = {
    hero: { name: "", gender: "boy", avatar: "images/hero_boy_1.png" },
    family: {
        sibling: { name: "", gender: "girl", avatar: "images/sibling_girl_1.png", title: "Kardeş", included: false },
        friend: { name: "", gender: "boy", avatar: "images/friend_boy_1.png", title: "Arkadaş", included: false },
        mom: { name: "", avatar: "images/parent_mom_1.png", title: "Anne", included: false },
        dad: { name: "", avatar: "images/parent_dad_1.png", title: "Baba", included: false },
        mentor: { name: "", avatar: "images/mentor_grandpa_1.png", title: "Bilge Kişi", included: false }
    },
    pets: {
        heroPet: { name: "", type: "cat", avatar: "images/pet_cat_1.png", included: false }
    }
};

// --- View Manager ---
const app = {
    views: ['view-welcome', 'view-wizard', 'view-dashboard', 'view-reader'],

    navigateTo(viewId) {
        this.views.forEach(id => {
            const el = document.getElementById(id);
            if (id === viewId) {
                el.classList.remove('hidden');
                setTimeout(() => el.classList.add('active-view'), 10);
            } else {
                el.classList.remove('active-view');
                setTimeout(() => el.classList.add('hidden'), 400); // Wait for transition
            }
        });
    },

    startWizard() {
        this.navigateTo('view-wizard');
        wizard.init();
    },

    goHome() {
        this.navigateTo('view-welcome');
    },

    goDashboard() {
        this.navigateTo('view-dashboard');
    },

    // --- Theme Logic ---
    toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        this.updateThemeIcon(newTheme);
    },

    updateThemeIcon(theme) {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.innerText = theme === 'dark' ? '🌙' : '☀️';
        }
    },

    initTheme() {
        // Check storage or system preference
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeIcon('dark');
        } else {
            document.documentElement.removeAttribute('data-theme'); // Default is Light
            this.updateThemeIcon('light');
        }
    },

    resetApp() {
        if (confirm('Tüm kayıtlı hikayeler ve ayarlar silinecek. Emin misin?')) {
            localStorage.removeItem('masalmio_progress');
            localStorage.removeItem('masalmio_favorites');
            // Keep theme maybe? Or clear all? Let's clear all for hard reset.
            localStorage.clear();
            window.location.reload(true);
        }
    }
};

// Initialize Theme on Load
document.addEventListener('DOMContentLoaded', () => {
    app.initTheme();
});

// --- Wizard Logic ---
const wizard = {
    step: 0,
    steps: [
        { id: 'hero', title: 'Kahramanı Seç', render: renderHeroStep },
        { id: 'family', title: 'Aileni ve Dostlarını Seç', render: renderFamilyStep }
        // Pet step merged into family
    ],

    init() {
        this.step = 0;
        this.render();
    },

    render() {
        const container = document.getElementById('wizard-steps');
        const progressBar = document.getElementById('wizard-progress');
        // Hide header back button on first step
        const headerBackBtn = document.querySelector('.wizard-header .btn-icon');
        if (headerBackBtn) {
            headerBackBtn.style.visibility = this.step === 0 ? 'hidden' : 'visible';
        }

        const currentStepConfig = this.steps[this.step];

        // Update Progress
        const percent = ((this.step + 1) / this.steps.length) * 100;
        progressBar.style.width = `${percent}%`;

        // Render Content
        container.innerHTML = `
            <div class="glass-card animate-in" style="width: 100%; max-width: 500px;">
                <h2>${currentStepConfig.title}</h2>
                <div id="step-content" style="margin-top:20px;"></div>
            </div>
        `;

        // Execute specific render function
        currentStepConfig.render(document.getElementById('step-content'));

        // Update Buttons
        document.getElementById('btn-prev').disabled = this.step === 0;
        document.getElementById('btn-next').innerText = this.step === this.steps.length - 1 ? "Hikaye Oluştur ✨" : "İleri ➔";
    },

    nextStep() {
        if (this.step < this.steps.length - 1) {
            this.step++;
            this.render();
        } else {
            // FINISH
            console.log("Wizard Complete:", StoryConfig);
            app.renderDashboard(true);
        }
    },

    prevStep() {
        if (this.step > 0) {
            this.step--;
            this.render();
        }
    }
};

// --- Step Renderers ---

function renderHeroStep(container) {
    container.innerHTML = `
        <div class="input-group" style="margin: 0 auto 20px auto;">
            <input type="text" class="glass-input" placeholder="İsim Yazınız..." autocomplete="off"
                value="${StoryConfig.hero.name}" 
                oninput="StoryConfig.hero.name = this.value">
        </div>
        <div class="avatar-grid">
            <div class="avatar-option ${StoryConfig.hero.gender === 'boy' ? 'selected' : ''}" 
                 onclick="selectHeroGender('boy')">
                 <img src="images/hero_boy_1.png" class="avatar-img">
                 <span>Erkek</span>
            </div>
            <div class="avatar-option ${StoryConfig.hero.gender === 'girl' ? 'selected' : ''}" 
                 onclick="selectHeroGender('girl')">
                 <img src="images/hero_girl_1.png" class="avatar-img">
                 <span>Kız</span>
            </div>
        </div>
    `;
}

function selectHeroGender(gender) {
    StoryConfig.hero.gender = gender;
    StoryConfig.hero.avatar = gender === 'boy' ? 'images/hero_boy_1.png' : 'images/hero_girl_1.png';
    wizard.render();
}

function renderFamilyStep(container) {
    // Helper to render a family member row
    // Click on avatar toggles inclusion
    const renderRow = (key, label, avatarPath) => {
        const member = StoryConfig.family[key];
        const isSelected = member.included;

        return `
        <div class="family-row" style="display:flex; align-items:center; margin-bottom:15px; text-align:left;">
            <div onclick="toggleFamilyMember('${key}')" class="avatar-selectable ${isSelected ? 'avatar-selected' : ''}"
                 style="position:relative; width:60px; height:60px; border-radius:50%; margin-right:15px; flex-shrink:0;">
                <img src="${avatarPath}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                ${isSelected ? '<span style="position:absolute; bottom:0; right:0; background:#4CAF50; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center;">✓</span>' : ''}
            </div>
            <div style="flex:1; opacity: ${isSelected ? '1' : '0.5'}; transition:opacity 0.3s;">
                <div style="font-size:0.9rem; margin-bottom:4px;">${label}</div>
                <input type="text" class="glass-input" style="padding:8px; font-size:0.9rem; text-align:left;" 
                    placeholder="İsim..." autocomplete="off"
                    value="${member.name}" 
                    ${!isSelected ? 'disabled' : ''}
                    oninput="StoryConfig.family['${key}'].name = this.value">
            </div>
        </div>
        `;
    };

    // Pet Logic
    const pet = StoryConfig.pets.heroPet;
    const isCatSelected = pet.included && pet.type === 'cat';
    const isDogSelected = pet.included && pet.type === 'dog';

    const petSection = `
        <div class="pet-selection-container" style="display:flex; justify-content:center; gap:30px; margin: 20px 0;">
            <div onclick="selectPet('cat')" class="avatar-selectable ${isCatSelected ? 'avatar-selected' : ''}"
                 style="position:relative; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:transform 0.2s;">
                <img src="images/pet_cat_1.png" style="width:100%; height:100%; border-radius:50%; object-fit:cover; border: 3px solid ${isCatSelected ? '#4CAF50' : 'transparent'};">
            </div>
            <div onclick="selectPet('dog')" class="avatar-selectable ${isDogSelected ? 'avatar-selected' : ''}"
                 style="position:relative; width:80px; height:80px; border-radius:50%; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:transform 0.2s;">
                <img src="images/pet_dog_1.png" style="width:100%; height:100%; border-radius:50%; object-fit:cover; border: 3px solid ${isDogSelected ? '#4CAF50' : 'transparent'};">
            </div>
        </div>
        ${pet.included ? `
            <div class="animate-in" style="margin-top:10px; max-width: 200px; margin-left: auto; margin-right: auto;">
                <input type="text" class="glass-input" placeholder="İsmi..." 
                       style="width: 100%; text-align: center;"
                       value="${pet.name}" oninput="StoryConfig.pets.heroPet.name = this.value">
            </div>
        ` : ''}
    `;

    container.innerHTML = `
        <div class="family-list" style="padding-right:5px; max-height: 400px; overflow-y:auto;">
            ${renderRow('mom', 'Anne', StoryConfig.family.mom.avatar)}
            ${renderRow('dad', 'Baba', StoryConfig.family.dad.avatar)}
            ${renderRow('sibling', 'Kardeş', StoryConfig.family.sibling.avatar)}
            ${renderRow('friend', 'Arkadaş', StoryConfig.family.friend.avatar)}
            ${renderRow('mentor', 'Bilge Kişi', StoryConfig.family.mentor.avatar)}
            
            <div style="margin: 20px 0 10px; border-bottom: 1px solid rgba(255,255,255,0.2);"></div>
            <label style="display:block; text-align:center; font-size:1.1rem; opacity:0.9; margin-bottom:10px;">Sevimli Dostun 🐾</label>
            ${petSection}
        </div>
    `;
}

function toggleFamilyMember(key) {
    const member = StoryConfig.family[key];
    member.included = !member.included;
    // Auto-focus input if enabled? For now just re-render
    wizard.render();
}

function selectPet(type) {
    const pet = StoryConfig.pets.heroPet;

    // If clicking the SAME type that is selected, toggle off?
    if (pet.included && pet.type === type) {
        pet.included = false;
    } else {
        pet.included = true;
        pet.type = type;
        pet.avatar = type === 'cat' ? 'images/pet_cat_1.png' : 'images/pet_dog_1.png';
    }
    wizard.render();
}


// --- Story Generation Logic ---
app.renderDashboard = function (showRecommendations = false) { // Default false for Login
    app.goDashboard();

    // Update Header
    const heroName = StoryConfig.hero.name || "Kahraman";
    document.getElementById('dash-hero-name').textContent = `Hoş geldin, ${heroName} 👋`;
    document.getElementById('dash-hero-name').parentElement.style.opacity = "1";

    const dashboard = document.getElementById('story-list');
    dashboard.innerHTML = ''; // Clear

    // --- 0. NEW STORY BUTTON (Hero Section) ---
    const createBtnContainer = document.createElement('div');
    createBtnContainer.className = 'glass-card animate-in';
    createBtnContainer.style.marginBottom = '25px';
    createBtnContainer.style.display = 'flex';
    createBtnContainer.style.alignItems = 'center';
    createBtnContainer.style.justifyContent = 'space-between';
    createBtnContainer.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,107,107,0.1) 100%)';
    createBtnContainer.style.border = '1px solid rgba(255,215,0,0.3)';

    createBtnContainer.innerHTML = `
        <div style="text-align: left;">
            <h3 style="margin-bottom: 5px; color: var(--primary);">Yeni Bir Masal Yaz 🪄</h3>
            <p style="font-size: 0.9rem; opacity: 0.8;">Kendi maceranı oluşturmaya hazır mısın?</p>
        </div>
        <button class="btn-primary" style="margin:0; font-size:1rem; padding: 10px 20px;" onclick="app.startWizard()">Oluştur +</button>
    `;
    dashboard.appendChild(createBtnContainer);

    // --- Data Load ---
    const savedProgress = JSON.parse(localStorage.getItem('masalmio_progress') || '{}');
    const favorites = JSON.parse(localStorage.getItem('masalmio_favorites') || '[]');
    let startedStoriesIds = Object.keys(savedProgress);

    // Filter "My Stories" based on filtering logic if needed, but usually we show all "Started" ones.
    // However, for RE-Recommendation logic, we need to know the config of started stories.

    // 1. My Stories Section
    if (startedStoriesIds.length > 0) {
        // Sort: Favorites first, then by Last Updated (if we had it, but simpler: favorites first)
        startedStoriesIds.sort((a, b) => {
            const isFavA = favorites.includes(a);
            const isFavB = favorites.includes(b);
            if (isFavA && !isFavB) return -1;
            if (!isFavA && isFavB) return 1;
            return 0; // Keep original order otherwise
        });

        // Accordion Header
        const section = document.createElement('div');
        section.className = 'accordion-section';
        section.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion('my-stories-content', this)">
                <h3 style="margin:0; opacity:0.8;">Hikayelerim 🔖</h3>
                <span class="arrow-icon">▼</span>
            </div>
            <div id="my-stories-content" class="accordion-content"></div>
        `;
        dashboard.appendChild(section);

        const contentDiv = section.querySelector('#my-stories-content');

        startedStoriesIds.forEach(id => {
            const progress = savedProgress[id];
            const story = STORY_DB.find(s => s.id === id);
            if (!story) return;

            const isFav = favorites.includes(id);

            const card = document.createElement('div');
            card.className = 'glass-card animate-in';
            card.style.marginBottom = '15px';
            card.style.textAlign = 'left';
            card.style.borderLeft = '4px solid var(--primary)';
            card.style.display = 'flex';
            card.style.justifyContent = 'space-between';
            card.style.alignItems = 'center';

            // Click handling: Text content opens story, Star toggles favorite
            card.innerHTML = `
                <div style="flex:1; cursor:pointer;" onclick="loadStoryReader('${id}', ${progress.page})">
                    <h4 style="margin-bottom:5px; color: var(--primary);">${story.title}</h4>
                    <p style="font-size:0.9rem; opacity:0.8;">Kaldığın Yer: ${progress.page + 1} / ${story.pages.length}</p>
                </div>
                <div style="display:flex; flex-direction: column; align-items:center; gap:5px; margin-left: 10px;">
                     <button class="story-star-btn ${isFav ? 'is-favorite' : ''}" onclick="toggleFavorite('${id}', this)">★</button>
                     <button class="story-star-btn" style="color: #ff6b6b; font-size: 1.2rem;" onclick="app.deleteStory('${id}')">🗑️</button>
                </div>
                <div style="margin-left: 10px;">
                     <button class="btn-primary" style="padding: 8px 15px; font-size: 0.9rem; margin:0;" onclick="loadStoryReader('${id}', ${progress.page})">▶</button>
                </div>
            `;
            contentDiv.appendChild(card);
        });
    }

    // --- 2. For You (Recommendation Logic) ---
    // User Request: Only show this part AFTER creating a new story (Wizard completion)
    if (showRecommendations) {
        const forYouSection = document.createElement('div');
        forYouSection.className = 'accordion-section';

        // Header for For You
        forYouSection.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion('reco-content', this)">
                <h3 style="margin:0; opacity:0.8;">Senin İçin Seçtiklerimiz ✨</h3>
                <span class="arrow-icon">▼</span>
            </div>
            <div id="reco-content" class="accordion-content"></div>
        `;

        // Filter Logic: Exclude stories already started
        const validStories = STORY_DB.filter(story => {
            // 1. Exclude if already in "My Stories"
            if (savedProgress[story.id]) return false;

            // 2. Check Requirements
            const reqs = story.requirements || [];
            if (reqs.includes('sibling') && !StoryConfig.family.sibling.included) return false;
            if (reqs.includes('pet') && !StoryConfig.pets.heroPet.included) return false;
            if (reqs.includes('friend') && !StoryConfig.family.friend.included) return false;
            if (reqs.includes('mentor') && !StoryConfig.family.mentor.included) return false;
            if (reqs.includes('mom') && !StoryConfig.family.mom.included) return false;
            if (reqs.includes('dad') && !StoryConfig.family.dad.included) return false;

            return true;
        });

        const recoContent = forYouSection.querySelector('#reco-content');

        if (validStories.length === 0) {
            if (startedStoriesIds.length === 0) {
                recoContent.innerHTML = '<p style="text-align:center; opacity:0.7; padding:20px;">Şu an bu karakterlerle yeni bir hikaye bulamadık. Lütfen farklı karakterler seçmeyi dene.</p>';
            } else {
                recoContent.innerHTML = '<p style="text-align:center; opacity:0.7; padding:20px;">Tüm hikayeleri keşfettiniz! Harika! 🎉</p>';
            }
        } else {
            validStories.forEach((story, index) => {
                const card = document.createElement('div');
                // Logic for Featured vs Normal
                const isFeatured = index === 0; // Always feature the first recommendation

                if (isFeatured) {
                    card.className = 'hero-story-card animate-in';
                    // Cover image logic: try to find a scene image or use default
                    let coverImage = story.pages.find(p => p.image.includes('scene'))?.image || "images/masalmio_logo.png";

                    card.innerHTML = `
                    <div class="hero-story-bg" style="background-image: url('${coverImage}');">
                        <div class="hero-story-overlay">
                            <div class="hero-story-content">
                                <h3 class="hero-story-title">${story.title}</h3>
                                <p class="hero-story-subtitle">${story.summary}</p>
                                <button class="btn-primary big-pulse-btn" onclick="loadStoryReader('${story.id}')" style="width: auto; padding: 15px 40px; font-size: 1.2rem;">Hikayeye Başla 🚀</button>
                            </div>
                        </div>
                    </div>
                `;
                } else {
                    card.className = 'glass-card animate-in';
                    card.style.cursor = 'pointer';
                    card.style.marginBottom = '15px';
                    card.style.textAlign = 'left';
                    card.onclick = () => loadStoryReader(story.id);

                    card.innerHTML = `
                    <div style="display:flex; align-items:center;">
                        <div style="width: 60px; height: 60px; border-radius: 12px; background: ${story.coverColor}; margin-right: 15px; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">📖</div>
                        <div>
                            <h4 style="margin-bottom:3px; color: var(--text);">${story.title}</h4>
                            <p style="font-size:0.85rem; opacity:0.7; line-height:1.2;">${story.summary}</p>
                        </div>
                    </div>
                `;
                }
                recoContent.appendChild(card);
            });
        }
        dashboard.appendChild(forYouSection);
    }

    // Helper for Accordion
    function toggleAccordion(contentId, headerEl) {
        const content = document.getElementById(contentId);
        const arrow = headerEl.querySelector('.arrow-icon');

        // Need to manage state explicitly or via specific class
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            content.classList.add('collapsed');
            arrow.style.transform = 'rotate(-90deg)';
        }
    }

    // ... existing helpers ...

    // Helper for Favorites
    function toggleFavorite(storyId, btnEl) {
        const favorites = JSON.parse(localStorage.getItem('masalmio_favorites') || '[]');
        const index = favorites.indexOf(storyId);

        // Prevent event bubbling if needed, but onclick on button usually handles it.
        // Actually need event.stopPropagation() if parent is clickable? 
        // In our HTML above, parent div has onclick? No, sibling div has onclick. So we are good.

        if (index === -1) {
            favorites.push(storyId);
            btnEl.classList.add('is-favorite');
        } else {
            favorites.splice(index, 1);
            btnEl.classList.remove('is-favorite');
        }

        localStorage.setItem('masalmio_favorites', JSON.stringify(favorites));
    }

    // --- Modal Logic ---
    let storyToDelete = null;

    app.enterApp = function () {
        this.renderDashboard();
    };

    app.deleteStory = function (storyId) {
        storyToDelete = storyId;
        const modal = document.getElementById('modal-delete');
        modal.classList.remove('hidden');
    };

    app.closeModal = function () {
        const modal = document.getElementById('modal-delete');
        modal.classList.add('hidden');
        storyToDelete = null;
    };

    app.confirmDelete = function () {
        if (storyToDelete) {
            const progress = JSON.parse(localStorage.getItem('masalmio_progress') || '{}');
            delete progress[storyToDelete];
            localStorage.setItem('masalmio_progress', JSON.stringify(progress));
            app.renderDashboard(false); // Refresh without recommendations
            app.closeModal();
        }
    };


    function loadStoryReader(storyId, startPage = 0) {
        const story = StoryEngine.generate(storyId, StoryConfig);
        if (story) {
            renderBook(story, startPage);
            app.navigateTo('view-reader');
        }
    }

    // --- Reader Logic ---
    const reader = {
        story: null,
        pageIndex: 0,

        init(story, startPage = 0) {
            this.story = story;
            this.pageIndex = startPage;
            this.renderPage();
            this.saveProgress();
        },

        saveProgress() {
            if (!this.story) return;
            const progress = JSON.parse(localStorage.getItem('masalmio_progress') || '{}');

            // Generate config signature
            const configSig = JSON.stringify({
                hero: StoryConfig.hero.gender,
                family: Object.keys(StoryConfig.family).filter(k => StoryConfig.family[k].included).sort(),
                pets: Object.keys(StoryConfig.pets).filter(k => StoryConfig.pets[k].included).sort(),
                names: [StoryConfig.hero.name, StoryConfig.pets.heroPet.name]
            });

            progress[this.story.id] = {
                page: this.pageIndex,
                title: this.story.title,
                updatedAt: new Date().toISOString(),
                configSignature: configSig
            };
            localStorage.setItem('masalmio_progress', JSON.stringify(progress));
        },

        renderPage() {
            const page = this.story.pages[this.pageIndex];
            const content = document.getElementById('book-content');
            const indicator = document.getElementById('page-indicator');
            const nextBtn = document.querySelector('.reader-nav button:last-child'); // The forward button

            // Logic for Next Button Icon
            if (this.pageIndex === this.story.pages.length - 1) {
                nextBtn.innerText = '↺'; // Restart icon
            } else {
                nextBtn.innerText = '❯';
            }

            // Dynamic Page Layout
            content.innerHTML = `
            <div class="glass-card animate-in-right reader-card">
                <div class="page-image-container">
                    <img src="${page.image}" class="page-image">
                </div>
                <p class="page-text">
                    ${page.text}
                </p>
            </div>
        `;

            indicator.textContent = `${this.pageIndex + 1} / ${this.story.pages.length}`;
            this.saveProgress();
        },

        nextPage() {
            if (this.pageIndex < this.story.pages.length - 1) {
                this.pageIndex++;
                this.renderPage();
            } else {
                // Restart if on last page
                this.pageIndex = 0;
                this.renderPage();
            }
        },

        prevPage() {
            if (this.pageIndex > 0) {
                this.pageIndex--;
                this.renderPage();
            }
        }
    };

    function renderBook(story, startPage = 0) {
        reader.init(story, startPage);
    }
