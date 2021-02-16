
/* Consignes

Ecrire un script qui change le contenu d'un h1 toutes 
les 5 secondes avec les valeurs
intégrateur, développeur, Administrateur système. */

var titres = new Array(3)
var i = 0;

titres[0] = 'Intégrateur';
titres[1] = 'Développeur';
titres[2] = 'Administrateur système';
console.log(titres);

function ChangeTitre(){
    document.getElementById('Titreh1'). textContent = titres[i];
    console.log(i)

    if(i == titres.length-1){i = 0;} 
    else i++;
}

setInterval("ChangeTitre()", 2000);

/* Ecrire un script qui change la couleur de fond du body au bout de 5 secondes 
avec une transition */

setInterval(function(){
    document.body.style.transition ='0.5s';
    document.body.style.backgroundColor = 
            '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)},2000);



/*
renseignez vous sur la classe date et essayer d'afficher l'heure sur une page 
au format HH:MM:SS */


setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0'+hours;
    }

    if (minutes < 10) {
        minutes = '0'+minutes;
    }

    if (seconds < 10) {
        seconds = '0'+seconds;
    }

    document.getElementById('clock').textContent = hours+':'+minutes+':'+seconds;
}, 1000);

//rafraichir la valeur de l'heure 




