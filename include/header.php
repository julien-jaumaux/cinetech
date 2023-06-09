

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php">La cinetech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.php">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="film.php">Film</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="serie.php">Série</a>
        </li>
        <?php 
        // Vérifie si l'utilisateur est connecté
        if (isset($_SESSION['user'])) { 
        ?>
        <li class="nav-item">
          <a class="nav-link active" href="favoris.php">Vos favoris</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="profil.php">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="logout.php">Deconnexion</a>
        </li>
        <?php 
        } else { // Si l'utilisateur n'est pas connecté, affiche les onglets Inscription et Connexion
        ?>
        <li class="nav-item">
          <a class="nav-link active" href="inscription.php">Inscription</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="connexion.php">Connexion</a>
        </li>
        <?php 
        }
        ?>
      </ul>
      <div class="search-result-bar">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="movie">
        <button class="btn btn-outline-success" type="submit">Recherche</button>
      </form>
      <div id="result"></div>
      </div>
    </div>
  </div>
</nav>


<script src="./js/search.js"></script>


