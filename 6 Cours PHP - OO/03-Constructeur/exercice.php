<?php

/**
 * On va créer une classe Voiture dans un fichier à part
 * Une voiture posséde 4 roues, une couleur, une marque et un modèle.
 * Une voiture peut être construite avec tous ses attributs.
 * Elle peut aussi rouler et klaxonner (Une chaine).
 * On n'oubliera pas les getters et les setters.
 * On instanciera au moins 2 voitures différentes...
 * 
 * BONUS: Une voiture a un niveau d'essence (50L). On réduit la jauge de 2L
 * à chaque fois qu'on appelle la méthode rouler.
 */

require_once 'Voiture.php';

 //On crée les voitures
 $car = new Car('Renault', 'Megane');
 $car->setColor('bleu');

 $car2 = new Car('Alfa Romeo', '147');
 $car2->setColor('grise');

var_dump($car);
var_dump($car2);

echo'<br />';
echo'<br />';

 echo $car->drive();  // La renault Mégane roule sur ses 4 roues 
 echo'<br />';

 echo $car->klaxon(); // La voiture bleue klaxonne 
echo'<br />';
echo'<br />';

 echo $car2->drive();  // La renault Mégane roule sur ses 4 roues 
 echo'<br />';

 echo $car2->klaxon(); // La voiture bleue klaxonne 