/* 4. Créer un tableau avec une liste de notes (10, 14, 18, 2, 10).
           Calculer la moyenne.
           Afficher la note la plus haute du tableau.
           Afficher la note la plus basse du tableau.
           BONUS: Demander à l'utilisateur de remplir la liste de notes*/



var notes = [10, 14, 18, 2, 10];
var sommes = 0;

var max = 0;
var min = 20;


for(var i = 0; i < notes.length; i++){
    sommes += notes[1];


    //trouver la note la plus haute
if(notes[i] > max){
    max = notes[i];
    
}

if(notes[i] < min){
    min = notes[i];
    
}

}

console.log('la moyenne est ' + sommes / notes.length);

console.log('la note la plus basse est ' + min  );
console.log('la note la plus haute est ' + max  );