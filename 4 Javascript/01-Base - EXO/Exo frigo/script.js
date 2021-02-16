var frigo = {
            tomate:3,
            oeuf:4,
            pain:1,
            jambon:2,
            poulet:1,
            formage:1,};

console.log(frigo)



if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomate || frigo.fromage) >= 1){
    console.log('Je peux faire un sandwitch');
        alert('Je peux faire un sandwitch')}
    
else if(frigo.poulet >= 1){
        console.log('Je mange le poulet');}

else if(frigo.oeuf >= 3){
        console.log('je mange une omelette');}

else{
        console.log('Je mange des chips');}