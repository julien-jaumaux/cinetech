const apiKey = '959788de244478c063a55714a78052c9';
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const id = urlParams.get('id');

if (type === 'movie') {
  // Récupérer les détails du film
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  // Récupérer les crédits du film
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
} else if (type === 'tv') {
  // Récupérer les détails de la série TV
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  // Récupérer les crédits de la série TV
  fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
} else {
  console.error('Type de contenu non pris en charge.');
}
