const port = document.querySelectorAll(".portofolio");
const bullet = document.querySelectorAll(".bullet");
const btn1 = document.querySelectorAll(".btn1");
for (let i = 0; i < bullet.length; i++) {
  const element = bullet[i];
  element.addEventListener("click", () => {
    port.forEach((element) => {
      element.classList.toggle("tr");
    });
  });
}

for (let i = 0; i < btn1.length; i++) {
  const element = btn1[i];
  element.addEventListener("click", () => {
    port.forEach((element) => {
      element.classList.toggle("tr");
    });
  });
}
