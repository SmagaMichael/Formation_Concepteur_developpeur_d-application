/*
         * Gestion de films et de séries
         *
         * Dans un film, on va stocker
         *  - le titre (chaine)
         *  - la date de sortie (année)
         *  - la durée (minutes)
         *  - la liste des acteurs (tableau de chaines)
         *  - Et le format (DVD, VOD, Blu-Ray) (chaine)
         *  - Le genre (chaine)
         */
        var films = [
            {
                titre: 'Star Wars: Un nouvel espoir',
                dateDeSortie: 1977,
                duree: 125,
                acteurs: ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
                format: 'VOD',
                genre: 'Science-fiction'
            },
            {
                titre: 'Harry Potter à l\'école des sorciers',
                dateDeSortie: 2001,
                duree: 152,
                acteurs: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson'],
                format: 'DVD',
                genre: 'Science-fiction'
            },
            {
                titre: 'Le monde de Nemo',
                dateDeSortie: 2003,
                duree: 101,
                acteurs: ['Albert Brooks', 'Nemo', 'Dorie'],
                format: 'Blu-ray',
                genre: 'Animation'
            }
        ];

        // 1 - Afficher la liste des films (le nom et l'année de sortie)
        console.log('1')
        for(var i = 0; i <films.length; i++){
            console.log(films[i].titre + ' => ' +films[i].dateDeSortie)
        }      

        // 2 - Afficher les films sortis avant 2000
        console.log('2')
        for(var i = 0; i <films.length; i++){
            if(films[i].dateDeSortie < 2000){
                console.log('film sorti avant 2000 : ' + films[i].titre)
            }
        }        

        // 3 - Afficher les films qui durent plus de 2h
        console.log('3')
        for(var i = 0; i <films.length; i++){
            if(films[i].duree > 120){
                console.log('film durant plus de 2h : ' + films[i].titre)
            }
        }       




        // 4 - Afficher la liste des acteurs de Harry Potter
        console.log('4')
        console.log(films[1].acteurs.join(', ')) 
        

        // 5 - Afficher uniquement les Blu-ray
        console.log('5')
        for(var i = 0; i <films.length; i++){
            if(films[i].format == 'Blu-ray'){
                console.log('format blu-ray : ' + films[i].titre)
            }
        }       



        // 6 - Afficher la durée de chaque film en heures (1h41 pour 101) Pourquoi pas une fonction ?
        console.log('6')
        
function formatDuree(dureeEnMiunutes){
    var nbHour = parseInt (dureeEnMiunutes/ 60);
    var nbminuteRestante = dureeEnMiunutes % 60;

    if (nbminuteRestante < 10){
        nbminuteRestante = '0' + nbminuteRestante;
    }
    return nbHour + 'h' + nbminuteRestante + 'm';
}

for(var i = 0; i <films.length; i++){
    console.log(formatDuree(films[i].duree))
}


//ou 


for(var i = 0; i <films.length; i++){
    var nbHour = parseInt(films[i].duree / 60);
    var nbminuteRestante = (films[i].duree % 60);
    
    //Ajoute un 0  si les minutes restant sont inférieurs à 10
    if (nbminuteRestante < 10){
        nbminuteRestante = '0' + nbminuteRestante;
    }

        console.log('titre et durée : ' + films[i].titre +' Duree : ' + films[i].duree +' min  Soit:' +
        nbHour + "h" + nbminuteRestante)
}      












// 7 - Afficher tous les acteurs qui ont joués dans un film de Science-fiction
console.log('7')
var acteursSF = [];
for(var i = 0; i < films.length; i++){
    if(films[i].genre == 'Science-fiction'){
        //parcourir tous les acteurs du film en question 
       for(var j = 0; j < films[i].acteurs.length; j++){
           //films[i].acteurs[j] renvoie le nom d'acteur un par un 
           // On verifie que l'acteur n'est pas déja présent dans le tableau pour éviter les doublons 
           if (! acteursSF.includes(films[i].acteurs[j])){
            acteursSF.push(films[i].acteurs[j]);
           }
       }
    }
}      
console.log(acteursSF.join(', '));










console.log('8')
// - Afficher toutes les catégories ainsi que la totalité de la durée de leur film
//    Animation: 1h41minutes
//    Science-fiction: 4h37minutes

for(var i = 0; i <films.length; i++){
    var nbHour = parseInt(films[i].duree / 60);
    var nbminuteRestante = (films[i].duree % 60);


    if(films[i].genre == 'Science-fiction'){

        console.log('Science-fiction  ' + films[i].duree +' min' )

    }
    console.log(films[0].duree + films[1].duree )

    
    if(films[i].genre == 'Animation'){
        console.log('Animation   ' + films[i].duree +' min  Soit:' + nbHour + "h" + nbminuteRestante)

    }
}

//correction
console.log('correction 8')
var genres =[]; // je vais stocker tous les genre de film de manière unique 
var scienceFiction = 0;
var animation = 0; 

for(var i = 0; i <films.length; i++){
    //console.log(films.genre)
    //je stocke dans un tableau le genre  et la duree du film 
    genres.push(films[i].genre, films[i].duree);
}

// on va devoir dédoublonner et additionner les duérees pour une même catégorie 
for(var i = 0; i < genres.length; i++){
// si la catégorie actuelle dans le tableau est la meme que la suivante, on additionne les durées 
    if(genres[i][0] === 'Science-fiction'){
        scienceFiction = scienceFiction + genre[i][1];
    }else if (genres[i][0] === 'Animation'){
        animation = animation + genre[i][1];
    }
}
