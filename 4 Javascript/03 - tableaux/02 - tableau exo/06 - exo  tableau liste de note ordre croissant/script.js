/* 4. Créer un tableau avec une liste de notes (10, 14, 18, 2, 10).
           Calculer la moyenne.
           Afficher la note la plus haute du tableau.
           Afficher la note la plus basse du tableau.
           BONUS: Demander à l'utilisateur de remplir la liste de notes*/



var tableau = [10, 14, 18, 2, 10];
var i = 0;
var stock;
console.log(tableau)

while( i < 5){


// si i est plus grand que 
    if(tableau[i] > tableau[i+1]){

        // stock la valeur de i = 14
        stock = tableau[i];
      

        // i prend la valeur de i++ 14 = 10
        tableau[i] = tableau[i+1];

        //i++ prend la valeur de stock = 14
        tableau[i+1] = stock;

        //
        i = 0;}

     else{
         i = i+1;
     }   

}

console.log(tableau)