

var Elsa ='Elsa + Olaf'
var Draco ='Peluche Draco'
var Drone ='Drone'
var FirstPC ='My FirstPC'
var DollHouse ='My DollHouse'
var Monster ='Monster High'
var Miraculous ='Costume Ladybug '
var Societe ='Jeu de société'

var i = 1;


$('.Elsa').click(function(){
    $('.Article' +i ).text('Article  : ' + Elsa)
       i++})

$('.Draco').click(function(){
    $('.Article' +i).text('Article  : ' + Draco)
    i++})

$('.Drone').click(function(){
    $('.Article'+i).text('Article  : ' + Drone)
    i++})

$('.FirstPC').click(function(){
    $('.Article'+i).text('Article  : ' + FirstPC)
    i++})

$('.DollHouse').click(function(){
    $('.Article'+i).text('Article  : ' + DollHouse)
    i++})

$('.Monster').click(function(){
    $('.Article'+i).text('Article  : ' + Monster)
    i++})

$('.Miraculous').click(function(){
    $('.Article'+i).text('Article  : ' + Miraculous)
    i++})

$('.Societe').click(function(){
    $('.Article'+i).text('Article  : ' + Societe)
    i++})




// le traineau bouge une fois cliqué sur les achats
$('.Send').click(function(){
    $('.Send').text('Merci et Joyeux Noël')
 //   $('.sled').animate({
 //       left: '-=1500',
 //   },5000)
});





    // un message  s'affiche quand on fini les achats
$( '.Send' ).click(function() {
    if ($('.Send').text() === 'Merci et Joyeux Noël')
            { $( '.merci' ).toggle( "slow" );
           // $('.Send').prop('disabled', true);
        
        }
    });


// desactivé les boutons une fois selectionné 
$( '.magasine > button' ).click(function() {
     ($(this) === true)
            { $(this).prop('disabled', true);}
    });


    //Compteur de choix d'article
var i2 = 0


$('.magasine > button' ).click(function(){
i2++
console.log(i2);

$('.reste' ).text('il vous reste ' +(5 - i2)+ ' choix 🎅');
    if(i2 >= 5){
    alert('nombres de choix atteint');
    $('.magasine > button').unbind("click");}



});

    
     