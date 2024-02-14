/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// switch toggle to close icon
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

// switch close to toggle icon
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = function () {
  const header = document.getElementById("header");
  //When scroll >= 50 viewport Height
  //this → window : not strict model
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);

/*=============== DARK LIGHT THEME ===============*/
