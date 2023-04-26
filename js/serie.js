
// Définir l'URL de l'API et la clé d'API
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '959788de244478c063a55714a78052c9'; // Remplacez par votre propre clé d'API The tv DB

/////////////////séries les mieux notés/////////////////////////////

// Récupérer les séries les mieux notés
fetch(`${apiUrl}/tv/top_rated?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des séries
    const tvs = data.results;
    console.log(data.results)
    // Parcourir les séries et récupérer les images
    tvs.forEach(tv => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
      console.log(imageUrl); // Faites ce que vous voulez avec l'URL de l'image (par exemple, l'afficher dans une balise img)

       // Créer un élément d'image
       const imgElement = document.createElement('img');
       imgElement.src = imageUrl;
       imgElement.alt = tv.title;
 
       // Ajouter l'élément d'image à la div "sérienote"
       serienote.appendChild(imgElement);
    });
  })
  .catch(error => console.error(error));

  /////////////////les denières séries/////////////////////////////

// Récupérer les séries les mieux notés
fetch(`${apiUrl}/tv/popular?api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
    console.log(data)
  // Obtenir les données des séries
  const tvs = data.results;
//   console.log(data.results)
  // Parcourir les séries et récupérer les images
  tvs.forEach(tv => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
    console.log(imageUrl); // Faites ce que vous voulez avec l'URL de l'image (par exemple, l'afficher dans une balise img)

     // Créer un élément d'image
     const imgElement = document.createElement('img');
     imgElement.src = imageUrl;
     imgElement.alt = tv.title;

     // Ajouter l'élément d'image à la div "sérienew"
     serienew.appendChild(imgElement);
  });
})
.catch(error => console.error(error));

/////////////////les séries à venir/////////////////////////////

// // Récupérer les séries les mieux notés
fetch(`${apiUrl}/tv/genre?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Obtenir les données des séries
    const tvs = data.results;
    console.log(data.results)
    // Parcourir les séries et récupérer les images
    tvs.forEach(tv => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
      console.log(imageUrl); // Faites ce que vous voulez avec l'URL de l'image (par exemple, l'afficher dans une balise img)

       // Créer un élément d'image
       const imgElement = document.createElement('img');
       imgElement.src = imageUrl;
       imgElement.alt = tv.title;
 
       // Ajouter l'élément d'image à la div "sériecom"
       seriecom.appendChild(imgElement);
    });
  })
  .catch(error => console.error(error));