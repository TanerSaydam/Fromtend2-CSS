const hamburgerElement = document.querySelector(".hamburger");
const ulElement = document.querySelector("nav ul");

hamburgerElement.addEventListener("click", ()=> {
    hamburgerElement.classList.toggle("active");
    ulElement.classList.toggle("active");
});
