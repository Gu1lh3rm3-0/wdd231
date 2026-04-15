const attractions = 'https://gu1lh3rm3-0.github.io/wdd231/final/data/attractions.json';
const cards = document.querySelector(".attractions");

async function getAttractionsData() {
    try {
        const response = await fetch(attractions);
        if (!response.ok) {
            throw new Error(`Error in request: ${response.status}`);
        }

        const data = await response.json();
        displayAttractions(data.places);

    } catch (error) {
        console.error("There was a problem searching for the attractions:", error);
        cards.innerHTML = `<p class="error">We were unable to load the attractions at this time.</p>`;
    } finally {
        console.log("Search attempt completed.");
    }
}

getAttractionsData();

const displayAttractions = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let cost = document.createElement("p");
        let image = document.createElement("img");
        name.textContent = place.name;
        description.textContent = place.description;
        cost.textContent = `Average Cost: ${place.average_cost}`;
        image.src = place.images[0];
        image.alt = place.name;
        image.loading = "lazy";
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(cost);
        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".attractions");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

