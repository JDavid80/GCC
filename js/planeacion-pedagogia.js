"use strict"

let mainNav = document.getElementById("mainNav");
let iconoMenu = document.getElementById("iconoMenu");

iconoMenu.addEventListener("click", function() {
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("main-nav-hidden");
});