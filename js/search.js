

  const apiKey = '959788de244478c063a55714a78052c9';
    const searchInput = document.getElementById('movie-search');
  const autocompleteResults = document.getElementById('autocomplete-results');

  searchInput.addEventListener('input', debounce(handleSearchInput, 500));

  function handleSearchInput(event) {
    const query = event.target.value;

    if (query.length > 0) {
      autocompleteResults.innerHTML = '';

      searchMovies(query).then((movies) => {
        movies.forEach((movie) => {
          const movieLink = document.createElement('a');
          movieLink.href = `https://www.themoviedb.org/movie/${movie.id}`;
          movieLink.target = '_blank';
          movieLink.innerText = `${movie.title} (${new Date(movie.release_date).getFullYear()})`;

          const moviePoster = document.createElement('img');
          moviePoster.src = `https://image.tmdb.org/t/p/w92/${movie.poster_path}`;
          moviePoster.alt = `${movie.title} poster`;

          const movieResult = document.createElement('div');
          movieResult.classList.add('autocomplete-result');
          movieResult.appendChild(moviePoster);
          movieResult.appendChild(movieLink);

          autocompleteResults.appendChild(movieResult);
        });
      });
    } else {
      autocompleteResults.innerHTML = '';
    }
  }

  function searchMovies(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => data.results);
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }