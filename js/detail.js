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
        <p>Type : ${data.genres.map(genre => genre.name).join(', ')}</p>
        <p>Budget :${data.budget}</p>
        <p>Date de sortie : ${data.release_date}</p>
        <p>Note : ${data.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title} poster">
      `;

      // Suggestion de films similaires dans le même genre
      const genreId = data.genres[0].id; // Récupérer l'ID du genre principal
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&with_genres=${genreId}&page=1`)
        .then(response => response.json())
        .then(data => {
          // Traiter les données de réponse
          const similarMovies = data.results.slice(1, 4); // Récupérer les 3 films suivants dans la liste (le premier étant le film sélectionné)
          const similarMoviesDiv = document.createElement('div');
          similarMoviesDiv.innerHTML = `
            <h3>Si vous avez aimé ce film, nous vous recommandons également de regarder :</h3>
            ${similarMovies.map(movie => `
              <div>
                <h4>${movie.title}</h4>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
              </div>
            `).join('')}
          `;
          const similarMoviesContainer = document.getElementById("similarmovie");
          similarMoviesContainer.appendChild(similarMoviesDiv);
        })
        .catch(error => {
          console.error(error);
        });
      
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
      const director = data.crew.find(crew => crew.job === "Director");
      movieCreditsDiv.innerHTML = `
        <h2>Movie Credits</h2>
        <p>Acteurs :</p>
        <ul>${credits}</ul>
        <p>Réalisateur : ${director.name}</p>
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
      const genres = data.genres.map(genre => genre.name).join(", ");
      const creators = data.created_by.map(creator => creator.name).join(", ");
      tvDetailsDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.overview}</p>
        <p>Nombre de saisons : ${data.number_of_seasons}</p>
        <p>Nombre d'épisodes : ${data.number_of_episodes}</p>
        <p>Vote Moyen : ${data.vote_average}</p>
        <p>Genres : ${genres}</p>
        <p>Réalisé par : ${creators}</p>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.name} poster">
      `;

      // Récupérer les séries similaires
      fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}&language=fr-FR&page=1`)
        .then(response => response.json())
        .then(data => {
          // Traiter les données de réponse

          const tvSimilarDiv = document.getElementById("tv-similar");
          let tvSimilarHTML = '';
          for (let i = 0; i < 5; i++) {
            const tvShow = data.results[i];
            tvSimilarHTML += `
              <div>
                <h3>${tvShow.name}</h3>
                <img src="https://image.tmdb.org/t/p/w500${tvShow.poster_path}" alt="${tvShow.name} poster">
              </div>
            `;
          }
          tvSimilarDiv.innerHTML = tvSimilarHTML;
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
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
        <p> Acteurs: <p>
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
