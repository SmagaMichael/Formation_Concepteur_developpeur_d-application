/*   5. BONUS: Vous demanderez à l'utilisateur un nombre (5 par exemple).
           De ce nombre, vous allez remplir un tableau de couleurs aléatoire (5 couleurs par exemple)
           rouge, rouge, jaune, bleu, jaune
           Vous afficherez alors les 2 couleurs ayant apparue le plus de fois. S'il n'y en a qu'une alors il n'y en a qu'une...*/




var number = parseInt(prompt('combien de couleur ? '));
var references = ['bleu', 'jaune', 'rouge']; // les couleurs qui peuvent sortir en aléatoire
var quantities = [];
var colors = [];
var color;
var indexColor;

for (var i = 0; 1 < references.length; i++){ // permet d'initialiser le tableau de quantities
    quantities[i] = 0; // ou quantities.push(0);
}




// remplir le tableau de couleurs

for(var i = 0; i < number; i++){
    color = references[Math.floor(Math.random()* references.length)]; // Une couleur aléatoire
    colors.push(color);

}





for (var i = 0; i < colors.length; i++){
    indexColor = references.indexOf(colors[i]);
   // colors[i] // renvoie jaune

   quantities[indexColor]++;
}
