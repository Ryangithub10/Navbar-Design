const hamburger = document.getElementById("hamburger");
const icons = hamburger.querySelectorAll("i");

const toggleClass = (element, cls) => {
  element.classList.toggle(cls);
};

hamburger.onclick = function () {
  const header = this.parentElement.parentElement;
  toggleClass(header, "show-content");
  toggleClass(icons[0], "hide");
  toggleClass(icons[1], "hide");
};
