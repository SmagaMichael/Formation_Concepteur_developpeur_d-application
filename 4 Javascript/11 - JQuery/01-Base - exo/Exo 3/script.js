/* Créer un texte qui s'agrandit au clic. Si on reclique dessus, il reprend sa taille d'origine. Pour pouvoir faire cela, il va falloir mettre la taille de police initiale dans une variable.


*/

var size =16;


$('.text-size').click(function() {
    if(size === 16)
         { size = 28;}

   else{size = 16}

    $('.text-size').css('font-size',size);

});