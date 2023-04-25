<?php
include ('./include/header.php');
include('./include/bdd.php');
include('./include/user.php');
$user = new User('');
if(!empty($_POST)){
$login =$_POST['login'];
$password =$_POST['password'];
$email =$_POST['email'];
$firstname =$_POST['firstname'];
$lastname =$_POST['lastname'];
$user->register($login, $password, $email, $firstname, $lastname,$bdd);

}
//var_dump($_SESSION['user']);
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Inscription</title>
</head>
<body>
<h1>Inscription<h1>
    <form method="post" action="">
        <p>login</p>
        <input type="text" name="login" placeholder="login">
        <p>Password</p>
        <input type="password" name="password" placeholder="password">
        <p>Confirm password</p>
        <input type="password" name="confirmpassword" placeholder="confirmpassword">
        <p>email</p>
        <input type="email" name="email" placeholder="email">
        <p>Prenom</p>
        <input type="text" name="firstname" placeholder="firstname">
        <p>Nom</p>
        <input type="text" name="lastname" placeholder="lastname">
        <input type="submit" name="s'inscrire">
    </form>
    <button><a href="connexion.php">Se connecter</a></button>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>