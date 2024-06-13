document.addEventListener('DOMContentLoaded', function() {
    // Swich styles
    const themeButton = document.getElementById('themeButton');
    const icon = themeButton.querySelector('i');
    const themeStylesheet = document.getElementById('themeStylesheet');

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark-theme') {
            themeStylesheet.href = 'dark-style.css';
            icon.className = 'fas fa-sun has-text-warning';
        } else {
            themeStylesheet.href = 'style.css';
            icon.className = 'fas fa-moon has-text-black';
        }
        localStorage.setItem('theme', theme);
    }

    // Detectar el esquema de colores preferido del navegador
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferredTheme = prefersDarkScheme ? 'dark-theme' : 'light-theme';

    // Aplicar el tema guardado en localStorage o el preferido por el navegador
    const savedTheme = localStorage.getItem('theme') || preferredTheme;
    applyTheme(savedTheme);

    // Cambiar el tema al hacer clic en el botón
    themeButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || preferredTheme;
        const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        applyTheme(newTheme);
    });

    // Escuchar cambios en el esquema de colores del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) {
            const newColorScheme = event.matches ? 'dark-theme' : 'light-theme';
            applyTheme(newColorScheme);
        }
    });
});
