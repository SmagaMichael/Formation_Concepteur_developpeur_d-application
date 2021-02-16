<?php
//traitement des fichiers en PHP
//En PHP, on peut ouvrir un fichier comme dans word


$fichier = fopen('mes-commandes.txt', 'a+');

//Le second parametre est le mode de lecture
//  r: read-only => Ouvre le fichier en lecture seul
//  r+ : Ouvre le fichier en écriture ou lecture
//  w+ : Write => Ouvre le fichier en écriture et lecture mais supprime le fichier ou le crée s'il n'existe pas 
//  a: append => Ouvre le fichier en écriture et place le curseur a la fin du fichier
//  a+ : comme le appendsauf qu'il va créer le fichier s'il n'existe pas


//On peut ajouter une nouvelle ligne dans le fichier 
fwrite($fichier, 'Matthieu a commandé un livre le 26/11/2020
');// 2 façons de passer à la ligne 
fwrite($fichier, 'Mikie le 26/11/2020'.PHP_EOL);//PHP_EOL = passer à la ligne


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de candidature</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        
    <?php 
    
    if(!empty($_POST['prenom'])){
        $prenom = $_POST['prenom'];

        $fichier = fopen('mes-commandes.txt', 'a+');

        fwrite($fichier, $prenom. ' a commandé un livre le 26/11/2020'.PHP_EOL);
        echo 'Votre commande arrive dans 3 jours';
    }
    
    
    
    ?>

        <form method="POST">
            <input type="text" name="prenom" class="form-control">
            <button class="btn btn-primary" >Commander</button>
        
        </form>
    
        <div>
            <h1>Liste des commandes</h1>
            <?php 
                    $fichier = fopen('mes-commandes.txt', 'a+');

            $commande = fread($fichier,1000000);
            echo str_replace(PHP_EOL, '<br/>', $commande);
            
            ?>
        
        </div>
    </div>





</body>
</html>