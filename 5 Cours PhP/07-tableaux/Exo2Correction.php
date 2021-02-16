<?php

$eleves = [
    0 => [
        'nom' => 'Matthieu',
        'notes' => [10, 8, 16, 18, 17, 16, 15, 2]
    ],
    1 => [
        'nom' => 'Thomas',
        'notes' => [4, 18, 12, 15, 13, 7]
    ],
    2 => [
        'nom' => 'Jean',
        'notes' => [17, 14, 6, 20, 16, 18, 9]
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

foreach($eleves as $eleve){
    //Afficher le nom de l'élève
    echo $eleve['nom']. ' a eu ';
    //Parcourir toutes les notes de l'élève pour les afficher
    foreach ($eleve['notes'] as $index => $note){
        echo $note;

        //Condition pour vérifier si on met une virgule ou non
        //on vérifie si on est sur la dernière note
        if($index === count($eleve['notes'])-1){
            echo '.';
        }
        else if($index === count($eleve['notes'])-2){
            // on est sur l'avant dernière note
            echo ' et ';
        }
        else{
            echo  ', ';
        }
    }
    echo '<br/>';
}

echo '<br/>';    echo '<br/>';



// 2/ Calculer la moyenne de Jean. On part de $eleves[2]['notes']
// La fonction count permet de compter les éléments d'un tableau

//récupéres les notes
$JeanNotes = $eleves[2]['notes'];

//récupéres les somme
$somme = 0;
//Préparer la variable somme
foreach ($JeanNotes as $note){
    $somme = $somme + $note;
}
echo 'La moyenne de Jean est ' . round($somme / count($JeanNotes),2);
echo '<br/>';echo '<br/>';

// 3/ Combien d'élèves ont la moyenne ?
// Exemple :
// Matthieu a la moyenne
// Jean n'a pas la moyenne
// Thomas a la moyenne
// Nombre d'éléves avec la moyenne : 2
$OntLaMoyenne = 0;
foreach($eleves as $eleve){
    //Calculer la moyenne
$somme = 0;
foreach ($eleve['notes'] as $note){
    $somme += $note;

}
$moyenne = $somme / count($eleve['notes']);
    //vérifier si la moyenne est supérieur à 10
if($moyenne >= 10){
    echo $eleve['nom'] . ' a la moyenne <br/>';
    $OntLaMoyenne++;
}else{
    echo $eleve['nom'] . ' n\'a pas la moyenne <br/>';

    }
}
echo 'Nombre d\'eleves avec la moyenne : ' .$OntLaMoyenne; 
echo '<br/>';echo '<br/>';



// 4/ Quel(s) éléve(s) a(ont) la meilleure note ?
// Exemple: Thomas a la meilleure note : 19

$bestNote = 0;
foreach ($eleves as $eleve){
    foreach($eleve['notes'] as $note){
        if ($note > $bestNote){//on cherche la meilleue note en comparant toutes les notes
            $bestNote = $note;
        }
    }
}


foreach ($eleves as $eleve){
    foreach($eleve['notes'] as $note){
        if ($note === $bestNote){//on cherche la meilleure note en comparant toutes les notes
            echo $eleve['nom']. ' a eu la meilleure note : ' .$bestNote . '<br/>';
        break; // le break arrete définitivement le foreach (ne se répéte pas)
        }
    }
}


// 5/ Qui a eu au moins un 20 ?
// Exemple: Personne n'a eu 20
//          Quelqu'un a eu 20
$aEu20 = false;
foreach ($eleves as $eleve){
    foreach($eleve['notes'] as $note){
        if ($note === 20){
            $aEu20 = true;
        }
    }
}

if($aEu20){
    echo 'quelqu\'un a eu 20';
}else{
    echo 'personne n\'a eu 20';
}
