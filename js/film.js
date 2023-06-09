/////////////////films les mieux notés/////////////////////////////

// Définir l'URL de l'API et la clé d'API
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '959788de244478c063a55714a78052c9'; // Remplacez par votre propre clé d'API The Movie DB

// Récupérer les films les mieux notés
fetch(`${apiUrl}/movie/top_rated?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des films
    const movies = data.results;
    console.log(data.results)
    // Parcourir les films et récupérer les images
    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      console.log(imageUrl); // Faites ce que vous voulez avec l'URL de l'image (par exemple, l'afficher dans une balise img)

       // Créer un élément d'image
       const imgElement = document.createElement('img');
       imgElement.src = imageUrl;
       imgElement.alt = movie.title;
 
       // Ajouter l'élément d'image à la div "filmnote"
       filmnote.appendChild(imgElement);

       /////////////////renvoi vers détail//////////////////////////////////////
       const id = movie.id;
       imgElement.addEventListener('click', function(){
         window.location.href = 'detail.php?id=' + id +"&type=movie";
       });
    });
  })
  .catch(error => console.error(error));


  //////////////////dernières sorties///////////////////

// Récupérer les films les plus récents sortis
fetch(`${apiUrl}/movie/now_playing?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des films
    const movies = data.results;
    
    // Parcourir les films et créer un élément d'image pour chaque film
    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      // Créer un élément d'image
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = movie.title;

      // Ajouter l'élément d'image à la div "filmnote"
      filmnew.appendChild(imgElement);

/////////////////renvoi vers détail//////////////////////////////////////
const id = movie.id;
imgElement.addEventListener('click', function(){
  window.location.href = 'detail.php?id=' + id +"&type=movie";
});
    });
  })
  .catch(error => console.error(error));


  //////////////////film à venir//////////////////////////

  fetch(`${apiUrl}/movie/upcoming?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des films
    const movies = data.results;

    // Parcourir les films et créer un élément d'image pour chaque film
    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      // Créer un élément d'image
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = movie.title;

      // Ajouter l'élément d'image à la div "filmnote"
      filmcom.appendChild(imgElement);

      /////////////////renvoi vers détail//////////////////////////////////////
      const id = movie.id;
      imgElement.addEventListener('click', function(){
        window.location.href = 'detail.php?id=' + id +"&type=movie";
      });
    });
  })
  .catch(error => console.error(error));