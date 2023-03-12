const hamburgerBtns = document.querySelectorAll(".hamburger");
const aside = document.querySelector("aside");

const toggleClass = (element, cls) => {
  element.classList.toggle(cls);
};

hamburgerBtns.forEach((btn) => {
  btn.onclick = () => {
    toggleClass(aside, "show-content-aside");
    toggleClass(aside, "dark-effect");
  };
});

document.onclick = function (event) {
  const clickWidth = event.clientX;
  const isInSidebarArea = clickWidth > 200;
  const isSidebarClick = event.target.tagName === "ASIDE";

  if (!isInSidebarArea && !isSidebarClick) {
    aside.classList.remove("show-content-aside");
    aside.classList.remove("dark-effect");
  }
};
