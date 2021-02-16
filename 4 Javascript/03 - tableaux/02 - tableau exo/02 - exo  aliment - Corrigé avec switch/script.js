/*   2. Créer un tableau avec des aliments: Poulet, Frites, Chocolat
           Demander à l'utilisateur ce qu'il veut manger. Nous vérifierons que l'aliment
            est présent ou non dans
           le tableau
           
           VERSION CORRIGEE*/



var meals = ['Poulet', 'Frites' , 'Chocolat'];
var choice = prompt('Que voulez vous manger ? (Poulet, Frites ou Chocolat)');
var canEat = false;

switch (choice){
    case 'Poulet':
        console.log('ok');
             break;  

    case 'Frites':
        console.log('ok');
             break;  

    case 'Chocolat':
        console.log('ok');
             break;  

    default:
        console.log('pas ok');
}