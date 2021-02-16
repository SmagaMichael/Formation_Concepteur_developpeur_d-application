
//un tableau de chaines
var products =['iphone 12','Galaxt S20', 'Xiaomi'];

//Un tableau d'entier
var prices = [1000,1000,500];

//un tableau d'objets
var products =[
    {name:'iphone 12', price:1200},
    {name:'Galaxy S20', price:1000},
    {name:'Xiami', price:1000},
]


//Afficher le prix du galaxy S20
console.log(products[1].price);



/*
Les tableaux multidimensionnels 
un tableau peut avoir plusieurs dimensions (n dimensions)
*/

//un tableau de tableau

var sizes = [
    ['64go', '128go', '256go'],
    ['32go', '64go'],
    ['512go', '1To']
];

//afficher 128go 
console.log(sizes[0][1]) // [0] premiere ligne , [1] Deuxieme valeur



//tableau d'abjet (avec ses objets qui contiennent un tableau)
var productsWithSizes =[
{name:'iphone 12', price:1200, sizes:['64go', '128go', '256go']},
{name:'Galaxy S20', price:1000, sizes:['32go', '64go']},
{name:'Xiami', price:1000, sizes:['512go', '1To']},
];

//Afficher 64go
console.log(productsWithSizes[1].sizes[1])

//Parcourir la liste de nos produits
for(var i = 0; i <productsWithSizes.length; i++){
    console.log(productsWithSizes[i].name + ' existe en ' + productsWithSizes[i].sizes.join(';  '))};



//Objectif: Trouver le nombre 123
//Ecrire le bon code en accédant à l'objet "monObjetFou" et 
//aux tableaux pour afficher le nombre 123

var monObjetFou = {
nom : 'Un objet ridicule',
      'un tableau': [7, 9, {objectif: 'confusion', nombre:123}, 3.3],
      'animal au hasard': 'requin banane'
};

console.log(monObjetFou['un tableau'][2].nombre);

/*
//iphone 12 existe en 64go, 128go, 256go
var sizes = '';
for(var j = 0; j < productsWithSizes[i].sizes.length; j++){
    sizes += productsWithSizes[i].sizes[j]; //64go
}
*/


//Afficher un jeu de morpion

var morpion = [
    ['X', 'X', 'O'],
    ['X', '0', 'X'],
    ['0', 'X', 'X'],
];


//Afficher le résultat : 
//    X | X | O |
//   X | 0 | X |
//    0 | X | X |

//version sans la boucle
console.log(morpion[0].join(' | '));
console.log(morpion[1].join(' | '));
console.log(morpion[2].join(' | '));

//version avec la boucle
for(var i = 0; i < morpion.length; i++){
    console.log(morpion[i].join(' | '));
};




//version sans le join
for (var ligne = 0 ; ligne < morpion.length; ligne++){
    var resultat = ''; //sert à stocker chaque ligne 
    for(var colonne = 0; colonne < morpion[ligne].length; colonne++){
        console.log(ligne + ' : ' + colonne);
        console.log(morpion[ligne][colonne]); //morpion [0][0]
        resultat = resultat + morpion[ligne][colonne] + ' | ';
    }
    console.log(resultat); // on met le consol.log ici car on veut le résultat sur les 3 lignes 
}

//Ecrire un code qui permet de savoir si le morpion est gagnant pour les O


morpion[0][2]; // O
morpion[1][1]; // O
morpion[2][0]; // O

if(morpion[0][2] === 'O' && morpion[1][1] && morpion[2][0] ){
    console.log('je gagne')
}


var resultat =[];
for (var ligne = 0 ; ligne < morpion.length; ligne++){
    for(var colonne = 0; colonne < morpion[ligne].length; colonne++){
       
        if (morpion[ligne][colonne] === 'O'){
            //remplir un tableau avec le numéro de ligne et le numéro de colonne
            resultat.push(colonne)
        }
    }
}

if (resultat.join(',') === '2,1,0'){
    console.log('Je gagne aussi')
}