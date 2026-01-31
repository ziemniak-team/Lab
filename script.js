document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const htmlElement = document.documentElement;

    // Funkcja zmieniająca motyw
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('lab-theme', theme);
    };

    // Obsługa wyboru z listy
    themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });

    // Wczytywanie zapisanego motywu przy starcie
    const savedTheme = localStorage.getItem('lab-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
        themeSelect.value = savedTheme;
    }

    // Prosta animacja pojawiania się elementów przy przewijaniu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
