<?php

require 'Personnage.php';

$merlin = new Personnage('Merlin');
// $merlin->name = 'Merlin';

echo $merlin->getName().' a '.$merlin->vie.' de vie';

echo '<br/>';

$merlin->regen();
echo $merlin->getName().' a '.$merlin->vie.' de vie';
echo '<br/>';



$merlin->vie = 0;
var_dump($merlin->dead());
echo $merlin->getName().' a '.$merlin->vie.' de vie';echo '<br/>';


$merlin->regen();
echo $merlin->getName().' a '.$merlin->vie.' de vie';
echo '<br/>';


$harry = new Personnage('Harry');


$merlin->atk($harry);

if($harry->dead()){
    echo 'Harry est mort';
}else{
    echo 'Harry est toujours vivant ! avec '.$harry->vie.' points de vie ';
}
