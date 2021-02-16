// split : séparer toute les lettres en un tableau
// reverse = inverse l'ordre du tabeau 
// join = join les lettres du tableau inversé 

function palin(word){

     if (word === word.split('').reverse().join('')){
          return word + ' est un palindrome'
     } 
     return word + ' n\'est pas un palindrome';
}

console.log(palin('kayak'));
console.log(palin('atta'));
console.log(palin('tata'));
