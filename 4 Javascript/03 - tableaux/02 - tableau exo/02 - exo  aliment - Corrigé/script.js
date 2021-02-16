/*   2. Créer un tableau avec des aliments: Poulet, Frites, Chocolat
           Demander à l'utilisateur ce qu'il veut manger. Nous vérifierons que l'aliment
            est présent ou non dans
           le tableau
           
           VERSION CORRIGEE*/



var meals = ['Poulet', 'Frites' , 'Chocolat'];
var choice = prompt('Que voulez vous manger ? (Poulet, Frites ou Chocolat)');
var canEat = false;

for(var i = 0; i <meals.length; i++){
    if (meals[i] === choice){ // L'aliment saisi est présent dans le tableau
        canEat = true;
    }
}

if (canEat) { // if (canEat === true)
    console.log('ok');
}
 
else{
    console.log('pas ok')
}