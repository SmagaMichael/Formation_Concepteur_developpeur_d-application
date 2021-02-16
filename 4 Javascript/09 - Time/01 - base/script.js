


//Afficher un message au bout de 2 secondes 

setTimeout(function(){

    alert('pub');
},2000)  //2000 milliseconde

//Afficher un message dans la console toutes les 5 secondes 

var interval = setInterval(function() {
    console.log('test')
    
}, 1000);



// arreter l'interval au bout de 3 sec 
setTimeout(function()  {
    clearInterval
}, 3000);