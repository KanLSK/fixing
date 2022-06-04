const btn = document.getElementById("mobile-menu-button")
const menu = document.getElementById("mobile-menu")
const close = document.getElementById("closebtn")

btn.addEventListener("click", function() {
    menu.classList.toggle("hidden");
})

close.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})