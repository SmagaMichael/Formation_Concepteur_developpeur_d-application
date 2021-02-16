

var prenoms = ['toto', 'titi', 'tata'];


prenoms.push('tutu'); // on ajoute tutu à la fin du tableau 
prenom.push(prompt('Ajouter un prénom'));

console.log(prenom[1]); // afficher titi 

for(var i = 0; i < prenoms.length; i++){
    console.log(prenoms[i]);

}

prenoms.pop(); //Permet de retirer le dernier élément
prenoms.unshift('Leonard'); // on ajoute un élément au début du tableau


// on veut ajouter un prénom entre titi et tata
// 3 est l'index de Tata car on a ajouté leonard
// 0 = pour rien enlever ou 1 pour remplacer tata 
prenoms.splice(2,0, 'Max')

prenoms.shift(); // on enleve la première valeur 

console.log(prenom);