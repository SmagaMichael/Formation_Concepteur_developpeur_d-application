

var girafe ='Sophie la girafe'
var trotteur ='trotteur'
var livrecss ='livrecss'
var ours ='Petit ours brun'
var doudou ='doudou'
var leon ='Léon l\'ourson'
var piano ='piano'
var form ='cubes et sphéres'

var i = 1;


$('.girafe').click(function(){
    $('.Article' +i ).text('Article 1 : ' + girafe)
       i++})

$('.trotteur').click(function(){
    $('.Article' +i).text('Article 1 : ' + trotteur)
    i++})

$('.livrecss').click(function(){
    $('.Article'+i).text('Article 1 : ' + livrecss)
    i++})

$('.ours').click(function(){
    $('.Article'+i).text('Article 1 : ' + ours)
    i++})

$('.doudou').click(function(){
    $('.Article'+i).text('Article 1 : ' + doudou)
    i++})

$('.leon').click(function(){
    $('.Article'+i).text('Article 1 : ' + leon)
    i++})

$('.piano').click(function(){
    $('.Article'+i).text('Article 1 : ' + piano)
    i++})

$('.form').click(function(){
    $('.Article'+i).text('Article 1 : ' + form)
    i++})




// le traineau bouge une fois cliqué sur les achats
$('.Send').click(function(){
    $('.Send').text('GO')

    $('.sled').animate({
        left: '-=1500',
    },5000)
});




    // un message  s'affiche quand on fini les achats
$( '.Send' ).click(function() {
    if ($('.Send').text() === 'GO')
            { $( '.merci' ).toggle( "slow" );}
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

        $('.reste' ).text('il vous reste ' +(5 - i2)+ ' choix');
        if(i2 >= 5){
            alert('nombres de choix atteint');
            $('.magasine > button').unbind("click");}


       //reste à choisir
      
      
       
            



    
        });

    
     