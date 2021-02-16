<?php
// Nous allons créer un formulaire de commande Click'N'Collect

// 2. L'utilisateur pourra saisir son email et choisir parmi une liste de produits (Select, checkbox ou textarea)

// 3. On stockera l'ensemble des demandes dans un fichier .txt que le vendeur pourra retrouver avec la date et l'heure

// 4. Idéalement, on créera une page pour le vendeur afin qu'il puisse retrouver l'ensemble des commandes (en lisant le contenu du fichier)
// $fichier = fopen('mes-commandes.txt', 'a+');

//Le second parametre est le mode de lecture
//  r: read-only => Ouvre le fichier en lecture seul
//  r+ : Ouvre le fichier en écriture ou lecture
//  w+ : Write => Ouvre le fichier en écriture et lecture mais supprime le fichier ou le crée s'il n'existe pas 
//  a: append => Ouvre le fichier en écriture et place le curseur a la fin du fichier
//  a+ : comme le appendsauf qu'il va créer le fichier s'il n'existe pas


//On peut ajouter une nouvelle ligne dans le fichier 
//fwrite($fichier, 'Matthieu a commandé un livre le 26/11/2020
//');// 2 façons de passer à la ligne 
//fwrite($fichier, 'Mikie le 26/11/2020'.PHP_EOL);//PHP_EOL = passer à la ligne


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
        if(!empty($_POST['Email'])){
            $Email = $_POST['Email'];

            $fichier = fopen('Ma-liste-de-commandes-clients.txt', 'a+');
            $choice = $_POST['Choice'];
            fwrite($fichier, $Email. ' a commandé '. $choice. ' le ' . date('d/m/Y').PHP_EOL.
            'Commande à livrer avant le : ' .date('d/m/Y', strtotime(' + 3 days')).PHP_EOL);
        }            
    ?> 


        <form method="POST">
            <label for="ChoiceId">Sélection d'article</label>
            <select name="Choice" id="ChoiceId" class="form-control">
                <option value="un livre">un livre</option>
                <option value="un jouet">un jouet</option>
                <option value="une console">une console</option>
                <option value="une peluche">une peluche</option>
            </select>

            <br/>

            <label for="Email">Votre Email</label>
            <input type="text" name="Email" class="form-control" id="Email">
            <button class="btn btn-primary" >Commander</button>
        </form>

        <br/>
        
        <div>
            <h1>Listes commandes clients</h1>
            <?php 
                $fichier = fopen('Ma-liste-de-commandes-clients.txt', 'a+');
                $commande = fread($fichier,1000000);
                echo str_replace(PHP_EOL, '<br/>', $commande);
            ?>
        </div>
  




    </div>





</body>
</html>