document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const themeSelect = document.getElementById('theme-select');
    const fontSelect = document.getElementById('font-select');
    const html = document.documentElement;
    const logoLink = document.getElementById('dynamic-logo');

    // --- LOGIC: UPDATE LOGO BASED ON THEME ---
    const updateLogo = (theme) => {
        if (theme === 'retro-voyager') {
            logoLink.innerHTML = 'SYS.LaB<span class="dot">_</span>';
        } else if (theme === 'potato') {
            logoLink.innerHTML = 'LaB <small>(Lite)</small>';
        } else if (theme === 'cyber-punk') {
            logoLink.innerHTML = 'LaB<span class="dot">2077</span>';
        } else {
            logoLink.innerHTML = 'LaB<span class="dot">.</span>';
        }
    };

    // --- LOGIC: APPLY THEME ---
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('lab-theme', theme);
        updateLogo(theme);
    };

    // --- LOGIC: APPLY FONT ---
    const applyFont = (font) => {
        html.setAttribute('data-font', font);
        localStorage.setItem('lab-font', font);
    };

    // --- EVENT LISTENERS ---
    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    fontSelect.addEventListener('change', (e) => applyFont(e.target.value));

    // --- INIT (LOAD SETTINGS) ---
    const savedTheme = localStorage.getItem('lab-theme') || 'deep-void';
    const savedFont = localStorage.getItem('lab-font') || 'auto';

    themeSelect.value = savedTheme;
    fontSelect.value = savedFont;
    
    applyTheme(savedTheme);
    applyFont(savedFont);

    // --- FORM SIMULATION ---
    document.getElementById('join-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Transmitting...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Signal Received. Welcome to the LaB database.');
            btn.innerText = originalText;
            btn.style.opacity = '1';
            e.target.reset();
        }, 1500);
    });
});
