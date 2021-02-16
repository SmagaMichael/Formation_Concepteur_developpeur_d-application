/* Tp caisse automatique qui donne de la monnaie 

L'utilisateur saisit un montant en euros (888) 
La machine doit lui donner 

1x 500
1x 200
1x 100
1x 50
1x 20
1x 10
1x 5

1x 2
1x 1


Bonus : l'utilisateur peut choisir de n'avoir que des billets de 50*/

    var amount = prompt('Indiquez la somme à retirer ') // Le montant de l'utilisateur
    var rest;

    var   Billet500=0; // Quantité de billet
    var   Billet200=0;
    var   Billet100=0;
    var   Billet50=0;
    var   Billet20=10;
    var   Billet10=0;
    var   Billet5=0;
    var   Billet2=0;
    var   Billet1=0;

Billet500 = Math.floor(amount / 500);
rest = amount % 500;
console.log(rest);

Billet200= Math.floor(rest / 200);
rest = rest % 200;
console.log(rest);

Billet100 = Math.floor(rest / 100);
rest = rest % 100;
console.log(rest);

Billet50 = Math.floor(rest / 50);
rest = rest % 50;  
console.log(rest);

Billet20 = Math.floor(rest / 20);
rest = rest % 20;
console.log(rest);

Billet10 = Math.floor(rest / 10);
rest = rest % 10;
console.log(rest);

Billet5 = Math.floor(rest / 5);
rest = rest % 5;
console.log(rest);

Billet2 = Math.floor(rest / 2);
rest = rest % 2;
console.log(rest);

Billet1 = Math.floor(rest / 1);
rest = rest % 1;
console.log(rest);

console.log(Billet500,Billet200, Billet100,Billet50,Billet20,Billet10,Billet5,Billet2,Billet1)