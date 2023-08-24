let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");

console.log(nav)
console.log(menubar)

nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")

})