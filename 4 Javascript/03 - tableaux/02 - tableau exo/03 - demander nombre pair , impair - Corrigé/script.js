/* 3. Ecrire un script qui demande à l'utilisateur de taper 5 nombres. Une fois terminé,
           on affichera les nombres en précisant s'ils sont pairs ou impairs.*/


var nombre = [];

for (var i = 1; i <= 5; i++){

    nombre.push(parseInt(prompt('Saisissez le nombre numéro' +i+ ':')))
}



console.log(nombre)



for (var  i = 0; i < nombre.length; i++){


if (nombre[i] % 2 == 0){
    console.log(' ce nombre est paire')

    
}
else{
    console.log('ce nombre est impaire')
}


}