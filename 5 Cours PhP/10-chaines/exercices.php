<?php

/**
 * Acronyme : Créer une fonction qui prend en argument une chaine (World of Warcraft)
 * et qui retourne les initiales de chaque mot en majuscule (WOW).
 */

// echo acronym('World of Warcraft'); // WOW
// echo acronym('PHP: Hypertext Preprocessor'); // PHP
// echo acronym('Cascade Style Sheet'); // CSS
$motentier = 'World Of Warcraft';
echo $motentier;
echo '<br/>';echo '<br/>';

//Récuperation de chaque mot dans un tableau 
$arraymotentier = explode(' ', $motentier);
//on visualise le tableau : 
var_dump($arraymotentier);
echo '<br/>';echo '<br/>';

//pour chaque mot dans le tableau qu'on stock dans une variable $motseul
foreach ($arraymotentier as $motseul){
    //pour chaque mot on affiche la premiere lettre (index 0)jusque Une lettre
    echo substr($motseul, 0 ,1);
}echo '<br/>';echo '<br/>';


echo '<br/>';echo '<br/>';
echo '<br/>';echo '<br/>';



/**
 * Conjugaison : Créer une fonction qui permet
 * de conjuguer un verbe (chercher par exemple).
 * Cela doit renvoyer toutes les conjugaisons au présent.
 */


$Pronoms = 'Je, Tu, Il, Nous, Vous, Ils';
$ArrayPronoms = explode(',', $Pronoms);
var_dump($ArrayPronoms);
echo '<br/>';echo '<br/>';

$Terminaison = 'e, es, e, ons, ez, ent';
$ArrayTerminaisons = explode(', ', $Terminaison);
var_dump($ArrayTerminaisons);
echo '<br/>'; echo '<br/>';


for($i = 0; $i < count($ArrayPronoms); $i++){
echo $ArrayPronoms[$i]. ' cherch' . $ArrayTerminaisons[$i].'<br/>';

}





 // développer
//echo conjuguer('chercher');

/*
Je cherche
Tu cherches
Il cherche
Nous cherchons
Vous cherchez
Ils cherchent
*/

// Attention aux exceptions => ajouter, manger