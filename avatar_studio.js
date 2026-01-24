class AvatarStudio {
    constructor() {
        this.state = {
            gender: 'boy', // 'boy' or 'girl'
            skin: 'light', // 'light' or 'dark'
            hair: 'short' // 'short', 'curly' (boy) | 'long', 'braids' (girl)
        };
        this.assets = {
            boy: {
                hairs: [
                    { id: 'short', label: 'Kısa Saç', icon: '✂️' },
                    { id: 'curly', label: 'Kıvırcık', icon: '🌀' }
                ]
            },
            girl: {
                hairs: [
                    { id: 'long', label: 'Uzun Saç', icon: 'long_hair' }, // custom icon or emoji
                    { id: 'braids', label: 'Örgülü', icon: 'reminder_ribbon' }
                ]
            }
        };

        this.init();
    }

    init() {
        // Bind UI elements if they exist, or create them?
        // For now, we assume UI elements will be in index.html and we bind to them.
        this.previewImg = document.getElementById('avatar-preview-img');
        this.skinOptions = document.querySelectorAll('.skin-option');
        this.hairOptions = document.querySelectorAll('.hair-option');

        this.attachListeners();
        this.updatePreview();
    }

    setGender(gender) {
        this.state.gender = gender;
        // Reset hair to default for gender to avoid invalid "short hair girl" if asset missing
        this.state.hair = gender === 'boy' ? 'short' : 'long';
        this.renderHairOptions();
        this.updatePreview();
    }

    setSkin(skin) {
        this.state.skin = skin;
        this.updatePreview();
    }

    setHair(hair) {
        this.state.hair = hair;
        this.updatePreview();
    }

    updatePreview() {
        if (!this.previewImg) return;
        const filename = `images/avatar_${this.state.gender}_${this.state.skin}_${this.state.hair}.png`;
        this.previewImg.src = filename;

        // Highlight selected options
        document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById(`opt-skin-${this.state.skin}`)?.classList.add('selected');
        document.getElementById(`opt-hair-${this.state.hair}`)?.classList.add('selected');
    }

    renderHairOptions() {
        const container = document.getElementById('hair-options-container');
        if (!container) return;

        container.innerHTML = '';
        const options = this.assets[this.state.gender].hairs;

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn hair-option';
            btn.id = `opt-hair-${opt.id}`;
            btn.innerText = opt.label; // Simple text for now
            btn.onclick = () => this.setHair(opt.id);
            container.appendChild(btn);
        });
    }

    // Call this when Save is clicked
    getSelectedAvatar() {
        return `images/avatar_${this.state.gender}_${this.state.skin}_${this.state.hair}.png`;
    }

    attachListeners() {
        // Manual binding handled in render/init
    }
}

// Global instance
window.avatarStudio = new AvatarStudio();
