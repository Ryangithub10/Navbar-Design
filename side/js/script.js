const hamburgerBtns = document.querySelectorAll(".hamburger");
const aside = document.querySelector("aside");

const toggleClass = (element, cls) => {
  element.classList.toggle(cls);
};

hamburgerBtns.forEach((btn) => {
  btn.onclick = () => {
    toggleClass(aside, "show-content-aside");
  };
});
