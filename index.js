const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});