<?php
/* 
1. Afficher la table de multiplication du chiffre 5 :5 x 1 = 5 ;5 x 2 = 10
2. Afficher l'ensemble des tables de multiplications de 1 à 10.

*/
echo '<div class="Ensemble">';

    echo '<div class="haut">'; // ligne 0 à 10 du haut 
        echo str_pad('x', 3, "_", STR_PAD_BOTH);
        for ($i = 0; $i <= 10; $i++){
            echo str_pad($i, 4, "_", STR_PAD_BOTH);
        } echo '<br/>';
    echo '</div>';


    for ($i = 0; $i <= 10; $i++){
    echo '<span class="gauche">';// colonne gauche 0 à 10 
        echo str_pad($i, 3, "_", STR_PAD_BOTH);
    echo '</span>';

        for ($table10 = 0; $table10 <= 10; $table10++){ 
            //echo $table10. ' x ' .$i. ' = '  .$table10*$i.   '<br/>';
            //echo str_pad($table10*$i,  3, "* "); 
                echo'<span class="case">';
                echo str_pad($table10*$i, 4, "_", STR_PAD_BOTH);
                echo'</span>';
            }echo  '<br/> ';     
    }

echo '</div>';
?>

<style>
.case{
    color:purple;
    background-color:gray;
    width:35px;
    }

.ensemble{
    border: 3px solid black;
    width: 380px;
}
.haut{
    border-bottom: 3px solid black;
    width: 380px;
}
.gauche{
    border-right: 3px solid black;
}


</style>