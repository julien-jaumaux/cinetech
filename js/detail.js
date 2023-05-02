const apiKey = '959788de244478c063a55714a78052c9';
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const id = urlParams.get('id');

/////////////////////film//////////////////////////

if (type === 'movie') {
  // Récupérer les détails du film
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse

      const movieDetailsDiv = document.getElementById("movie-details");
      movieDetailsDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.overview}</p>
        <p>Released on: ${data.release_date}</p>
        <p>Vote Average: ${data.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title} poster">
      `;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  // Récupérer les crédits du film
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse

      const movieCreditsDiv = document.getElementById("movie-credits");
      const credits = data.cast.map(actor => `<li>${actor.name} as ${actor.character}</li>`).join("");
      movieCreditsDiv.innerHTML = `
        <h2>Movie Credits</h2>
        <ul>${credits}</ul>
      `;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });


  /////////////////////////série//////////////////////////////


} else if (type === 'tv') {
  // Récupérer les détails de la série TV
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse

      const tvDetailsDiv = document.getElementById("tv-details");
      tvDetailsDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.overview}</p>
        <p>Nombre de saisons: ${data.number_of_seasons}</p>
        <p>Vote Moyen: ${data.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.name} poster">
      `;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

  // Récupérer les crédits de la série TV
  fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      // Traiter les données de réponse
      

      const tvCreditsDiv = document.getElementById("tv-credits");
      const credits = data.cast.map(actor => `<li>${actor.name} as ${actor.character}</li>`).join("");
      tvCreditsDiv.innerHTML = `
        <h2>TV Show Credits</h2>
        <ul>${credits}</ul>
      `;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
} else {
  console.error('Type de contenu non pris en charge.');
}
