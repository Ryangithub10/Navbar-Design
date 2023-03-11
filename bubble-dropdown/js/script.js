const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");
const icons = hamburger.querySelectorAll("i");

const toggleClass = (element, cls) => {
  element.classList.toggle(cls);
};

hamburger.onclick = function () {
  toggleClass(nav, "show-content-popup");
  toggleClass(icons[0], "hide");
  toggleClass(icons[1], "hide");
};
