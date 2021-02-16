/* 3. Ecrire un script qui demande à l'utilisateur de taper 5 nombres. Une fois terminé,
           on affichera les nombres en précisant s'ils sont pairs ou impairs.*/

var nombre1 = parseInt(prompt('Indiquez votre premier nombre'));
var nombre2 = parseInt(prompt('Indiquez votre deuxième nombre'));
var nombre3 = parseInt(prompt('Indiquez votre troisième nombre'));
var nombre4 = parseInt(prompt('Indiquez votre quatrième nombre'));
var nombre5 = parseInt(prompt('Indiquez votre cinquième nombre'));

var tableau = [nombre1,nombre2,nombre3,nombre4,nombre5]
console.log(tableau)



for (var  i = 0; i < tableau.length; i++){


if (tableau[i] % 2 == 0){
    console.log(' ce nombre est paire')

    
}
else{
    console.log('ce nombre est impaire')
}


}