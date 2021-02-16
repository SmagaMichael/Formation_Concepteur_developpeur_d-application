<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculette</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
        <form method="POST" >
            <input type="text" class="form-control" name="number1"value=""
                   placeholder="number1">

            <select class="form-control" name="Operator">
                <option >+</option>
                <option >-</option>
                <option >x</option>
                <option >/</option>
            </select>

            <input type="text" class="form-control" name="number2"
                   value=""
                   placeholder="number2">

            <button class="btn btn-primary">Calculer</button>
        </form>
    <?php
        
        //    Exercices
        //    Dans ce formulaire, créer un champ nombre1 et un champ nombre2
        //    Au clic sur le bouton "Calculer", faire la somme du nombre1 et du nombre2
        //    Ajouter un champ radio ou select permettant de choisir l'opération (+, -, /, *)   

    if(isset($_POST['number1']) && isset($_POST['Operator']) && isset($_POST['number2'])) {
        $Number1 = $_POST['number1'];
        $Number2 = $_POST['number2'];
        $Operator = $_POST['Operator'];

        if($_POST['Operator'] == '+'){
            $Total = $Number1 + $Number2;
            echo 'La somme de ces deux nombres est ' . $Total;}

        if($_POST['Operator'] == '-'){
            $Total = $Number1 - $Number2;
            echo 'La différence de ces deux nombres est ' . $Total;}

        if($_POST['Operator'] == 'x'){
            $Total = $Number1 * $Number2;
            echo 'Le produit de ces deux nombres est ' . $Total;}

        if($_POST['Operator'] == '/'){
            $Total = $Number1 / $Number2;
            echo 'Le quotient de ces deux nombres est ' . $Total;}
        }

        ?>
    </div>
</body>
</html>

