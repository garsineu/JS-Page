const sidebar = document.querySelector('.sidebar');
const darkmodeButton = document.querySelector('[darkmodebutton]');
const darkmodeIcon = document.querySelector('.darkmode');
const togglebtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body'); // Selects the <body> tag
const list = document.querySelector('.list');
const logo = document.querySelector('.logo');

togglebtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function applyDarkMode(isDark) {
    if (isDark) {
        darkmodeIcon.classList.add('dark');
        body.classList.add('dark');
        togglebtn.classList.add('dark');
        logo.classList.add('dark');
        list.classList.add('dark');
        darkmodeIcon.classList.replace('bx-sun', 'bx-moon');
    } else {
        darkmodeIcon.classList.remove('dark');
        body.classList.remove('dark');
        togglebtn.classList.remove('dark');
        logo.classList.remove('dark');
        list.classList.remove('dark');
        darkmodeIcon.classList.replace('bx-moon', 'bx-sun');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkmode') === 'true';
    applyDarkMode(isDarkMode);
});

darkmodeButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    togglebtn.classList.toggle('dark');
    logo.classList.toggle('dark');
    list.classList.toggle('dark');
    darkmodeIcon.classList.toggle('dark');

    applyDarkMode(isDark);

    localStorage.setItem('darkmode', isDark);
});