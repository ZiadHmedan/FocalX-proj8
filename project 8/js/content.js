const hello = document.querySelector(".Hello");
const title = document.querySelector(".title");
const titleDesc = document.querySelector(".titleDesc");
const work = document.querySelector(".work88arrow");
const rArrow = document.querySelector(".rArrow");

window.addEventListener("load", function () {
  timeout = setTimeout(() => {
    hello.classList.add("HelloAfter");
  }, 2000);
});
window.addEventListener("load", function () {
  timeout = setTimeout(() => {
    title.classList.add("titleAfter");
  }, 3000);
});
window.addEventListener("load", function () {
  timeout = setTimeout(() => {
    titleDesc.classList.add("titleDescAfter");
  }, 4000);
});
window.addEventListener("load", function () {
  timeout = setTimeout(() => {
    work.classList.add("workAfter");
  }, 5000);
});
rArrow.addEventListener("click", () => {
  window.location = "./portofolio.html";
});
