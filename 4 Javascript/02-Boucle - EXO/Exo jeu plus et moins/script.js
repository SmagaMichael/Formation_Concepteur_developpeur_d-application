var nbtrouver = Math.floor(Math.random() *100)+1;

var nombre = prompt('Saisissez un nombre entre 1 et 100');
console.log(nombre)

var count = 1;

while(nombre != nbtrouver){
  count++;
        if (nombre < nbtrouver){
                alert('le nombre à trouver est plus grand');
                nombre = prompt('Saisissez un nombre entre 1 et 100');
                console.log(nombre)}
            
            
            
        if (nombre > nbtrouver){
                alert('le nombre est plus petit');
                nombre = prompt('Saisissez un nombre entre 1 et 100');
                console.log(nombre)}

        if (isNaN(nombre)){
            nombre = parseInt(prompt('ceci n\'est pas un nombre'));}
                
}

alert('félicitation tu as trouvé en ' + count + ' fois !!!' );

