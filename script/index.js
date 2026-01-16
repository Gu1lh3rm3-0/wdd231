const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("show");
})

document.getElementById("lastModified").innerHTML = document.lastModified;