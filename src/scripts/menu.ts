const toggleBtn = document.querySelector(".header__toggle");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu__navigation-link");

const toggleBtnTitle = toggleBtn?.querySelector(".blot-btn__title");

toggleBtn?.addEventListener("click", function () {
  if (menu?.classList.contains("is-open")) {
    toggleBtnTitle.textContent = "Меню";
  } else {
    toggleBtnTitle.textContent = "Закрыть";
  }
  menu?.classList.toggle("is-open");
  body?.classList.toggle("scroll-lock");
});

function resetMenu() {
  menu?.classList.remove("is-open");
  body?.classList.remove("scroll-lock");
  toggleBtnTitle.textContent = "Меню";
}

menuLinks.forEach((link) =>
  link.addEventListener("click", function () {
    resetMenu();
  })
);
