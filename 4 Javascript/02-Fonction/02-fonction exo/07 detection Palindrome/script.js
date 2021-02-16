// entrée : un nombre entier n
// sortie : le terme de rang n de la suite de Fibonacci

function palin(word){
var reverseIndex;

for(var i = 0; i < word.length; i++){
     reverseIndex = (word.length - 1) -i;
     console.log(i + ' : ' + word[i]);
     console.log(reverseIndex + ' : ' + word[reverseIndex]);

     if (word[i] !== word[reverseIndex]) {
          return word + ' n\'est pas un palindrome'}
}

return word + ' est un palindrome';


}

console.log(palin('kayak'));
console.log(palin('atta'));
console.log(palin('tata'));
