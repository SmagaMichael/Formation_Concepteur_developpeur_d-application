<?php 
/* 
Créer une boucle qui affiche 10 étoiles (*)
Imbriquer la boucle dans une autre boucle afin d'afficher 10 lignes de 10 étoiles
Nous obtenons un carré. Trouver un moyen de modifier le code pour obtenir un triangle rectangle.
*/

for ($i = 1; $i <= 10; $i++){
    for ($j = 1; $j <= 10; $j++){
        echo '⭐';
     }
    echo '<br/>';
}
echo '<br/>';

for ($i = 1; $i <= 1; $i++){
    for ($j = 1; $j <= 10; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 9; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 8; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 7; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 6; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 5; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 4; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 3; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 2; $j++){
        echo '⭐';
     }echo '<br/>';
     for ($j = 1; $j <= 1; $j++){
        echo '⭐';
     }echo '<br/>';
}echo '<br/>';



for ($nbligne = 1; $nbligne <= 10; $nbligne++){
    for ($j = 1; $j <= $nbligne; $j++){
        echo '⭐';
     }echo '<br/>';
}echo '<br/>';
    


for ($nbligne = 10; $nbligne >= 1; $nbligne--){
    for ($j = 1;$j <= $nbligne; $j++){
        echo '⭐';
     }echo '<br/>';
}echo '<br/>';




