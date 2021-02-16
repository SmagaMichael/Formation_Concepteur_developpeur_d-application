<?php

    class Form{

    //contient tous les champs du formulaire
    private $fields = [];

    //contient toutes les données du formulaire
    private $data = [];


    public function __construct($data = []){
        $this->data = $data;
    }
   

    //Permet de définir un champ dans mon formulaire
    public function input($name){
        $this->fields[] = $name;

        //on génére le label 
        //ucfirst permet de mettre la premiere lettre en majuscule
        $label = ucfirst($name);
        return "<label for=\"$label\">$label</label>
        <input type=\"text\" name=\"$name\" id=\"$name\" class=\"form-control\" placeholder=\"$name\"> ";
    }


        public function button($name){
            return "<button class=\"btn btn-primary\">$name</button>";
        }


        public function isSubmit(){

            return !empty($_POST);
        }



        public function getData(){
            return $this->data;
        }








}