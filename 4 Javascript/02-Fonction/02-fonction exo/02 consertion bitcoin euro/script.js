
/*
2. Créer une fonction qui convertit une valeur en euros en bitcoins, 
et qui peut faire l'inverse.
*/


var demande = prompt('voulez vous convertir la valeur en euro ou bitcoin')


if (demande == 'euro') {
    var euro = prompt('Indiquez la valeur bitcoin que vous voulez convertir en euro')
        euroconverti = euro/10000
        console.log(euroconverti)
        alert(euroconverti)
}


if (demande == 'bitcoin'){
    var bitcoin = prompt('Indiquez la valeur euro que vous voulez convertir en bitcoin')
       bitcoinconverti = bitcoin*10000
        console.log(bitcoinconverti)
}


