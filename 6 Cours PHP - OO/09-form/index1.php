<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link  rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
</head>
<body>
    
<?php

//fais un require des classes qu'on utilise (Form)
spl_autoload_register();


//On va pouvoir créer un formulaire comme un objet
$form = new Form($_POST);


?>
<label for=""></label>
<form method="POST" class="container">
    <?= $form->input('email');?>
    <?= $form->input('telephone');?>
    <?= $form->input('message');?>
<br>
    <?= $form->button('Envoyer'); ?>
</form>


<?php
if ($form->isSubmit()){
    var_dump($form->getData());
}
?>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
</body>
</html>