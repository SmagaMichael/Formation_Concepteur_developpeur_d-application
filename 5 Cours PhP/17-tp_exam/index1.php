<?php 
    require 'routedb.php';
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<?php
foreach (getAllStagiaires() as $Onestagiaire){
?>

<p>
    <?php
        echo $Onestagiaire['id'].'-'.$Onestagiaire['name'].'-'.$Onestagiaire['created_at'].'-'.$Onestagiaire['phone'].'-'.$Onestagiaire['birthday'];
    ?>
</p>



<?php
}
?>



</body>
</html>