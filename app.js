// --- StoryConfig (State) ---
const StoryConfig = {
    hero: { name: "", gender: "boy", avatar: "images/hero_boy_1.png" },
    family: {
        sibling: { name: "", gender: "girl", avatar: "images/sibling_girl_1.png", title: "Kardeş" },
        friend: { name: "", gender: "boy", avatar: "images/friend_boy_1.png", title: "Arkadaş" },
        mom: { name: "", avatar: "images/parent_mom_1.png", title: "Anne" },
        dad: { name: "", avatar: "images/parent_dad_1.png", title: "Baba" },
        mentor: { name: "", avatar: "images/mentor_grandpa_1.png", title: "Bilge Kişi" }
    },
    pets: {
        heroPet: { name: "Boncuk", type: "cat", avatar: "images/pet_cat_1.png" }
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
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeIcon('dark');
        } else {
            document.documentElement.removeAttribute('data-theme'); // Default is Light
            this.updateThemeIcon('light');
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
        { id: 'family', title: 'Aileni Oluştur', render: renderFamilyStep },
        { id: 'pets', title: 'Evcil Hayvanlar', render: renderPetStep }
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
            generateAndShowStory();
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
    const renderRow = (key, label, avatarPath) => `
        <div class="family-row" style="display:flex; align-items:center; margin-bottom:15px; text-align:left;">
            <img src="${avatarPath}" style="width:50px; height:50px; border-radius:50%; margin-right:10px; object-fit:cover;">
            <div style="flex:1;">
                <div style="font-size:0.9rem; opacity:0.8;">${label}</div>
                <input type="text" class="glass-input" style="padding:8px; font-size:0.9rem; text-align:left;" 
                    placeholder="İsim..." autocomplete="off"
                    value="${StoryConfig.family[key].name}" 
                    oninput="StoryConfig.family['${key}'].name = this.value">
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="family-list" style="padding-right:5px;">
            ${renderRow('mom', 'Anne', StoryConfig.family.mom.avatar)}
            ${renderRow('dad', 'Baba', StoryConfig.family.dad.avatar)}
            ${renderRow('sibling', 'Kardeş', StoryConfig.family.sibling.avatar)}
            ${renderRow('friend', 'Arkadaş', StoryConfig.family.friend.avatar)}
            ${renderRow('mentor', 'Bilge Kişi', StoryConfig.family.mentor.avatar)}
        </div>
    `;
}

function renderPetStep(container) {
    container.innerHTML = `
        <div class="input-group" style="margin: 0 auto 20px auto;">
            <label style="display:block; margin-bottom:5px;">Evcil Hayvanın Adı</label>
            <input type="text" class="glass-input" placeholder="İsim Yazınız..." autocomplete="off"
                value="${StoryConfig.pets.heroPet.name}" 
                oninput="StoryConfig.pets.heroPet.name = this.value">
        </div>
        <div class="avatar-grid">
            <div class="avatar-option ${StoryConfig.pets.heroPet.type === 'cat' ? 'selected' : ''}" 
                 onclick="selectPetType('cat')">
                 <img src="images/pet_cat_1.png" class="avatar-img">
                 <span>Kedi</span>
            </div>
            <div class="avatar-option ${StoryConfig.pets.heroPet.type === 'dog' ? 'selected' : ''}" 
                 onclick="selectPetType('dog')">
                 <img src="images/pet_dog_1.png" class="avatar-img">
                 <span>Köpek</span>
            </div>
        </div>
    `;
}

function selectPetType(type) {
    StoryConfig.pets.heroPet.type = type;
    StoryConfig.pets.heroPet.avatar = type === 'cat' ? 'images/pet_cat_1.png' : 'images/pet_dog_1.png';
    wizard.render();
}

// --- Story Generation Logic ---
function generateAndShowStory() {
    app.goDashboard();

    const dashboard = document.getElementById('story-list');
    dashboard.innerHTML = ''; // Clear

    // Create a card for "Çiko's Adventure"
    // Create a HEADLINE card (Hero Style)
    const card = document.createElement('div');
    card.className = 'hero-story-card animate-in';
    card.onclick = () => loadStoryReader('adventure_01');

    // Use specific COVER image if available, otherwise fallback to the forest scene
    const coverImage = "images/scene_forest_pixar.png";

    card.innerHTML = `
        <div class="hero-story-bg" style="background-image: url('${coverImage}');">
            <div class="hero-story-overlay">
                <div class="hero-story-content">
                    <h3 class="hero-story-title">Gizemli Orman</h3>
                    <p class="hero-story-subtitle">${StoryConfig.hero.name} ve ${StoryConfig.pets.heroPet.name}'nun Büyülü Yolculuğu</p>
                    <button class="btn-primary big-pulse-btn" style="width: auto; padding: 15px 40px; font-size: 1.2rem;">Hikayeye Başla 🚀</button>
                </div>
            </div>
        </div>
    `;

    dashboard.appendChild(card);
}

function loadStoryReader(storyId) {
    const story = StoryEngine.generate(storyId, StoryConfig);
    if (story) {
        renderBook(story);
        app.navigateTo('view-reader');
    }
}

// --- Reader Logic ---
const reader = {
    story: null,
    pageIndex: 0,

    init(story) {
        this.story = story;
        this.pageIndex = 0;
        this.renderPage();
    },

    renderPage() {
        const page = this.story.pages[this.pageIndex];
        const content = document.getElementById('book-content');
        const indicator = document.getElementById('page-indicator');

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
    },

    nextPage() {
        if (this.pageIndex < this.story.pages.length - 1) {
            this.pageIndex++;
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

function renderBook(story) {
    reader.init(story);
}
