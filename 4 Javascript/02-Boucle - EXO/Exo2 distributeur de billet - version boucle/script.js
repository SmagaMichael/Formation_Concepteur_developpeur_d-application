

    var amount = parseInt(prompt('Indiquez la somme à retirer ')) /* Le montant de l'utilisateur , p
    arseInt = etre sur que la valeur soit un nombre pour le code et non une chaine de caractère */
    var rest = amount;

    var billets = [500,200,100,50,20,10,5,2,1];
    var quantity = [0,0,0,0,0,0,0,0,0];

    for(var i = 0; i < billets.length; i++){
        quantity[i] = Math.floor(rest / billets[i]);
        rest = rest % billets[i];
    }
console.log(billets);
console.log(quantity)
