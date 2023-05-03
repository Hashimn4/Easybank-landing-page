let burger = document.querySelector(".header__burger");
let closeBtn = document.querySelector(".nav__close");
let menu = document.querySelector(".header__nav-secondary");

burger.addEventListener("click", () => {
    burger.classList.toggle("disappear");
    menu.classList.toggle("active");
    closeBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    closeBtn.classList.toggle("active");
    burger.classList.toggle("disappear");
})