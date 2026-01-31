document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const themeSelect = document.getElementById('theme-select');
    const fontSelect = document.getElementById('font-select');
    const joinForm = document.getElementById('join-form');
    const htmlElement = document.documentElement;

    /**
     * Application State Management
     * Handles saving and loading user preferences from LocalStorage
     */
    const settings = {
        save: (key, value) => localStorage.setItem(`lab-${key}`, value),
        load: (key) => localStorage.getItem(`lab-${key}`)
    };

    /**
     * Theme Controller
     * Applies the data-theme attribute to the HTML root
     */
    const applyTheme = (theme) => {
        if (!theme) return;
        htmlElement.setAttribute('data-theme', theme);
        settings.save('theme', theme);
        
        // Console log for debugging (can be removed for production)
        console.log(`System: Theme shifted to ${theme.toUpperCase()}`);
    };

    /**
     * Font Controller
     * Applies the data-font attribute to the HTML root
     */
    const applyFont = (font) => {
        if (!font) return;
        htmlElement.setAttribute('data-font', font);
        settings.save('font', font);
    };

    // --- Event Listeners ---

    themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });

    fontSelect.addEventListener('change', (e) => {
        applyFont(e.target.value);
    });

    /**
     * Form Submission Logic
     * Simulates a secure transmission to the LaB servers
     */
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = joinForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            // Visual feedback for transmission
            submitBtn.disabled = true;
            submitBtn.innerText = "TRANSMITTING SIGNAL...";
            submitBtn.style.opacity = "0.6";

            setTimeout(() => {
                alert("APPLICATION RECEIVED. Welcome to the collective. We will reach out on your frequency soon.");
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = "1";
                joinForm.reset();
            }, 2000);
        });
    }

    /**
     * System Initialization
     * Recalls user preferences on page load
     */
    const init = () => {
        const savedTheme = settings.load('theme') || 'deep-void';
        const savedFont = settings.load('font') || 'auto';

        // Sync UI Selectors with saved state
        themeSelect.value = savedTheme;
        fontSelect.value = savedFont;

        // Apply preferences
        applyTheme(savedTheme);
        applyFont(savedFont);
    };

    init();
});
