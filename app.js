// --- Constants ---
const AVATAR_OPTIONS = {
    mom: [
        { id: 'mom1', src: 'images/parent_mom_1.png' },
        { id: 'mom2', src: 'images/parent_mom_2_blonde.png' },
        { id: 'mom3', src: 'images/parent_mom_3_curly.png' },
        { id: 'mom4', src: 'images/parent_mom_4_glasses.png' }
    ],
    dad: [
        { id: 'dad1', src: 'images/parent_dad_1.png' },
        { id: 'dad2', src: 'images/parent_dad_2_blonde.png' },
        { id: 'dad3', src: 'images/parent_dad_3_mustache.png' },
        { id: 'dad4', src: 'images/parent_dad_4_glasses.png' }
    ],
    mentor: [
        { id: 'mentor1', src: 'images/mentor_grandpa_1.png', type: 'male' },
        { id: 'mentor2', src: 'images/mentor_grandma_1.png', type: 'female' },
        { id: 'mentor3', src: 'images/mentor_man_1.png', type: 'male' },
        { id: 'mentor4', src: 'images/mentor_woman_1.png', type: 'female' }
    ],
    sibling: [
        { id: 'sib1', src: 'images/sibling_girl_1.png', type: 'girl' },
        { id: 'sib2', src: 'images/sibling_girl_2.png', type: 'girl' },
        { id: 'sib3', src: 'images/sibling_boy_1.png', type: 'boy' },
        { id: 'sib4', src: 'images/sibling_boy_2.png', type: 'boy' }
    ],
    friend: [
        { id: 'friend1', src: 'images/friend_boy_1.png', type: 'boy' },
        { id: 'friend2', src: 'images/friend_boy_2.png', type: 'boy' },
        { id: 'friend3', src: 'images/friend_girl_1.png', type: 'girl' },
        { id: 'friend4', src: 'images/friend_girl_2.png', type: 'girl' }
    ]
};

const TRANSLATIONS = {
    en: {
        welcomeSubtitle: "Be the hero of your own fairy tale!",
        enterApp: "Enter App 🚀",
        heroDefault: "Hero",
        wizardTitle: "Create Your Story ✨",
        heroLabel: "Your Hero",
        namePlaceholder: "Enter Name...",
        boy: "Boy",
        girl: "Girl",
        lovedOnes: "Loved Ones",
        mom: "Mom",
        dad: "Dad",
        sibling: "Sibling",
        friend: "Friend",
        mentor: "Mentor",
        petLabel: "Cute Pet 🐾",
        petNamePlaceholder: "Name...",
        selectMom: "Select Mom",
        selectDad: "Select Dad",
        selectMentor: "Select Mentor",
        selectSibling: "Select Sibling",
        selectFriend: "Select Friend",
        createStoryBtn: "Create Story ✨",
        newStoryCardTitle: "Write a New Story 🪄",
        newStoryCardDesc: "Ready to create your own adventure?",
        createBtn: "Create +",
        myStories: "My Stories 🔖",
        recommended: "Recommended for You ✨",
        welcomeBack: "Welcome back,",
        deleteStory: "Delete Story?",
        deleteConfirm: "This story will be lost forever. Are you sure?",
        cancel: "Cancel",
        yesDelete: "Yes, Delete",
        emptyStories: "No new stories found for these characters right now. Try changing selection.",
        allStoriesFound: "You've discovered all stories! Amazing! 🎉",
        startStory: "Start Story 🚀",
        page: "Page",
        end: "THE END",
        alertName: "Please enter a name for your hero! 🦸"
    },
    tr: {
        welcomeSubtitle: "Kendi masalının kahramanı ol!",
        enterApp: "Giriş Yap 🚀",
        heroDefault: "Kahraman",
        wizardTitle: "Masalını Oluştur ✨",
        heroLabel: "Kahramanın",
        namePlaceholder: "İsim Yazınız...",
        boy: "Erkek",
        girl: "Kız",
        lovedOnes: "Sevdiklerin",
        mom: "Anne",
        dad: "Baba",
        sibling: "Kardeş",
        friend: "Arkadaş",
        mentor: "Bilge Kişi",
        petLabel: "Sevimli Dostun 🐾",
        petNamePlaceholder: "İsmi...",
        selectMom: "Anne Seçimi",
        selectDad: "Baba Seçimi",
        selectMentor: "Bilge Kişi Seçimi",
        selectSibling: "Kardeş Seçimi",
        selectFriend: "Arkadaş Seçimi",
        createStoryBtn: "Hikaye Oluştur ✨",
        newStoryCardTitle: "Yeni Bir Masal Yaz 🪄",
        newStoryCardDesc: "Kendi maceranı oluşturmaya hazır mısın?",
        createBtn: "Oluştur +",
        myStories: "Hikayelerim 🔖",
        recommended: "Senin İçin Seçtiklerimiz ✨",
        welcomeBack: "Hoş geldin,",
        deleteStory: "Hikayeyi Sil?",
        deleteConfirm: "Bu hikaye sonsuza dek kaybolacak. Emin misin?",
        cancel: "Vazgeç",
        yesDelete: "Evet, Sil",
        emptyStories: "Şu an bu karakterlerle yeni bir hikaye bulamadık. Lütfen farklı karakterler seçmeyi dene.",
        allStoriesFound: "Tüm hikayeleri keşfettiniz! Harika! 🎉",
        startStory: "Hikayeye Başla 🚀",
        page: "Sayfa",
        end: "SON",
        alertName: "Lütfen kahramanının ismini yaz! 🦸"
    }
};

// --- StoryConfig (State) ---
const StoryConfig = {
    lang: 'tr', // Default
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

    // Translation Helper
    T(key) {
        const lang = StoryConfig.lang || 'tr';
        return TRANSLATIONS[lang][key] || key;
    },

    toggleLanguage() {
        StoryConfig.lang = StoryConfig.lang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('masalmio_lang', StoryConfig.lang);
        this.updateLangIcon();
        this.refreshUI();
    },

    updateLangIcon() {
        const icons = document.querySelectorAll('.lang-icon-text');
        icons.forEach(icon => {
            icon.innerText = StoryConfig.lang === 'tr' ? '🇹🇷' : '🇬🇧';
        });
    },

    refreshUI() {
        // Update Static Elements if they exist
        const welcomeP = document.querySelector('#view-welcome p');
        if (welcomeP) welcomeP.innerText = this.T('welcomeSubtitle');

        const enterBtn = document.querySelector('#view-welcome .btn-primary');
        if (enterBtn) enterBtn.innerText = this.T('enterApp');

        // Re-render active view
        if (document.getElementById('view-wizard').classList.contains('active-view')) {
            wizard.render();
        } else if (document.getElementById('view-dashboard').classList.contains('active-view')) {
            this.renderDashboard();
        } else if (document.getElementById('view-reader').classList.contains('active-view')) {
            // Reader needs story regeneration usually, or just text update if structured rigtht.
            // Simpler: Go back to dashboard to avoid complex state issues in reader
            this.renderDashboard();
        }
    },

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
        const icons = document.querySelectorAll('.theme-icon-text');
        icons.forEach(icon => {
            icon.innerText = theme === 'dark' ? '🌙' : '☀️';
        });
    },

    initTheme() {
        // Language Init
        const savedLang = localStorage.getItem('masalmio_lang');
        if (savedLang) StoryConfig.lang = savedLang;
        this.updateLangIcon();
        this.refreshUI(); // Set initial texts

        // Theme Init
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateThemeIcon('dark');
        } else {
            document.documentElement.removeAttribute('data-theme'); // Default is Light
            this.updateThemeIcon('light');
        }
    },

    resetApp() {
        if (confirm(this.T('deleteConfirm'))) {
            localStorage.removeItem('masalmio_progress');
            localStorage.removeItem('masalmio_favorites');
            // Keep theme/lang maybe?
            localStorage.clear();
            window.location.reload(true);
        }
    },

    // --- Avatar Studio Integration ---
    openAvatarStudio() {
        const modal = document.getElementById('avatar-studio-modal');
        if (!modal) return;

        // Init Studio with current gender
        if (window.avatarStudio) {
            window.avatarStudio.setGender(StoryConfig.hero.gender);
            // Optionally try to match current avatar to studio state? 
            // For now just fresh start or default state is fine.
        }

        modal.classList.remove('hidden');
    },

    confirmAvatarSelection() {
        if (window.avatarStudio) {
            const newAvatar = window.avatarStudio.getSelectedAvatar();
            StoryConfig.hero.avatar = newAvatar;
            wizard.render(); // Update wizard UI
            document.getElementById('avatar-studio-modal').classList.add('hidden');
        }
    }
};

// Initialize Theme on Load
document.addEventListener('DOMContentLoaded', () => {
    app.initTheme();
});

// --- Wizard Logic ---
const wizard = {
    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('wizard-steps');
        const progressBar = document.getElementById('wizard-progress');

        // Hide header back button if desired, or keep it to go Home.
        // Keeping it visible since it goes Home.

        // Progress is 100% or 50%? Let's say 50% initially then 100%? 
        // Or just full width since it is one page? Let's make it full.
        progressBar.style.width = `100%`;

        container.innerHTML = `
            <div class="glass-card animate-in" style="width: 100%; max-width: 500px;">
                <h2>${app.T('wizardTitle')}</h2>
                <div id="step-content" style="margin-top:20px;"></div>
            </div>
        `;

        renderCombinedStep(document.getElementById('step-content'));

        // Update Button
        const nextBtn = document.getElementById('btn-next');
        nextBtn.innerText = app.T('createStoryBtn');
        nextBtn.onclick = () => this.finish();
    },

    finish() {
        // Validation could go here
        if (!StoryConfig.hero.name) {
            alert(app.T('alertName'));
            return;
        }
        console.log("Wizard Complete:", StoryConfig);
        app.renderDashboard(true);
    }
};

// --- Step Renderers ---

function renderCombinedStep(container) {
    // 1. Hero Section
    const heroSection = `
        <h3 style="margin: 0 0 15px; opacity: 0.9; font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 5px;">${app.T('heroLabel')}</h3>
        <div class="input-group" style="margin: 0 auto 20px auto;">
            <input type="text" class="glass-input" placeholder="${app.T('namePlaceholder')}" autocomplete="off"
                value="${StoryConfig.hero.name}" 
                oninput="StoryConfig.hero.name = this.value">
        </div>
        <div class="avatar-hero-container" style="text-align:center; margin-bottom: 30px;">
            <!-- Gender Toggle -->
            <div style="display:flex; justify-content:center; gap:20px; margin-bottom:15px;">
                <button class="btn-secondary ${StoryConfig.hero.gender === 'boy' ? 'active-gender' : ''}" 
                        onclick="selectHeroGender('boy')" style="padding: 5px 15px; font-size: 0.9rem; ${StoryConfig.hero.gender === 'boy' ? 'background: #2196F3; color: white; border-color: #2196F3;' : ''}">
                    ${app.T('boy')}
                </button>
                <button class="btn-secondary ${StoryConfig.hero.gender === 'girl' ? 'active-gender' : ''}" 
                        onclick="selectHeroGender('girl')" style="padding: 5px 15px; font-size: 0.9rem; ${StoryConfig.hero.gender === 'girl' ? 'background: #E91E63; color: white; border-color: #E91E63;' : ''}">
                    ${app.T('girl')}
                </button>
            </div>
            
            <!-- Avatar Preview & Edit Button -->
            <div style="position:relative; display:inline-block;">
                <img src="${StoryConfig.hero.avatar}" style="width:120px; height:120px; border-radius:50%; border:4px solid white; box-shadow:0 10px 20px rgba(0,0,0,0.1); object-fit: cover; background: #fff;">
                <button onclick="app.openAvatarStudio()" style="position:absolute; bottom:0; right:0; background:#FFC107; color:#333; border:none; border-radius:50%; width:40px; height:40px; cursor:pointer; font-size:1.2rem; box-shadow:0 4px 6px rgba(0,0,0,0.2); display:flex; align-items:center; justify-content:center;">✏️</button>
            </div>
            <div style="margin-top:10px; font-size:0.8rem; opacity:0.7;">Karakterini düzenlemek için kaleme tıkla</div>
        </div>
    `;

    // 2. Family & Friends Section
    // Helper to render a family member row
    const renderRow = (key, label, avatarPath) => {
        const member = StoryConfig.family[key];
        const isSelected = member.included;

        // Special Layout for Parents with Multiple Avatars
        if (AVATAR_OPTIONS[key]) {
            const options = AVATAR_OPTIONS[key];
            let avatarsHtml = options.map(opt => {
                const isActive = member.included && member.avatar === opt.src;
                // If not included but this is the "selected" avatar in config (last used), we might show it selected but dim?
                // Simpler: Just show all options. If one matches member.avatar, it gets special border if included.
                // If not included, all dim?
                // Let's go with: Click to select & include.

                const isCurrent = member.avatar === opt.src;
                const showCheck = isCurrent && member.included;

                return `
                <div onclick="selectParentAvatar('${key}', '${opt.src}')" 
                     class="avatar-selectable"
                     style="position:relative; width: 55px; height: 55px; border-radius: 50%; border: 3px solid ${showCheck ? '#4CAF50' : 'transparent'}; cursor: pointer; flex-shrink: 0; opacity: ${showCheck || !member.included ? '1' : '0.5'}; transform: scale(${showCheck ? '1.1' : '1'}); transition: all 0.2s;">
                    <img src="${opt.src}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                    ${showCheck ? '<span style="position:absolute; bottom:-5px; right:-5px; background:#4CAF50; color:white; border-radius:50%; width:18px; height:18px; font-size:10px; display:flex; align-items:center; justify-content:center;">✓</span>' : ''}
                </div>
                `;
            }).join('');

            let selectTitle = app.T('selectDad'); // Default
            if (key === 'mom') selectTitle = app.T('selectMom');
            if (key === 'mentor') selectTitle = app.T('selectMentor');
            if (key === 'sibling') selectTitle = app.T('selectSibling');
            if (key === 'friend') selectTitle = app.T('selectFriend');

            const showNameInput = (key === 'mentor' || key === 'sibling' || key === 'friend') && member.included;

            return `
            <div class="family-row" style="margin-bottom:20px; text-align:left;">
                <div style="font-size:0.9rem; margin-bottom:8px; opacity:0.9; padding-left:5px;">${selectTitle}</div>
                <div style="display:flex; gap:15px; overflow-x:auto; padding: 5px; scrollbar-width:none;">
                    ${avatarsHtml}
                </div>
                ${showNameInput ? `
                <div class="animate-in" style="margin-top:10px; max-width: 200px; margin-left: 5px;">
                    <input type="text" class="glass-input" style="padding:8px; font-size:0.9rem;" 
                           placeholder="${app.T('namePlaceholder')}" autocomplete="off"
                           value="${member.name}" 
                           oninput="StoryConfig.family['${key}'].name = this.value">
                </div>
                ` : ''}
            </div>
            `;
        }

        // Standard Layout for Others
        const showInput = key !== 'mom' && key !== 'dad'; // Should be true for others
        return `
        <div class="family-row" style="display:flex; align-items:center; margin-bottom:15px; text-align:left;">
            <div onclick="toggleFamilyMember('${key}')" class="avatar-selectable ${isSelected ? 'avatar-selected' : ''}"
                 style="position:relative; width:60px; height:60px; border-radius:50%; margin-right:15px; flex-shrink:0;">
                <img src="${avatarPath}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                ${isSelected ? '<span style="position:absolute; bottom:0; right:0; background:#4CAF50; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center;">✓</span>' : ''}
            </div>
            <div style="flex:1; opacity: ${isSelected ? '1' : '0.5'}; transition:opacity 0.3s;">
                <div style="font-size:0.9rem; margin-bottom:4px;">${label}</div>
                ${showInput ? `
                <input type="text" class="glass-input" style="padding:8px; font-size:0.9rem; text-align:left;" 
                    placeholder="${app.T('namePlaceholder')}" autocomplete="off"
                    value="${member.name}" 
                    ${!isSelected ? 'disabled' : ''}
                    oninput="StoryConfig.family['${key}'].name = this.value">
                ` : ''}
            </div>
        </div>
        `;
    };

    const familySection = `
        <h3 style="margin: 0 0 20px; opacity: 0.9; font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 5px;">${app.T('lovedOnes')}</h3>
        <div class="family-list" style="padding-right:5px; margin-bottom: 30px;">
            ${renderRow('mom', app.T('mom'), StoryConfig.family.mom.avatar)}
            ${renderRow('dad', app.T('dad'), StoryConfig.family.dad.avatar)}
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 15px 0;">
            ${renderRow('sibling', app.T('sibling'), StoryConfig.family.sibling.avatar)}
            ${renderRow('friend', app.T('friend'), StoryConfig.family.friend.avatar)}
            ${renderRow('mentor', app.T('mentor'), StoryConfig.family.mentor.avatar)}
        </div>
    `;

    // 3. Pet Section
    const pet = StoryConfig.pets.heroPet;
    const isCatSelected = pet.included && pet.type === 'cat';
    const isDogSelected = pet.included && pet.type === 'dog';

    const petSection = `
        <h3 style="margin: 0 0 15px; opacity: 0.9; font-size: 1.1rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 5px;">${app.T('petLabel')}</h3>
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
                <input type="text" class="glass-input" placeholder="${app.T('petNamePlaceholder')}" 
                       style="width: 100%; text-align: center;"
                       value="${pet.name}" oninput="StoryConfig.pets.heroPet.name = this.value">
            </div>
        ` : ''}
    `;

    container.innerHTML = heroSection + familySection + petSection;
}

function selectHeroGender(gender) {
    StoryConfig.hero.gender = gender;
    StoryConfig.hero.avatar = gender === 'boy' ? 'images/hero_boy_1.png' : 'images/hero_girl_1.png';
    wizard.render(); // Re-render to show selection
}

function toggleFamilyMember(key) {
    const member = StoryConfig.family[key];
    member.included = !member.included;
    wizard.render();
}

function selectParentAvatar(key, src) {
    const member = StoryConfig.family[key];
    const options = AVATAR_OPTIONS[key];
    const selectedOption = options.find(o => o.src === src);

    // Update Gender if valid
    if (selectedOption && selectedOption.type) {
        // Map 'girl'/'boy' to 'girl'/'boy' or whatever StoryConfig uses
        // StoryConfig uses 'gender'.
        member.gender = selectedOption.type;
        // Special case for mentor variants if needed, or just rely on avatar check in stories
        // For mentor, type might be missing in my previous update? Let's check AVATAR_OPTIONS for mentor.
    }

    // Logic: If clicking the ALREADY selected one -> Toggle inclusion
    if (member.avatar === src) {
        member.included = !member.included;
    } else {
        // If clicking a new one -> Select it AND Include it
        member.avatar = src;
        member.included = true;
    }
    wizard.render();
}

function selectPet(type) {
    const pet = StoryConfig.pets.heroPet;
    // Toggle logic
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
    document.getElementById('dash-hero-name').textContent = `${app.T('welcomeBack')} ${heroName} 👋`;
    document.getElementById('dash-hero-name').parentElement.style.opacity = "1";

    const dashboard = document.getElementById('story-list');
    dashboard.innerHTML = ''; // Clear

    // --- 0. NEW STORY BUTTON (Hero Section) ---
    // --- 0. NEW STORY BUTTON (Hero Section) ---
    // Only show if NOT showing recommendations (User request: remove it when showing recommendations)
    if (!showRecommendations) {
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
                <h3 style="margin-bottom: 5px; color: var(--primary);">${app.T('newStoryCardTitle')}</h3>
                <p style="font-size: 0.9rem; opacity: 0.8;">${app.T('newStoryCardDesc')}</p>
            </div>
            <button class="btn-primary" style="margin:0; font-size:1rem; padding: 10px 20px;" onclick="app.startWizard()">${app.T('createBtn')}</button>
        `;
        dashboard.appendChild(createBtnContainer);
    }

    // --- Data Load ---
    const savedProgress = JSON.parse(localStorage.getItem('masalmio_progress') || '{}');
    const favorites = JSON.parse(localStorage.getItem('masalmio_favorites') || '[]');
    let startedStoriesIds = Object.keys(savedProgress);

    // Filter "My Stories" based on filtering logic if needed, but usually we show all "Started" ones.
    // However, for RE-Recommendation logic, we need to know the config of started stories.

    // 1. My Stories Section
    // User Request: Hide "My Stories" if showing recommendations (Wizard completion mode)
    if (!showRecommendations && startedStoriesIds.length > 0) {
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
                <h3 style="margin:0; opacity:0.8;">${app.T('myStories')}</h3>
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

            // Localized Title for My Stories
            let displayTitle = story.title;
            if (StoryConfig.lang === 'en' && story.title_en) {
                displayTitle = story.title_en;
            }

            // Click handling: Text content opens story, Star toggles favorite
            card.innerHTML = `
                <div style="flex:1; cursor:pointer;" onclick="loadStoryReader('${id}', ${progress.page})">
                    <h4 style="margin-bottom:5px; color: var(--primary);">${displayTitle}</h4>
                    <p style="font-size:0.9rem; opacity:0.8;">${app.T('page')} ${progress.page + 1} / ${story.pages.length}</p>
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
                <h3 style="margin:0; opacity:0.8;">${app.T('recommended')}</h3>
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

            // Relaxed Parent Logic: Allow swap
            // If story needs mom, but we have dad (or vice versa), it's okay.
            // Only fail if BOTH are missing when one is needed.
            const hasAnyParent = StoryConfig.family.mom.included || StoryConfig.family.dad.included;
            if ((reqs.includes('mom') || reqs.includes('dad')) && !hasAnyParent) return false;

            return true;
        });

        const recoContent = forYouSection.querySelector('#reco-content');

        if (validStories.length === 0) {
            if (startedStoriesIds.length === 0) {
                recoContent.innerHTML = `<p style="text-align:center; opacity:0.7; padding:20px;">${app.T('emptyStories')}</p>`;
            } else {
                recoContent.innerHTML = `<p style="text-align:center; opacity:0.7; padding:20px;">${app.T('allStoriesFound')}</p>`;
            }
        } else {
            validStories.forEach((story, index) => {
                // Localized Strings
                let displayTitle = story.title;
                let displaySummary = story.summary;

                if (StoryConfig.lang === 'en') {
                    if (story.title_en) displayTitle = story.title_en;
                    if (story.summary_en) displaySummary = story.summary_en;
                }

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
                                <h3 class="hero-story-title">${displayTitle}</h3>
                                <p class="hero-story-subtitle">${displaySummary}</p>
                                <button class="btn-primary big-pulse-btn" onclick="loadStoryReader('${story.id}')" style="width: auto; padding: 15px 40px; font-size: 1.2rem;">${app.T('startStory')}</button>
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
                            <h4 style="margin-bottom:3px; color: var(--text);">${displayTitle}</h4>
                            <p style="font-size:0.85rem; opacity:0.7; line-height:1.2;">${displaySummary}</p>
                        </div>
                    </div>
                `;
                }
                recoContent.appendChild(card);
            });
        }
        dashboard.appendChild(forYouSection);
    }
};

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

// --- Helper Functions (Global) ---

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

// Helper for Favorites
function toggleFavorite(storyId, btnEl) {
    const favorites = JSON.parse(localStorage.getItem('masalmio_favorites') || '[]');
    const index = favorites.indexOf(storyId);

    // Prevent event bubbling if needed, but onclick on button usually handles it.
    if (index === -1) {
        favorites.push(storyId);
        btnEl.classList.add('is-favorite');
    } else {
        favorites.splice(index, 1);
        btnEl.classList.remove('is-favorite');
    }

    localStorage.setItem('masalmio_favorites', JSON.stringify(favorites));
}

// --- Reader Logic (Global) ---
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

function loadStoryReader(storyId, startPage = 0) {
    const story = StoryEngine.generate(storyId, StoryConfig);
    if (story) {
        renderBook(story, startPage);
        app.navigateTo('view-reader');
    }
}

function renderBook(story, startPage = 0) {
    reader.init(story, startPage);
}

// Modal functions are attached to app, so they are fine.
// app.deleteStory, app.closeModal etc are attached to app.

