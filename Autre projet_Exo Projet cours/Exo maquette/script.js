/*
# TP Back to HTML

Nous allons intégrer une page en HTML / CSS / jQuery. Le client nous a fournit une maquette mais il nous annonce que
nous sommes totalement libre dans notre créativité, tant que l'on garde les fonctionnalités essentielles.

Voici la liste des fonctionnalités :

- Intégration du design avec Bootstrap et Font Awesome
- Un clic sur le bouton Follow (bleu) remplace son contenu par Unfollow (rouge) et vice-versa
- Un clic sur le coeur ajoute un like (infini) et change le coeur en noir (et vice-versa).
- Un clic sur la bulle de commentaire affiche un formulaire ou le masque.
- Si on remplit le formulaire et qu'on clique sur ajouter, le contenu s'ajoute au dessus. (.val() permet de récupérer la valeur d'un textarea en jQuery)
- Dans le message, on mettra le premier mot en gras afin qu'il puisse représenter le pseudo de l'utilisateur
*/

//follow

$('.follow').click(function() {
  if  ($('.follow').text() === 'Follow')
  $('.follow').text('Unfollow'),
  $('.follow').css('backgroundColor' , 'red' )
  
  else{
    $('.follow').text('Follow');
    $('.follow').css('backgroundColor' , 'rgb(72, 160, 163)' )
  }
});



// liker


$('.fa-heart').click(function(){
var i = 0;
//
if($(".heart").find(".far").length){
    i++
    $(".heart").find(".far").addClass("fas").removeClass("far")
    }
    

else if($(".heart").find(".fas").length){
   i = 0
    $(".heart").find(".fas").addClass("far").removeClass("fas")
    }
    $('.NbLikes').text('Likes : ' + i )
});
  






//montrer zone de commentaire
$('.fa-comment-dots').click(function(){
    $(".clickMessage").toggle()});




//take text from textarea

function AddText() {
  var PSEUDO = document.getElementById("pseudo").value;
  var TEXT = document.getElementById("myTextarea").value;

  $("#AddP").append( "<p>  "+ TEXT +"</p>" );
  $("#AddPseudo").append( "<p><strong>"+ PSEUDO +": </srong></p>" );
}