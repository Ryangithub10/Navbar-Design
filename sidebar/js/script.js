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

document.onclick = function (event) {
  const clickWidth = event.clientX;
  const isOutSideClicked = clickWidth < 200 && event.target.tagName !== "ASIDE";

  if (isOutSideClicked) {
    aside.classList.remove("show-content-aside");
  }
};
