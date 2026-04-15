const params = new URLSearchParams(window.location.search);

const thankYouMessage = document.querySelector("#thankYou").innerHTML = `
<p>Thank you for your request, ${params.get("firstName")} ${params.get("lastName")} from ${params.get("companyName")}! We look forward to assisting you.</p>
`;

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();