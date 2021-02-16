

//Grace à la boucle for, écrire les nombres de 1 à 10
for(var i = 1; i <= 10 ; i++){
    console.log(i)
}


//Grace à la boucle for, écrire les nombres de 10 à 2
for(var i=10; i >= 2; --i){
    console.log(i)
}


//Grace à la boucle for, afficher les nombres de 1 à 100 mais uniquement les nombres pairs.
for(var i = 0; i <= 100; i++){
 if(i % 2 === 0) //si i est pair donc divisble par 2 donc pas de reste
    console.log(i)
}



//Grâce au while, demandez à l'utilisateur s'il veut continuer sur le site, il doit répondre "oui", "non", "o" ou "n". Tant qu'il ne répond pas une de ces valeurs, lui reposer la question.

var continuer = prompt('Voulez vous continuer sur le site ?');
console.log(continuer)

while(continuer !== 'oui' && continuer !== 'o' && continuer !== 'non' && continuer !== 'n'){
    continuer = prompt('Voulez vous continuer sur le site ?');
    console.log(continuer)
}



if(continuer === 'oui' || continuer==='o'){
    console.log('On entre dans le site')
    alert('Vous pouvez continuer')}  


else{
    console.log('On sort du site ');
    alert('Bye !')}

    