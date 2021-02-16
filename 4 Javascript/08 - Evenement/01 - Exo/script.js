//1. Créer une page HTML, ajouter une balise img avec une image. 
//Au survol, sur l'image, changer le src de l'image par une autre image.-->


var survol = "loba2.jpg";
var quitter = "loba.jpg";

var image = document.getElementById("image1");

image.addEventListener("mouseenter", function(){
	image.src = survol;
});
image.addEventListener("mouseleave", function(){
	image.src = quitter;
});


// OU 


document.getElementsByTagName("img")[1].addEventListener("mouseenter", function(){
	var survol1 = document.getElementsByTagName('img')[1];
    survol1.src ="orange.png";;
});


document.getElementsByTagName('img')[1].addEventListener('mouseleave', function() {
    var quitter1 = document.getElementsByTagName('img')[1];
    quitter1.src ="blue.png";
});



// OU 
/* function changeImage(event){
    console.log(event)
    if (event.type ==='mouseenter'){image.src = 'nom de l\'image'}
             else{image.src ='nom de l\'image'}


}

// on utilise une fonction nommé pour les évents
image.addEventListener('mouseenter')
image.addEventListener('mouseleave')



*/






// 2. Ajouter une balise h1, lors du click sur celle-ci, changer la couleur du h1
function colorAlea (){
    var color ='#' + Math.floor(Math.random()*0xFFFFFF).toString(16);
    return color;
}

var title = document.getElementById('title');
title.addEventListener('click', function(){

    title.style.color = colorAlea() ;
   
})




/* 
3. Ajouter un bouton. Lors du click sur celui-ci, changer le background color du body*/

var changeColor = document.getElementById('change-color');

changeColor.addEventListener('click', function(){
    document.body.style.backgroundColor = colorAlea()
});






/* 4. Créer un formulaire avec un input text et un bouton. Lors du clic sur le bouton, 
faire une alerte avec la valeur saisie dans le input*/

var button = document.getElementById('submit');
var inputName = document.getElementById('name');


button.addEventListener('click', function(event){
    event.preventDefault();

    alert(inputName.value);
});



// change le titre h2 en direct 
var inputMessage = document.getElementById('message');

// l'evenement est exécuté des que la valeur du Input change
inputMessage.addEventListener('input', function(){
document.getElementById('message-content').textContent = inputMessage.value;


});