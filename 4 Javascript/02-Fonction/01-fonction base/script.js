
function addition(n1, n2){
    //le return n'affiche rien mais garde le résultat en mémoire
    return n1 + n2;
}


console.log(addition(10, 4));
console.log(addition(11, 5));

var somme = addition(10, 3) + addition(5, 5);
console.log(somme);


/*  
Créer une fonction qui permet de dire bonjour à un utilisateur
On pourra passer un prénom à la fonction (Toto) et on retournera 
donc "Bonjour, Toto!" 

*/


var name = prompt('Quel est ton nom ? ')

 function Hello(name){
     return name;
 }

 console.log(Hello("Bonjour, " + name))
 