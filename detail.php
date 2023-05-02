<?php
include ('./include/header.php');
include('./include/bdd.php');
include('./include/user.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Détails</title>
</head>
<body>
    <h2>Détails du film</h2>

    <div id="movie-details"></div>
<p>
    <h2>Casting du film</h2>

    <div id="casting"></div>


    <?php
// Vérifier si les paramètres type et id sont présents dans l'URL
if (!isset($_GET['type']) || !isset($_GET['id'])) {
  die('Paramètres manquants.');
}

// Extraire les paramètres type et id de l'URL
$type = $_GET['type'];
$id = $_GET['id'];

// Vérifier si le type est valide
if ($type !== 'movie' && $type !== 'tv') {
  die('Type de contenu non pris en charge.');
}

// Inclure le code JavaScript pour récupérer les données de l'API
//echo '<script src="chemin/vers/votre/fichier.js"></script>';

// Afficher le titre de la page en fonction du type et de l'ID
if ($type === 'movie') {
  echo "<h1>Détails du film #$id</h1>";
} else {
  echo "<h1>Détails de la série TV #$id</h1>";
}

// Afficher une section pour les détails du film ou de la série TV
echo '<section id="details"></section>';



?>
    

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="./js/detail.js"></script>
</body>
</html>