const hamburgerButton = document.getElementById("hamburger");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerButton.addEventListener("click" , () => {
    mobileMenu.classList.remove("hide");
})

closeButton.addEventListener("click" , () => {
    mobileMenu.classList.add("hide");
})