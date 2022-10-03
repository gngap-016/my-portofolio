const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const menuBtn = document.querySelector(".open__menu__button");
const cancelBtn = document.querySelector(".close__menu__button");

menuBtn.addEventListener('click', () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
});

cancelBtn.addEventListener('click', () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
});

window.addEventListener('scroll', () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
});