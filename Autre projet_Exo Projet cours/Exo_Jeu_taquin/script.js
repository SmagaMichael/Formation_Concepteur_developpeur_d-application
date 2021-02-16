/* # TP Puzzle / Taquin

On va essayer de créer un Puzzle (numéros) en JavaScript / jQuery.
http://www.artbylogic.com/puzzles/numSlider/numberShuffle.htm

On devra utiliser Github. Voici la liste des fonctionnalités à implémenter :

- Créer l'apparence du jeu avec des cases. On va commencer par un 4 par 4. Il faut donc avoir 15 carrés avec une zone vide.
- Pouvoir cliquer sur un carré et le positionner à la place de la zone vide.
  Chaque carré doit être positionné (relative ou absolute) par rapport à la zone complète du jeu
- Mélanger le jeu aléatoirement à chaque rafraichissement
- Autoriser uniquement le déplacement d'un carré s'il est à côté de la zone vide
- BONUS: Compter les déplacements (en temps réel)
- BONUS: Ajouter un chronomètre et détecter la fin de la partie
- BIG BONUS: Adapter le jeu pour que cela fonctionne avec une image (à voir si on peut découper une image en ligne)
  https://postcron.com/image-splitter/editor/en/upload-image*/

function moveBlock(bloc){
  var currentX = $(bloc).css('left');
  var currentY = $(bloc).css('top');

  var blancX = $('.blanc').css('left');
  var blancY = $('.blanc').css('top');

  $(bloc).css({top: blancY, left: blancX});
  $('.blanc').css({top: currentY, left: currentX});



//intervertir les ids pour connaitre la position d'un block 
//et vérifier si on a gagné la partie
var StockID = $(bloc).attr('id');
var blancID = $('.blanc').attr('id');

$(bloc).attr('id',blancID);
$('.blanc').attr('id',StockID)
}



$('.start, .restart').click(function(){
  // On mélange le jeu En cliquant sur start
  for(var i = 1; i < 100; i++){
    var random = Math.floor(Math.random() * (16 - 1))
    moveBlock('.block-'+random)
  }
$('.start').text('recommencer')

//reset shots
shots = 0
$('#shots strong').text(shots);
$('#win').hide();


//Chronomètre, on commence les secondes à 0
var secondes = 0;
// on multi par 100 puis on divise pour éviter les bugs 
clearInterval(Time);
Time  =setInterval(function(){
secondes += 0.01 * 100;
$('#Time Strong').text(secondes / 100)

},10);//On incrémente toutes les  10 miliseconde,  


  });















var shots = 0; //représente le nombres de click


$(".Square").click(function(){
  //récuperer la position top et left du bloc cliqué 
  var currentX = $(this).css('left');
  var currentY = $(this).css('top');

  //récuperer la position du bloc vide

  var blancX = $('.blanc').css('left');
  var blancY = $('.blanc').css('top');

//Calculer la différence de position entre les block 
//.abs = met la valeur en valeur absolu ex : -5 = 5  
// cela iévite d'avoir un nombre négatif et d'avoir à mettre un
// 'ou' dans la condition d'après 
  var diffX = Math.abs(parseInt(currentX) - parseInt(blancX));
  var diffY = Math.abs(parseInt(currentY) - parseInt(blancY))

  if(diffX > 125 || diffY > 125 || diffX >= 125 && diffY >= 125){
    return;
   }
 

  //inverser la position des blocks
  $(this).css({top: blancY, left: blancX});
  $('.blanc').css({top: currentY, left: currentX});





  // incrémenter le compteur du jeu 
  shots = shots + 1;
  $('#shots strong').text(shots);



  //intervertir les ids pour connaitre la position d'un block 
  //et vérifier si on a gagné la partie
  var StockID = $(this).attr('id');
  var blancID = $('.blanc').attr('id');

  $(this).attr('id',blancID);
  $('.blanc').attr('id',StockID)



  var win = true;
  for(var i = 1; i < 16; i++){
    //class = "block-i"  id = "i"

    var blockID = $('.block-'+i).attr('id');

    if(blockID != i){
      //on perd si l'id ne correspond pas au block
      win = false }}


if (win){
  $('#win').show(); //on affiche une div quand on gagne 
  clearInterval(Time);}

});










