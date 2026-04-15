import { discover } from '../data/discover.mjs';

const showPlaces = document.querySelector("#discover");

createcard(discover);

function createcard(discover) {
    discover.forEach(place => {
        const card = document.createElement("div");

        const name = document.createElement("h2");
        name.innerHTML = place.name;
        card.appendChild(name);
        const figure = document.createElement("figure");
        card.appendChild(figure);
        const photo = document.createElement("img");
        photo.src = place.images[0];
        photo.alt = place.name;
        photo.loading = "lazy";
        figure.appendChild(photo);
        const address = document.createElement("address");
        address.innerHTML = place.address;
        card.appendChild(address);
        const description = document.createElement("p");
        description.innerHTML = place.description;
        card.appendChild(description);
        const cost = document.createElement("p");
        cost.classList.add("cost");
        cost.innerHTML = `Cost: ${place.cost}`;
        card.appendChild(cost);
        showPlaces.appendChild(card);
    });
}

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();