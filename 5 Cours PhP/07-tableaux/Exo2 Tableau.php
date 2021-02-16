<?php

$eleves = [
    0 => [
        'nom' => 'Matthieu',
        'notes' => [10, 8, 16, 20, 17, 16, 15, 2]
    ],
    1 => [
        'nom' => 'Thomas',
        'notes' => [4, 18, 12, 15, 13, 7]
    ],
    2 => [
        'nom' => 'Jean',
        'notes' => [17, 14, 6, 2, 16, 18, 9]
    ],
    3 => [
        'nom' => 'Enzo',
        'notes' => [1, 14, 6, 2, 1, 8, 9]
    ]
];

// 1/ Afficher la liste de tous les éléves avec leurs notes.
// Exemple :

// Matthieu a eu 10, 8, 16, 20, 17, 16, 15 et 2
// Thomas a eu 4, 18, 12, 15, 13 et 7
// Jean a eu 17, 14, 6, 2, 16, 18 et 9

foreach ($eleves as $eleve){
    echo $eleve['nom'].' a eu ';
        foreach($eleve['notes'] as $note){
            echo ' '.$note.',';
        }echo '<br/>';
    } 
    echo '<br/>';
    

// 2/ Calculer la moyenne de Jean. On part de $eleves[2]['notes']
// La fonction count permet de compter les éléments d'un tableau
$sommeNote = 0;
foreach($eleves[2]['notes'] as $note){
    $sommeNote += $note ;
    echo $note.' + ';
}
echo ' = ';
echo $sommeNote;
echo '<br/>';echo '<br/>';

$moyenneNote = round(($sommeNote/(array_key_last($eleve['notes'])+1)),2);
echo 'la moyenne des notes est de : '.$moyenneNote;

// 3/ Combien d'élèves ont la moyenne ?
// Exemple :
// Matthieu a la moyenne
// Jean n'a pas la moyenne
// Thomas a la moyenne
// Nombre d'éléves avec la moyenne : 2




// 4/ Quel(s) éléve(s) a(ont) la meilleure note ?
// Exemple: Thomas a la meilleure note : 19




// 5/ Qui a eu au moins un 20 ?
// Exemple: Personne n'a eu 20
//          Quelqu'un a eu 20



