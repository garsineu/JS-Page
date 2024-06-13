const sidebar = document.querySelector('.sidebar');
const darkmode = document.querySelector('.darkmode');
const togglebtn = document.querySelector('.toggle-btn');
const body = document.querySelector('.body');
const list = document.querySelector('.list');
const logo = document.querySelector('.logo');

togglebtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('dark');
    body.classList.toggle('dark');
    togglebtn.classList.toggle('dark');
    logo.classList.toggle('dark');
    list.classList.toggle('dark');
});