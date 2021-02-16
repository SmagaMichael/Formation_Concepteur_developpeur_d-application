<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">

</head>
<body>
    
    <div class="container">
        <?php
        session_start(); //Attention on utilise les sessions
        //vérifie si l'utilisateur se connecte et que le pseudo 
            if(!empty($_POST['pseudo'])){
                //je peux ''enregistrer'' le pseudo dans la session 
                $_SESSION['pseudo'] = $_POST['pseudo'];
                //dès qu'on est connecté, on peut rediriger l'utilisateur vers son compte 
                header('Location: admin.php'); //On redirige vers admin.php

            }

            var_dump($_SESSION);
            //comment savoir qu'une personne est connecté sur le site ? 
            //Dans le tableau $_SESSION, si on a la clé pseudo, on est connecté 
            // si la section pseudo du tableau est remplie
            if(isset($_SESSION['pseudo'])){


            }

        ?>



        <a href="admin.php">Votre compte</a>

        <form method="POST">
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" id="pseudo"  class="form-control">

            <button class="btn btn-primary">Connexion</button>
        </form>
    
    
    </div>





</body>
</html>