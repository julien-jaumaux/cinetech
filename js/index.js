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
       film.appendChild(imgElement);

/////////////////renvoi vers détail//////////////////////////////////////
       const id = movie.id;
       imgElement.addEventListener('click', function(){
         window.location.href = 'detail.php?id=' + id +"&type=movie";
       });
       /////////////////////////////////////
    });
  })
  .catch(error => console.error(error));

  //////////////////////////////serie////////////////////////////////


// Récupérer les films les mieux notés
fetch(`${apiUrl}/tv/top_rated?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des films
    const movies = data.results;
    console.log(data.results)
    // Parcourir les films et récupérer les images
    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      console.log(movie.id); // Faites ce que vous voulez avec l'URL de l'image (par exemple, l'afficher dans une balise img)

       // Créer un élément d'image
       const imgElement = document.createElement('img');
       imgElement.src = imageUrl;
       imgElement.alt = movie.title;
 
       // Ajouter l'élément d'image à la div "filmnote"
       serie.appendChild(imgElement);
/////////rend l'élément cliquable///////////
       const id = movie.id;
       imgElement.addEventListener('click', function(){
         window.location.href = 'detail.php?id=' + id +"&type=tv";
       })
    });
  })
  .catch(error => console.error(error));