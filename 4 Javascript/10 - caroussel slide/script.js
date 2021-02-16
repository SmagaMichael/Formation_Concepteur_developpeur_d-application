/* 
Exercice Bonus:
         On va essayer de réaliser un slider (Sans Bootstrap).
         Il nous faudra trois images. On aura également deux flèches (droite et gauche).

         On affiche la première image. On clique (souris) sur la flêche de droite, 
         on change cette image par la seconde et ainsi de suite. Quand on est sur l
         a troisième image, on arrive sur la première image. On peut faire pareil avec 
         la flèche gauche.
        
         BONUS 1: Il faudrait qu'en appuyant sur la flèche droite ou gauche (clavier), 
         on puisse faire défiler le slider (Utiliser un événement et 
         détecter la touche pressée).
       
         BONUS 2: Il faudrait obtenir une transition entre les slides 
         (effet tapisserie ou d'opacité).
       
         BONUS 3: Avoir un défilement automatique toutes les 5 secondes.*/ 

/*
         Ancien bonus: On va essayer de trouver un certain mot dans un p
         Si on cherche "Lorem" par exemple, on va devoir remplacer tous les mots "Lorem"
         par "<span style="color: green">Lorem</span>"
         Pour faire ça, on doit récupérer le contenu du p, on doit transformer la chaine en tableau où chaque mot est un élément de ce tableau.
         A partir de là, on peut parcourir le tableau et trouver le mot en question puis le remplacer dans le tableau.
         A la fin, on remplace le contenu du p par le tableau modifié qui sera d'abord transformé en chaine.
         
         TP Git: Mettre une de vos réalisations sur Github
         Il faudra créer un nouveau dépôt sur Github.
         Il faudra ensuite sélectionner un TP/Projet/Maquette et se déplacer dans ce dossier.
         On pourra donc initialiser un dépôt git, créer un premier commit et push tout cela sur le dépôt Github.
         git init   ->   Initialiser le dépôt dans ton dossier
         git remote add origin ... -> Lier ton dépôt local avec Github
         git add .
         git commit -m ""
         git push -u origin master
*/


//exemple 1
        var slideTab = new Array(3)
        var i1 = 0;

            slideTab[0] = "portal1.jpg";
            slideTab[1] = "portal2.jpg";
            slideTab[2] = "portal3.jpg";
            console.log(slideTab);

        function ChangeSlide1(){
            document.getElementsByClassName('slide1')[0]. src = slideTab[i1];
            console.log(i1)

            if(i1 == slideTab.length-1){i1 = 0;} 
            else i1++;}

        setInterval("ChangeSlide1()", 2000);




            //exemple 2

// tableau = 3 éléments
var slideTab2 = new Array(3)

 // i = 0
var i2 = 0;

slideTab2[0] = "portal1.jpg";
slideTab2[1] = "portal2.jpg";
slideTab2[2] = "portal3.jpg";

// voir la valeur du tableau
console.log(slideTab2);


function ChangeOrange2(){

//je vais chercher ma balise image dans l'HTML qui change à chaque valeur du tableau
document.getElementsByClassName('slide2')[0]. src = slideTab2[i2];

//si  i = valeur max du tableau alors on met i = 0
if(i2 == slideTab2.length-1){i2 = 0;} 

//sinon on incrémente i de 1
else i2++;} 



function ChangeBlue2(){
document.getElementsByClassName('slide2')[0]. src = slideTab2[i2];

//si  i = 0 on ramene i a la fin du tableau 
if(i2 == 0){i2 = slideTab2.length-1;} 

//sinon on incrémente i de 1
else i2--;} 




















  //exemple 3
//byclassname = renvoie un tableau et donc [obligatoire]
  var arrowRight = document.getElementsByClassName('buttonOrange3')[0];
  var arrowLeft = document.getElementsByClassName('buttonBlue3')[0];

  var AllSlide = document.getElementsByClassName('AllSlide')[0];
  var currentSlide = 1;


  arrowLeft.addEventListener('click', function(){
    if (currentSlide <= 0){
        currentSlide=2}

    else{currentSlide--}
        console.log(currentSlide)

    var left = currentSlide*960*-1;
      AllSlide.style.left = left +'px';});


  arrowRight.addEventListener('click',function(){
    if (currentSlide >= 2){
        currentSlide=0
    }
    else{currentSlide++}


    var left = currentSlide*960*-1;
      AllSlide.style.left = left +'px';});

      

/*essaie de bouger la slide avec les fleche

      document.getElementById('left').addEventListener('click', function(){
      movetoleft()
      })

      document.getElementById('right').addEventListener('click', function(){
      movetoright()
      })


      document.addEventListener('keyup', function(event){

        if (event.keycode === 37 ){//fleche de gauche
            movetoleft()}

        else if (event.keycode === 39){// fleche de droite
            movetoright()}
      */