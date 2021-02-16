<?php

//Déclarer une fonction
function hello($name, $lang = 'fr'){
    $translation = [
        'en' => 'Hello',
        'fr' => 'Bonjour',
        'es' => 'Hola',
    ];
    return $translation[$lang]. ' ' .$name;
}


echo hello('Fiorella'); //j'affiche le retour de la fonction
echo '<br/>';
echo hello('Fiorella', 'en');
echo '<br/>';
echo strtoupper(hello('Fiorella', 'es'));

echo '<br/>';echo '<br/>';


// Créer une fonction calculant le carré d'un nombre

function nbcarre($number){
    $carre = $number*$number;

 return 'le carré de ' .$number. ' est : '.$carre;
}

echo nbcarre(5);
echo '<br/>';
echo '<br/>';


// Créer une fonction calculant l'aire d'un rectangle 
function AireRect($petitCote,$grandCote){
    $AireRectangle = ($petitCote * $grandCote);

 return 'l\'air du rectangle est : '.$AireRectangle;
}

echo AireRect(5,10);
echo '<br/>';
echo '<br/>';

//et une fonction pour celle d'un cercle
function AireCer($Rayon = 5, $Pi = 3.14){
    $AireCercle = ($Rayon*$Rayon)*$Pi;

 return 'l\'air du cercle est : '.$AireCercle;
}

echo AireCer();
echo '<br/>';
echo '<br/>';


// Créer une fonction calculant le prix TTC d'un prix HT. 
//Nous aurons besoin de 2 paramètres, le prix HT et le taux.

function prixTTC($prix = 100, $taux = 0.20){
    $Ajout = ($prix*$taux);
    $HT = $prix + $Ajout;

 return 'le prix TTC est : '.$HT;
}

echo prixTTC();
echo '<br/>';
echo '<br/>';


// Ajouter un 3ème paramètre à cette fonction permettant de l'utiliser dans les 2 sens 
//(HT vers TTC ou TTC vers HT)

function prixTTCouHT($prix, $taxeOUpastaxe = '' ,$taux = 0.20){

    $taxe =[
        'HT' => [$Ajout = ($prix*$taux),  $total = $prix - $Ajout],
        'TTC' => [$Ajout = ($prix*$taux),  $total = $prix + $Ajout],
    ];

 return 'le prix ' .$taxeOUpastaxe. ' de ' .$prix. ' est de :'.$taxe[$taxeOUpastaxe][1] ;
}

echo prixTTCouHT('100','HT');
echo '<br/>';
echo '<br/>';