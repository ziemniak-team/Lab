const themeSelect = document.getElementById('theme-select');
const htmlElement = document.documentElement;

// Zmiana motywu
themeSelect.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    htmlElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('lab-theme', selectedTheme); // Zapamiętaj wybór
});

// Wczytywanie zapisanego motywu po odświeżeniu
const savedTheme = localStorage.getItem('lab-theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;
}
