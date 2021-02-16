<?php

//On peut faire des calculs en PHP
$nombre1 = 10;

// Afficher le résultat d'un calcul
echo 'le résultat de 10 + 5  est ' .($nombre1 + 5); //Affiche 15
echo '<br/>';
echo '<br/>';


//Opérateur de puissance 
echo 'le résultat de 10 puissance 2 est ' .(10 ** 2); // 10 puissance 2
echo '<br/>';
echo '<br/>';


//on peut aussi marquer : 
echo 'le résultat de 10 puissance 2 est ';
echo (10 ** 2);
echo '<br/>';
echo '<br/>';

//Opérateur d'incrémentation
echo $nombre1 += 3; //Affiche 13 équivalent de 10 + 3
echo '<br/>';
echo '<br/>';

//on peut écrire des conditions en PHP
$a = 13;
$condition = 0 === false;

if ($a === 0){
    echo 'A vaut 0';
} else if ($a > 12 && $a <= 42){
    echo 'On rentre dans le else if';
}else if ($condition){ // $condition : $condition = true
    echo 'on est dans le dernier else if';
}else {
    echo 'On rentre dans aucun if';
}
echo '<br/>';
echo '<br/>';