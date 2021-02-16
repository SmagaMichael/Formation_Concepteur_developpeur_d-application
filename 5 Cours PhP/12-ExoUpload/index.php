<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo  d'upload</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <form method="POST" enctype="multipart/form-data">
            <label for="Civilite">Civilité</label>
            <select name="Civilite" id="Civilite"class="form-control">
                <option value="Mr">Mr</option>
                <option value="Mme">Mme</option>
            </select>
            <br>
            <label for="nom">Nom</label>
            <input type="text" class="form-control">
            <br>
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom" class="form-control"> 
            <br>
            <label for="phone">Téléphone</label>
            <input type="text" class="form-control"> 
            <br>
            <label for="mail">Adresse mail</label>
            <input type="text" class="form-control"> 
            <br>
            <label for="postal">Code postal</label>
            <input type="text" class="form-control"> 
            <br>
            <label for="ville">Ville</label>
            <input type="text" class="form-control"> 
            <br>
            <label for="CV"> Votre CV</label>
            <input type="file" name="CV" class="form-control">
            <br>
            <label for="monimage"> Votre image</label>
            <input type="file" name="monimage" class="form-control">
            <br>
            <button class="btn btn-primary">Uploader</button>
        </form>


        <?php

         var_dump($_FILES);
        //    1. Nous allons créer un formulaire de candidature à une offre d'emploi

        //    2. L'utilisateur pourra envoyer son CV en PDF. On devra vérifier le format et la taille (limité à 5mo).

        //    3. L'utilisateur pourra saisir son prénom, on renommera le CV avec son prénom et une chaine de caractère générée aléatoirement.

           if(!empty($_FILES['CV'])){

            $fichier = $_FILES['CV']['tmp_name'];

            if(!is_dir('DossierDocument')){
                mkdir('DossierDocument');
            }

                if( $_FILES['CV']['error'] === 0 && 
                    $_FILES['CV']['type'] ==='application/pdf' &&
                    $_FILES['CV']['size'] < 5 * 1024 * 1024){


                    $NomDuFichier = $_POST['prenom'] .uniqid() .'_'.$_FILES['CV']['name'];


                    move_uploaded_file($fichier, 'DossierDocument/'. $NomDuFichier);
                }else{
                    echo 'Veuillez envoyer un fichier...';
                }

           }
       
           
        //    4. BONUS DE LA MORT : On ajoutera l'upload d'une image. Idéalement, on essaiera de redimensionner l'image en 300x300 dans un nouveau fichier. Voir l'extension GD.


        //   Vérifié qu'une image à été déposé 
           if(!empty($_FILES['monimage'])){

            //On vérifie qu'il n'y a pas d'erreur
                if($_FILES['monimage']['error'] === 0){

                    //On crée le dossier images s'il n'existe pas
                    if(!is_dir('DossierImages')){
                        mkdir('DossierImages');
                    }

                    //On récupére les infos du fichier
                    $cheminTemporaireDuFichier = $_FILES['monimage']['tmp_name'];
                    $nomDuFichier = $_FILES['monimage']['name'];

                    //on upload l'image dans le dossier images
                    move_uploaded_file($cheminTemporaireDuFichier, 'DossierImages/' .$nomDuFichier);

                    //Resizer l'image




                }



           }
        ?>

    </div>
</body>
