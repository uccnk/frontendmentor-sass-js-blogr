const btnHamburger = document.querySelector("#btnHamburger");
const headerLink = document.querySelectorAll(".header__links li");
const menu = document.querySelector(".header__links");

//untuk test bagian open close sub-menu
headerLink.forEach(function (element) {
  element.addEventListener("click", function () {
    // headerLink.forEach(function (element) {
    //     element.classList.remove("open");
    //   });
    if (element.classList.contains("open")) {
      element.classList.remove("open");

      var anyChildOpen = document.querySelectorAll(".header__childs.open");
      anyChildOpen.forEach(function (el) {
        el.classList.remove("open");
      });
    } else {
      var anyOpen = document.querySelectorAll(".header__links .open");
      anyOpen.forEach(function (el) {
        el.classList.remove("open");
      });

      var anyChildOpen = document.querySelectorAll(".header__childs.open");
      anyChildOpen.forEach(function (el) {
        el.classList.remove("open");
      });

      element.classList.add("open");
      var childUl = document.querySelector(".header__links .open .header__childs");
      childUl.classList.add("open");
    }
  });
});
//untuk test bagian open close sub-menu
btnHamburger.addEventListener("click", function () {
  console.log("hamburger clicked");
  btnHamburger.classList.toggle("toggle");
  menu.classList.toggle("open");
});
