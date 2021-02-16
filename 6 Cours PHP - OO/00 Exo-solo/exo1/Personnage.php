<?php

class Personnage{
    private $name;
    public $vie = 100;
    public $atk = 80;


    public function getName(){
        return $this->name;
    }


    public function crier(){
        echo 'Je suis merlin ! ';
    }

    public function regen($vie = null){
        if(is_null($vie)){
            $this->vie = 100;
        }else{
            $this->vie += $this->vie = $vie;
        }
        $this->vie=100;
    }


    public function __construct($name){
        $this->name = $name;
    }

    public function dead(){
    
        return $this->vie <= 0;
        
    }

    public function atk($cible){
        $cible->vie -= $this->atk;
        var_dump($cible);
    }

}