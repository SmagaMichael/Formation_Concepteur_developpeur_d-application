<?php
//Cat est une classe , une structure , un moule 

class Cat{
    //une classe posséde des propriétés , des attributs ou caractéristiques
    var $nameOfCat;
    var $type;
    var $fur;

    //Une classe possède des méthodes , actions ou comportments 
    function cry() {
        return 'Miaou !';
    }

    //$this permet de récupérer l'instance sur laquelle on appelle la méthode eat()
    function eat (){
        return $this->name.' mange';
    }
}

//Bianca et Mina sont deux instances différentes de la classe Cat
$bianca = new Cat();
//on peut affecter une valeur aux propriétés de l'instance 
$bianca->name = 'Bianca';
$bianca->type = 'Chat de gouttière';
$bianca->fur = 'Blanc';

echo 'Mon chat s\'apelle '.$bianca->name. ' et il fait '.$bianca->cry() ;

echo '<br/>';
echo '<br/>';


$mina = new Cat();
$mina->name = 'Mina';
echo $mina->name. ' peut aussi faire '. $mina->cry();

echo '<br/>';
echo '<br/>';

echo $bianca->eat();
echo '<br/>';
echo $mina->eat();
echo '<br/>';
echo '<br/>';

var_dump($bianca);
var_dump($mina);