<?php 

try{
    $db = new PDO('mysql:host=localhost;port=3306;dbname="exam_m2i','root','',[
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, //On active les erreurs SQL
    ]);
    
    }catch(Exception $exception){
        echo $exception->getMessage();  //Affiche le message de l'erreur quand ça detecte pas la base 
        exit(); // Arrete le script PHP
    
    }


function getAllStagiaires(){
    global $db; 
    $query = $db->query(('SELECT * FROM `stagiaire`'));

    return $query->fetchAll();
}

