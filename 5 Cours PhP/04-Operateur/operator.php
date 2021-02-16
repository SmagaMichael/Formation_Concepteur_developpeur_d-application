<?php

/* Créer un fichier operation.php
Stocker 15 dans une variable.
Stocker 5 dans une autre variable.
Stocker 8 dans une autre variable.
Afficher ceci dans la page (en dynamique) :
​15 + 5 + 8 = 28

15 x (5 - 8) = -45

(8 - 5) / 15 = 0.2

Si une des opérations a un résultat inférieur à 20, afficher 
"Une des opérations renvoie moins de 20" en bas de la page */

$A = 15;
$B = 5;
$C = 8;

$result1 = $A + $B + $C;
$result2 = $A * ($B - $C);
$result3 = ($C - $B) / $A;


echo $A. '+' .$B. '+' .$C. '= ' .($A + $B + $C).'<br/>';
echo $A. 'x (' .$B. '-' .$C. ') = ' .($A * ($B - $C)).'<br/>';
echo '('.$C. ' - ' .$B. ') / ' .$A. ') = ' .(($C - $B) / $A).'<br/>';

echo '<br/>';

// ou en double cote
echo $A. '+' .$B. '+' .$C. '= ' .($A + $B + $C).'<br/>';
echo "$A x  $B - $C ) = " .($A * ($B - $C)).'<br/>';
echo "($C  -  $B) / $A ) = " .(($C - $B) / $A).'<br/>';

if($result1 < 20 ||$result2 < 20 || $result3 < 20 ){
    echo 'une des opérations renvoie moins de 20';
}