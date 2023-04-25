const apiKey = '959788de244478c063a55714a78052c9';
const pageSize = 20; // Nombre d'images par page
let currentPage = 1; // Page courante pour la pagination

////////////////////film/////////////////////////////////////////

// Fonction pour récupérer les images d'une page donnée
function fetchMovieImages(page) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error(error));
  }


// Fonction pour traiter les images récupérées
function processMovieImages(images) {
  // Traiter les données d'image ici
  console.log(images);

  const film = document.getElementById('film');

  images.map(img =>{//map = boucle
    const imagef = document.createElement('img');
    imagef.src = "https://image.tmdb.org/t/p/w500" + img.poster_path;
    film.appendChild(imagef);
    
    console.log(img.poster_path)
  })
}

// Fonction pour récupérer les images de tous les films en paginant les résultats
function fetchAllMovieImages() {
  fetchMovieImages(currentPage)
    .then(images => {
      processMovieImages(images);
      currentPage++;
      // Paginer les résultats jusqu'à la dernière page
      if (currentPage <= totalPages) {
        fetchAllMovieImages();
      }
    })
    .catch(error => console.error(error));
}

// Récupérer le nombre total de pages pour la pagination
fetchMovieImages(1)
  .then(data => {
    const totalPages = data.total_pages;
    fetchAllMovieImages();
  })
  .catch(error => console.error(error));


  //////////////////////////////serie////////////////////////////////


// Fonction pour récupérer les images d'une page donnée
function fetchTVImages(page) {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error(error));
}

// Fonction pour traiter les images récupérées
function processTVImages(images) {
  // Boucler à travers les images et les insérer dans une div
  const container = document.getElementById('serie'); // Remplacez 'image-container' par l'ID de votre div de conteneur d'images
  images.forEach(image => {
    const imgs = document.createElement('img');
    imgs.src = `https://image.tmdb.org/t/p/w500/${image.poster_path}`;
    container.appendChild(imgs);
  });
}

// Fonction pour récupérer les images de toutes les séries TV en paginant les résultats
function fetchAllTVImages() {
  fetchTVImages(currentPage)
    .then(images => {
      processTVImages(images);
      currentPage++;
      // Paginer les résultats jusqu'à la dernière page
      if (currentPage <= totalPages) {
        fetchAllTVImages();
      }
    })
    .catch(error => console.error(error));
}

// Récupérer le nombre total de pages pour la pagination
fetchTVImages(1)
  .then(data => {
    const totalPages = data.total_pages;
    fetchAllTVImages();
  })
  .catch(error => console.error(error));
