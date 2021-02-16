<?php

/*
Quelques fonctions utiles en php
*/

// Est ce que la variable $prenom est définie ou existe ou alors vaut null ?

//$prenom = 'Michael';
echo 'isset renvoie :';
var_dump(isset($prenom)); //Renvoie false si $prenom n'est pas définie
echo '<br/>';
echo '<br/>';


//est ce que le contenu d'une variable est vide ? 
echo 'Empty renvoie :';
var_dump(empty($prenom));
echo '<br/>';
echo '<br/>';

//On peut compter le nombre d"élément d'un tableau  
$voitures = ['fiat','peugeot', 'Porsche'];
echo 'j\'ai ' .count($voitures). ' voitures';
echo '<br/>';
echo '<br/>';

//On peut aussi compter le nombre de caractère 
$message = 'Hé';
echo 'Le texte fait : ' .strlen($message). ' caractères (Taille de la chaine en octets) <br/>';
echo 'En vrai , Le texte fait : ' .iconv_strlen($message). ' caractères <br/>';
echo '<br/>';
echo '<br/>';


//Les dates en PHP 
//Pour rappel , en informatique , on se base sur le timestamp pour gérer les dates 
//le timestamp, c'est le nombre de secondes écoulés depuis le 1er janvier 1970
echo '<h2>Les dates </h2>';

// Pour récupérer le timestamp actuel (en seconde)
echo 'Timestamp actuel : ' .time();
echo '<br/>';
//pour récupéré la date lisible par un humain
echo date('r');
echo '<br/>';
echo '<br/>';

//On peut formater différemment 
// 18/11/1991
echo date('d/m/Y');
echo '<br/>';
echo '<br/>';

//09h27min
echo date('H\hi\m');
echo '<br/>';
//avec la concaténation 
echo ('avec la concaténation ');
echo date('H'). 'h' .date('i').'m';
echo '<br/>';
echo '<br/>';

//On peut remonter le temps
echo date('r', 1258147148);
echo '<br/>';
echo '<br/>';

//strtotime est l'inverse de la fonction date
echo strtotime('now');
echo '<br/>';
echo '<br/>';

//On veut le timestamp du 18 novembre 1900*
echo('On veut le timestamp du 18 novembre 1900 :  <br/>');
echo strtotime(' 18 november 1900');
echo '<br/>';
echo '<br/>';

//On peut récupérer le jour de cette date
echo('On peut récupérer le jour de cette date et l\'heure :  <br/>');
echo date('r', strtotime('18 november 1900 15:58:32'));
echo '<br/>';
echo '<br/>';

//usage relatif de strtotime
//je veux savoir la date qu'il sera dans 3ans
echo('je veux savoir la date qu\'il sera dans 3ans :  <br/>');
echo date('r', strtotime('+3 years'));

//on peut passer un timestamp en parametre  au strtotime
echo date('r', strtotime('+1 month', 1605690384) );