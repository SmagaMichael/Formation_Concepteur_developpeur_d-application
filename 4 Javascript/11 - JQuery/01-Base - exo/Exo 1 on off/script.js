/* Faire un bouton avec une version "On" et "Off". La version "On" est noire avec un fond gris clair comportant une ombre portée, et la version "Off" est grise avec un fond gris foncé sans ombre portée. Au clic, on passe à "On" si c'est "Off" et inversement.

 

Faire un menu déroulant : au clic sur un bouton, un bloc de texte se déplie. Et quand on reclique dessus, il se referme. Pour l'animer, il faut utiliser la fonction animate() ou slideToggle().*/



$('.OnOff').css({
    height: '50px',
    width:'150px',
    'background-color' : 'lightgray',
    'boxShadow': '5px 5px 5px',
    

})


$('.OnOff').click(function(){

if ($('.OnOff').text() === 'ON')
    {$('.OnOff').text('OFF')

    $('.OnOff').css({
        height: '50px',
        width:'150px',
        'background-color' : 'green',
        'boxShadow': 'none'})
}

           
else {$('.OnOff').text('ON')

    $('.OnOff').css({
        height: '50px',
        width:'150px',
        'background-color' : 'lightgray',
        'boxShadow': '5px 5px 5px',
        })}
});


// Menu déroulant
// Fermer le menu déroulant
$( '.OnOff' ).click(function() {
    if ($('.OnOff').text() === 'OFF')
            { $( '.MenuButton' ).slideDown( "slow" );}
  });


//ouvrir le menu déroulant
$( '.OnOff' ).click(function() {
    if ($('.OnOff').text() === 'ON')
            { $( '.MenuButton' ).slideUp( "slow" );}
  });



  //Ou pour etre moins précis ou plus court 

  $( '.OnOff' ).click(function() {
      $('.MenuButton1').slideToggle()
  })