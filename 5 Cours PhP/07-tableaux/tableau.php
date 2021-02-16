<?php
//Les tableaux en PHP

//rappel, un tableau numérique 
$contacts =['toto', 'titi', 'tata'];

//Optionnelement, on peut définir un index
$contacts = [0 => 'toto', 1 => 'titi', 2 => 'tata'];

//Comment récupérer titi?
echo $contacts[1]; //Affiche titi
echo '<br/>'; echo '<br/>';

//comment faire pour parcourir un tableau numérique
// $contacts est le tableau à parcourir
// $contact représente chaque valeur du tableau 
foreach($contacts as $contact){
    echo $contact .'<br/>';
}

echo '<br/>';



//En php, on peut créer un tableau associatif
//Attention une clé doit etre unique sinon elle écrase la précédente 
$contacts = [ 'nom1' => 'toto', 'nom2' => 'titi', 'nom3' => 'tata'];
var_dump($contacts); //On peut afficher le tableau 
echo '<br/>'; echo '<br/>';

//Comment récupéré titi ? 
echo $contacts['nom2']; // Affiche titi
echo '<br/>'; echo '<br/>';

//Comment stocker plusieurs contacts dans un tableau ? 
//On pourrait utiliser un tableau multidimensionnel
$contacts = [
    ['nom' => 'Mota', 'prenom' => 'Matthieu'],
    ['nom' => 'Smaga','prenom' => 'Michael'],
    ['nom' => 'Boulanger','prenom' => 'Julien']
];
//Comment réucpérer tiSmaga michael ?
echo $contacts[1]['nom'].' '. $contacts[1]['prenom'];
echo'<br/>';
echo'<br/>';

//Comment parcourir un tableau multidimensionnel 
foreach($contacts as $contact){
    echo $contact['prenom'];
    echo '<br/>';
}