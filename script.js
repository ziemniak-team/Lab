document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const fontSelect = document.getElementById('font-select');
    const root = document.documentElement;
    const body = document.body;

    // --- FUNKCJA ZMIANY MOTYWU ---
    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('lab-theme', theme);
    };

    // --- FUNKCJA ZMIANY FONTA ---
    const applyFont = (font) => {
        body.className = font; // Resetuje inne klasy i ustawia tylko tę
        localStorage.setItem('lab-font', font);
    };

    // --- LISTENERY ---
    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    fontSelect.addEventListener('change', (e) => applyFont(e.target.value));

    // --- INICJALIZACJA ---
    const savedTheme = localStorage.getItem('lab-theme') || 'deep-void';
    const savedFont = localStorage.getItem('lab-font') || 'font-default';

    // Ustaw wartości w selectach i zaaplikuj
    themeSelect.value = savedTheme;
    fontSelect.value = savedFont;
    
    applyTheme(savedTheme);
    applyFont(savedFont);

    // --- OBSŁUGA FORMULARZA (Demo) ---
    const form = document.getElementById('lab-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Wiadomość zaszyfrowana i wysłana do bazy LaB. Dziękujemy.');
            form.reset();
        });
    }
});
