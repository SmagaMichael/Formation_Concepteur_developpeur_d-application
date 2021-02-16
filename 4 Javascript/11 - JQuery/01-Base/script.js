



$('h1').text('Good bye Javascript');
$('p').css('color', 'blue');


$('p').first().css({'color': 'red',
fontSize : '30px',
'background-color' : 'gray',});



$('.square').css({
    'background-color' : 'red',
    height: 100,
    width : 100,
    position : 'absolute',
});

$('.square').animate({
    left:'+=1500',
}, {duration :2000,
complete:function(){
    alert('Le carré à gagné');
}
});

$('button').click(function(){
    $('.square').animate({
        left: '-=1500',
    },2000)
})