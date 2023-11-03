const toggleBtn = document.querySelector(".header__toggle");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu__navigation-link");

toggleBtn?.addEventListener("click", function () {
  menu?.classList.toggle("is-open");
  body?.classList.toggle("scroll-lock");
});

function resetMenu() {
  menu?.classList.remove("is-open");
  body?.classList.remove("scroll-lock");
}

menuLinks.forEach((link) =>
  link.addEventListener("click", function () {
    resetMenu();
  })
);
