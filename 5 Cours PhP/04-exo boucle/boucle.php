<?php
echo '<h2>1. Ecrire une boucle qui affiche les nombres de 10 à 1</h2>';
for ($i = 10; $i >= 1; $i--){
    echo $i. '-';
}

echo '<h2>2. Ecrire une boucle qui affiche uniquement les nombres pairs entre 1 et 100</h2>';
for($i = 1; $i <= 100; $i++){

    if($i % 2 === 0){ //On vérifie que le nombre est pair avec le modulo
        echo $i. '-';
    }
}

echo '<h2>3. Ecrire le code permettant de trouver le PGCD de 2 nombres</h2>';

$A = 196;
$B = 36;

while ($B != 0){
    if ($A > $B){
        $A = $A - $B;
    }else{
        $B = $B - $A;
    }
}
echo 'le PGCD est ' .$A;


echo '<h2>4. Coder le jeu du FizzBuzz<br/>

Parcourir les nombres de 0 à 100<br/>

Quand le nombre est un multiple de 3, afficher Fizz.<br/>

Quand le nombre est un multiple de 5, afficher Buzz.<br/>

Quand le nombre est un multiple de 15, afficher FizzBuzz.<br/>

Sinon, afficher le nombre<br/></h2>';

for ($i = 1; $i <= 100; $i++){

    if($i % 15 === 0 ){ 
        echo ' FizzBuzz - ';
     }

    else if($i % 5 === 0){ 
       echo ' Buzz - ';
    }

    else if($i % 3 === 0){ 
       echo ' Fizz - ';
    }

    else {
        echo $i. ' - ';
    }
}