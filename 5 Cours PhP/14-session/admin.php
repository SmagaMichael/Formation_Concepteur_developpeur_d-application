<?php

//Attention de bien faire le démarage des sessions
session_start();

//Si on est connecté,on peut afficher le message
//message de  bienvenue

if(isset($_SESSION['pseudo'])){ ?>
    
    <h1>Bienvenue <?= $_SESSION['pseudo']; ?> </h1>
    <a href="admin.php?logout=1">Déconnexion</a>
<?php }


// on vérifie si l'utilisateur veut se déconnecter
if(isset($_GET['logout'])){
    // On va supprimer le pseudo de la session
    unset($_SESSION['pseudo']);
    //On redirige vers le formulaire de connexion
    header('Location: session.php');
}