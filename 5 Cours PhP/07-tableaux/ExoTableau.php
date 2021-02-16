<?php
// Déclarer un tableau qui stocke les informations suivantes :


$capitales = [
    'France' => 'Paris',
    'Espagne' => 'Madrid',
    'Italie' => 'Rome',
];

// Afficher le résultat suivant en utilisant la boucle foreach :

// La capitale de France est Paris.

// La capitale de Espagne est Madrid.

// La capitale de Italie est Rome.
foreach($capitales as $pays => $capitale){
    echo 'La capitale de ' .$pays. ' est ' .$capitale;
    echo '<br/>';
    
     

}

echo '<br/>';echo '<br/>';
echo '<h2> Population </h2>';

$population = [
    'France' => 67595000,
    'Suede' => 9998000,
    'Suisse' => 8417000,
    'Kosovo' => 1820631,
    'Malte' => 434403,
    'Mexique' => 122273500,
    'Allemagne' => 82800000,
];
foreach ($population as $pays => $popu){
    if ($popu >= 20000000){
        echo "$pays a une population de $popu <br/>";
    }
}



echo '<br/>'; echo '<br/>';
echo '<h2> Population Europe</h2>';
$total = 0; //On crée une variable qu'on va incrémenter dans le foreach 
// unset($populatio,['Mexique']); Solution 2 , on peut supprimer l'index d'un tableau 
foreach ($population as $pays => $popu){
    if($pays !== 'Mexique'){ // On exclut le Mexique du tableau 
        $total = $total + $popu;
    }
}
echo "il y a $total personnes en Europe";