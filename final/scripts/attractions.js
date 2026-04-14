const attractions = 'https://gu1lh3rm3-0.github.io/wdd231/final/data/attractions.json';
const cards = document.querySelector(".attractions");

async function getAttractionsData() {
    const response = await fetch(attractions);
    const data = await response.json();
    displayAttractions(data.places);
}

getAttractionsData();

const displayAttractions = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let cost = document.createElement("p");
        name.textContent = place.name;
        description.textContent = place.description;
        cost.textContent = `Average Cost: ${place.average_cost}`;
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(cost);
        cards.appendChild(card);
    });
}

