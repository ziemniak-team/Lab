document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const htmlElement = document.documentElement;

    /**
     * FUNKCJA ZMIANY MOTYWU
     */
    const setTheme = (themeName) => {
        htmlElement.setAttribute('data-theme', themeName);
        localStorage.setItem('lab-theme', themeName);
        console.log(`Motyw zmieniony na: ${themeName}`);
    };

    // Słuchacz zdarzeń dla rozwijanej listy
    themeSelect.addEventListener('change', (event) => {
        setTheme(event.target.value);
    });

    /**
     * INICJALIZACJA STRONY
     */
    const init = () => {
        const savedTheme = localStorage.getItem('lab-theme');
        
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            themeSelect.value = savedTheme;
        } else {
            // Domyślny startowy motyw
            setTheme('deep-void');
        }
    };

    // Obsługa prostych animacji przy przewijaniu
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .article-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });

    init();
});
