document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const htmlElement = document.documentElement;
    const logoSpan = document.querySelector('.logo span');

    // Obsługa zmiany motywu i modyfikacja logo
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('lab-theme', theme);
        
        // Specyficzne zmiany dla logo w zależności od motywu
        if (theme === 'retro-voyager') {
            logoSpan.textContent = '_';
        } else {
            logoSpan.textContent = '.';
        }
    };

    themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });

    // Inicjalizacja
    const savedTheme = localStorage.getItem('lab-theme') || 'deep-void';
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;

    // Obsługa formularza (simulacja)
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dziękujemy! Twoje zgłoszenie zostało wysłane do bazy LaB. Czekaj na sygnał.');
    });
});
