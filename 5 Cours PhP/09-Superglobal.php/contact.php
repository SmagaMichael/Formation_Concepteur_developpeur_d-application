<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les superglobales en PHP</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
   <!--// Exercices
// Créer un fichier contact.php
// Créer un formulaire avec 3 champs
// Email, Sujet et Message
// L'email doit être valide et obligatoire
// Le sujet ne doit pas être vide
// Le message doit faire au minimum 15 caractères
 -->
    <h1>Nous contacter</h1>
 <?php
    $email = null;
    $subject = null;
    $message = null;
    $errors = [];

    if(!empty($_POST)){
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        //Vérifier l'email

        if(empty($subject)){
            $errors['subject'] = 'Le sujet est vide';
          }


        //Vérifier le sujet

        if(empty($subject)){
            $errors['subject'] = 'Le sujet est vide';
          }



        //Vérifier le message
        if(strlen($message) < 15){
            $errors['message'] = 'Le message est vide ou trop court';
        }


    }
?>



    <div class="container">
        <form method="POST">
           
        <label for="email">email</label>
        <input type="text" name="email" id="email" class="form-control"> <br/>

        <label for="subject">Sujet</label>
        <input type="text" name="subject" id="subject" class="form-control"> <br/>

        <label for="message">Message</label>
        <textarea type="text" name="message" id="message" class="form-control"></textarea> <br/>




        <div class="text-right">
           <button class="btn btn-primary">Chercher</button>
        </div>
            
        </form>

    </div>
</body>
</html>


