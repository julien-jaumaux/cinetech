<?php
include ('./include/header.php');
include('./include/bdd.php');
include('./include/user.php');

if(isset($_POST['modifier'])){
    $user = new User($_SESSION['user']->id);
    $user->update($_POST['login'],$_POST['password'],$_POST['email'],$_POST['firstname'],$_POST['lastname'], $dbh);
}
if(isset($_SESSION['valider'])){
    echo $_SESSION['valider'];
    
}


?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Profil</title>
</head>
<body>
    <h1>Modifier profil<h1>
        <form method="post" action="">
            <p>login</p>
            <input type="text" name="login" value="<?=$_SESSION['user']->login?>">
            <p>Password</p>
            <input type="password" name="password" value="<?=$_SESSION['user']->password?>">
            <p>email</p>
            <input type="email" name="email" value="<?=$_SESSION['user']->email?>">
            <p>Prenom</p>
            <input type="text" name="firstname" value="<?=$_SESSION['user']->firstname?>">
            <p>Nom</p>
            <input type="text" name="lastname" value="<?=$_SESSION['user']->lastname?>">
            <input type="submit" name="modifier" >
        </form>
        <button><a href="logout.php">Se déconnecter</a></button>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>
<?php
unset($_SESSION['valider']);
?>