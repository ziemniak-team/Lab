document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const fontSelect = document.getElementById('font-select');
    const body = document.body;
    const html = document.documentElement;

    // --- OBSŁUGA MOTYWU ---
    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('lab-theme', theme);
    };

    themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));

    // --- OBSŁUGA CZCIONKI ---
    const applyFont = (fontClass) => {
        // Usuń wszystkie poprzednie klasy czcionek
        const fontClasses = ['font-default', 'font-tech', 'font-future', 'font-clean', 'font-code', 'font-classic'];
        body.classList.remove(...fontClasses);
        
        // Dodaj nową wybraną klasę
        body.classList.add(fontClass);
        localStorage.setItem('lab-font', fontClass);
    };

    fontSelect.addEventListener('change', (e) => applyFont(e.target.value));

    // --- INICJALIZACJA ZAPISANYCH USTAWIEŃ ---
    const savedTheme = localStorage.getItem('lab-theme') || 'deep-void';
    const savedFont = localStorage.getItem('lab-font') || 'font-default';

    applyTheme(savedTheme);
    themeSelect.value = savedTheme;

    applyFont(savedFont);
    fontSelect.value = savedFont;

    // --- PROSTA ANIMACJA POJAWIANIA SIĘ ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .manifest-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
