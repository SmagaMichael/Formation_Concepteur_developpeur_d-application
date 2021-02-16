<?php


//Exercices
//1. Nous cherchons à afficher la date du jour au format 

//"Wednesday 24 may 2018,
 //il est 10h38 et 12 secondes". 

 //Cherchez sur Google la fonction PHP permettant de faire cela.
  //https://www.php.net/manual/fr/datetime.format.php

$date = date('l j F Y');
$heure = date("H:i");
$seconde = date('s');

echo("Nous sommes le $date et il est $heure et $seconde secondes");
echo '<br/>';
echo '<br/>';


//2. Nous voulons récupérer le jour qu'il sera dans 10 jours exactement. 
//Pensez que strtotime renvoie un timestamp.

echo 'Dans 10 jours, on sera ' .date('l d ', strtotime('+10 days'));
echo '<br/>';
echo '<br/>';

//3. Combien de jours reste-t-il avant Noël ?*/

$now = strtotime('now');
$christmas = strtotime('25 december 2020');

//Calcul du nombre de jours
//Une journée fait (60 * 60 * 24) = 86 400 secondes
$days = ($christmas - $now) / (60 * 60 * 24);
$days = round($days, 2); // On peut arrondir à 2 chiffres après la virgule
echo "il reste $days jours avant noel";
