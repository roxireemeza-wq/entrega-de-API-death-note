let characters = [];

const charactersContainer = document.getElementById("characters-container");
const searchInput = document.getElementById("search");

// Traer personajes
fetch("https://api.jikan.moe/v4/anime/1535/characters")
  .then(response => response.json())
  .then(data => {
    characters = data.data;
    displayCharacters(characters);
  });

// Mostrar personajes
function displayCharacters(list) {
  charactersContainer.innerHTML = "";

  list.forEach(item => {
    charactersContainer.innerHTML += `
      <div class="card">
        <img src="${item.character.images.jpg.image_url}" alt="${item.character.name}">
        <h3>${item.character.name}</h3>
        <p><strong>Role:</strong> ${item.role}</p>
      </div>
    `;
  });
}

// Buscador
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = characters.filter(item =>
    item.character.name.toLowerCase().includes(value)
  );

  displayCharacters(filtered);
});