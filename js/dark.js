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

    // Aplicar automáticamente el tema oscuro al cargar la página
    const defaultTheme = 'dark-theme';
    applyTheme(defaultTheme);

    // Cambiar el tema al hacer clic en el botón
    themeButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || defaultTheme;
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
