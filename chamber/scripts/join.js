// Dialog functionality for membership information

const npbutton = document.querySelector("#learnNp");
const bronzeButton = document.querySelector("#learnBronze");
const silverButton = document.querySelector("#learnSilver");
const goldButton = document.querySelector("#learnGold");

const dialog = document.querySelector("#membershipDialog");
const dialogContent = document.querySelector("#membershipDialog div");
const closeButton = document.querySelector("#closeDialog");

npbutton.addEventListener("click", () => {
    dialogContent.innerHTML = "The Non-Profit Membership is designed for organizations that operate on a non-profit basis. It offers access to resources, networking opportunities, and support tailored to the unique needs of non-profit entities. Benefits may include discounted event fees, access to grant information, and opportunities for collaboration with other non-profit organizations.";
    dialog.showModal();
});

bronzeButton.addEventListener("click", () => {
    dialogContent.innerHTML = "The Bronze Membership is ideal for small businesses looking to establish a presence within the chamber. It provides networking opportunities, access to exclusive events, and promotional support to help grow your business.";
    dialog.showModal();
});

silverButton.addEventListener("click", () => {
    dialogContent.innerHTML = "The Silver Membership offers enhanced benefits for growing businesses. Members receive priority access to events, dedicated support, and opportunities to participate in chamber initiatives and committees.";
    dialog.showModal();
});

goldButton.addEventListener("click", () => {
    dialogContent.innerHTML = "The Gold Membership is designed for leading organizations that want maximum exposure and influence within the chamber. Benefits include exclusive networking events, prominent branding opportunities, and active participation in strategic decision-making processes.";
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

// Hamburger Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

// Footer // Last Modified Date and Current Year
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();