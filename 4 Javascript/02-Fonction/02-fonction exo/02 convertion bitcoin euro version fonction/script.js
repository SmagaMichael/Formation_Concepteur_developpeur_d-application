
/*
2. Créer une fonction qui convertit une valeur en euros en bitcoins, 
et qui peut faire l'inverse.
*/

function convert(amount, devise){
    if(devise=== 'bitcoin'){
        return amount / 10700;
    }

return amount * 10700;
}


console.log(convert(1000));
console.log(convert(1000,'bitcoin'));
