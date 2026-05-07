const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  normal: "#A8A878",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  steel: "#B8B8D0",
};

let offset = 0;
const limit = 20;

const grid = document.getElementById("grid");
const loadingMsg = document.getElementById("loading-msg");
const loadMoreBtn = document.getElementById("load-more-btn");
const searchBox = document.getElementById("search-box");
const listPage = document.getElementById("list-page");
const detailPage = document.getElementById("detail-page");

async function loadPokemon() {
  loadingMsg.style.display = "block";
  loadMoreBtn.style.display = "none";

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await res.json();
  offset += limit;

  for (const item of data.results) {
    const poke = await fetch(item.url).then((r) => r.json());
    addCard(poke);
  }
  loadingMsg.style.display = "none";
  if (data.next) loadMoreBtn.style.display = "block";
}

function addCard(poke) {
  const types = poke.types.map((t) => t.type.name);
  const img =
    poke.sprites.other["official-artwork"].front_default ||
    poke.sprites.front_default;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <div class="number">#${String(poke.id).padStart(3, "0")}</div>
      <img src="${img}" alt="${poke.name}">
      <div class="name">${poke.name}</div>
      <div>
        ${types.map((t) => `<span class="type" style="background:${typeColors[t] || "#aaa"}">${t}</span>`).join("")}
      </div>
    `;

  card.addEventListener("click", () => openDetail(poke.id));
  grid.appendChild(card);
}

loadPokemon();
