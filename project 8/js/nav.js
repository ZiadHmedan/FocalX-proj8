const menu = document.querySelectorAll(".navIcon");
const nav = document.querySelector(".nav");
const rA = document.querySelector(".rArrow");
//
const navItem = document.querySelectorAll(".navItem");
//
for (let i = 0; i < menu.length; i++) {
  const element = menu[i];
  element.addEventListener("click", () => {
    nav.classList.toggle("navAfter");
    // nav.classList.toString("none");
  });
}
//
for (let i = 0; i < navItem.length; i++) {
  const element = navItem[i];
  element.addEventListener("mouseover", () => {
    navItem.forEach((item) => {
      item.style.opacity = ".3";
    });
    element.style.opacity = "1";
  });
  element.addEventListener("mouseout", () => {
    navItem.forEach((item) => {
      item.style.opacity = "1";
    });
  });
}
