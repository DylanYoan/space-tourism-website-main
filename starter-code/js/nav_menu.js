const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav__list');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu__visible")
})