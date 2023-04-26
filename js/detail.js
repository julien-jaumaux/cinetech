// Définir l'URL de l'API et la clé d'API
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '959788de244478c063a55714a78052c9'; // Remplacez par votre propre clé d'API The Movie DB

// Fonction pour récupérer et afficher les détails d'un film
function afficherDetailsFilm(movie) {
  const movieId = movie.id; // ID du film
  const detailsUrl = `${apiUrl}/movie/${movieId}?api_key=${apiKey}`;

  fetch(detailsUrl)
    .then(response => response.json())
    .then(movieDetails => {
      // Code pour afficher les détails du film dans la page web
      console.log("Titre du film : ", movieDetails.title);
      console.log("Description du film : ", movieDetails.overview);
      console.log("Acteurs du film : ", movieDetails.cast);
      // ... autres informations à afficher dans la page web
    })
    .catch(error => console.error(error));
}

