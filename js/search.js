// Fonction pour effectuer une requête GET à l'API de The Movie DB
async function fetchMovies(query) {
  const apiKey = "959788de244478c063a55714a78052c9";
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Écouteur d'événements pour le formulaire de recherche
const searchForm = document.querySelector(".d-flex");
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = document.querySelector("#movie").value;
  const results = await fetchMovies(query);
  console.log(results);
  // Afficher les résultats sur la page web ici
});

// Écouteur d'événements pour l'entrée de texte
const searchInput = document.querySelector("#movie");
const searchResult = document.querySelector("#result");
console.log(searchInput);
searchInput.addEventListener("keyup", async () => {
  const query = searchInput.value;
  console.log(query);
  if (query.length >= 0) {
    const results = await fetchMovies(query);
    console.log(results)
    const dropdown = document.querySelector("#movie-dropdown");
    console.log(dropdown);
    dropdown.innerHTML = "";
    results.slice(0, 10).forEach((result) => {
      const option = document.createElement("p");
      // if media type == 'tv' 
      // option.innerText =  result.title || result.name || result.original_title || result.original_name ;
 // if media type == 'person' 
      option.innerHTML = `<a href='detail.php?id=${result.id}&type=${result.media_type}'>`+  (result.title || result.name || result.original_title || result.original_name) + '</a>';
      dropdown.append(option);
      dropdown.setAttribute('style','display:block !important', 'position:relative');
      searchResult.append(dropdown);
    });
  } else {
    const dropdown = document.querySelector("#movie-dropdown");
    dropdown.innerHTML = "";
  }
});

// Créer une liste déroulante pour les résultats de recherche
const dropdown = document.createElement("datalist");
dropdown.id = "movie-dropdown";
searchInput.after(dropdown);
