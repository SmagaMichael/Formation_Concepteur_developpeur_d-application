/*
Créér 5 boutons et un rectangle. Chaque bouton provoque une action sur le rectangle.

Bouton 1 : augmente la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
(fonction height())
*/
var height = 10;

$('.10px').click(function(){
    height += 10;

if(height  >= 100){
    height = 10}

    $('.Rectangle').css('height', height);
});




/* Bouton 2 : mettre le rectangle en vert */
$('.vert').click(function(){
    $('.Rectangle').css('background-color' , 'green')
})



/* Bouton 3 : remettre les couleurs initiales */
$('.reset').click(function(){
    $('.Rectangle').css('background-color' , 'transparent')
})




/* Bouton 4 : faire disparaître le rectangle */
$('.cacher').click(function(){
    $('.Rectangle').hide()
})




/* Bouton 5 : faire réaparaître le rectangle */
$('.voir').click(function(){
    $('.Rectangle').show()
})



