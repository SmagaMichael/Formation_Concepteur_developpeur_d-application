<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
</head>
<body>
    
<div class="container" >
<?php
//On va essayer  de lire le ficher 'Ma-liste-de-commandes-clients.txt'
$commandes = file_get_contents('Ma-liste-de-commandes-clients.txt');

//On peut transformer le contenu du fichier en tableau
$commandes = explode(PHP_EOL, $commandes);


// echo str_replace(PHP_EOL, '<br/>', $commandes);
foreach($commandes as $commande){
    echo '<h1>' .$commande.'</h1>';
}


?>

</div>





</body>
</html>