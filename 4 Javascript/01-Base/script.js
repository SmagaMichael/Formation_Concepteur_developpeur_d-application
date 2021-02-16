// Je déclare une variable contenant un nombre //
var age = 28;
console.log(age);

//Demander l'age de l'utilisateur//
age = prompt('quel est ton age?');

//afficher le résultat pour vérifier le contenu d'une variable//
console.log(age); 



var a = 10;
a + 30; // Addition 40
10 - 5; // Soustraction 5
3 * 2; // Multiplication 6
a = 3 + 3; // on peut modifier une variable en cours de route
a / 2; // Division 3 car a vaut 6
10 % 3; // Modulo (Reste de la division) 1

//La concaténation

var prenom = 'Michael'
console.log(prenom + ' a ' + age + ' ans.');


// comment faire avec les quotes dans un texte

console.log('l\'école');
console.log("l'école");
console.log('je vais à "l\'école"');
console.log("je vais à \"l'école\"");


//les tableaux

var notes = [12,18,17, 'toto'];
console.log(notes); //Affiche le tableau complet


var moyenne = (notes[0] + notes[1] + notes[2]) /(notes.length -1);
console.log(moyenne);




var personn = {
    nom: 'Smaga',
    prenom: 'Michael',
    birthday: [09, 10, 1992]
};
console.log(personn.nom); // Affiche Smaga
console.log(personn);
console.log('Né en ' + personn.birthday[2]);
// Né en 1992