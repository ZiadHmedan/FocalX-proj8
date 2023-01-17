const pOm = document.querySelector(".plusOrMinus");
const plus = document.querySelector(".plusIcon");
const minus = document.querySelector(".minusIcon");
const font = document.querySelectorAll(".font--400--14--000000");
pOm.addEventListener("click", () => {
  plus.classList.toggle("none");
  minus.classList.toggle("none");
  font.forEach((element) => {
    element.classList.toggle("opa1");
  });
});
