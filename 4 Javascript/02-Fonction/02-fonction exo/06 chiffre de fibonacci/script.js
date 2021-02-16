// entrée : un nombre entier n
// sortie : le terme de rang n de la suite de Fibonacci

/*
function fibo(n){
     if (n === 0) {return 0} 

     else if (n === 1) {return 1;} 

     else {return fibo(n - 1) + fibo(n - 2);}

}

console.log(fibo(10))

*/

function fibo(n){
     if (n <= 1) {return n} 

     return fibo(n - 1) + fibo(n - 2);

}

console.log(fibo(10))