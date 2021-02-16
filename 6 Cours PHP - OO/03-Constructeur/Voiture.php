<?php

class Car{

private $brand;
private $model;
private $color;
private $wheels;

public function __construct( $brand, $model, $color='white', $wheels=4){
    
        $this->brand = $brand;
        $this->model = $model;
        $this->color = $color;
        $this->wheels = $wheels;
    
    }

//brand
    public function getBrand(){
        return $this->brand;
    }

    public function setBrand($brand){
        $this->brand = $brand;

        return $this;
    }


//model
    public function getModel(){
        return $this->model;
    }

    public function setModel($model){
        $this->model = $model;

        return $this;
    }

//wheels
    public function getWheels(){
        return $this->wheels;
    }

    public function setWheels($wheels){
        $this->wheels = $wheels;

        return $this;
    }

//COLOR
    public function getColor(){
        return $this->color;
    }

    public function setColor($color){
        $this->color = $color;

        return $this;
    }



    public function drive(){
        return 'La '.$this->brand. ' ' .$this->model. ' roule sur ses ' .$this->wheels. ' roues';
    }

    public function klaxon(){
        return 'La voiture '.$this->color. ' klaxonne';
    }
}