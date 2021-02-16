//3. Créer une fonction qui calcule le PGCD de 2 nombres




function pgcd(A,B){

    while (B != 0){
        if (A > B)  {A = A - B;}
            
        else{ B = B - A;}
    }

return A;

}

var A = parseInt(prompt('Donner nombre A'));
var B = parseInt(prompt('Donner nombre B'));
console.log(pgcd(A,B));