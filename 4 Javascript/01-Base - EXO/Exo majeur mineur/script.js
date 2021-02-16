
//Demander l'age de l'utilisateur//
var age = prompt('quel est ton age?');

//afficher le résultat pour vérifier le contenu d'une variable//
console.log(age); 



if(age < 13) {
    alert("interdit, tu es trop jeune");
}




else if(age >= 13 && age <=17){  
alert('Tu es bientot majeur (encore  '+(18 -age)+' ans)!!! ');
}


else{  
alert("Tu es autorisé");
}