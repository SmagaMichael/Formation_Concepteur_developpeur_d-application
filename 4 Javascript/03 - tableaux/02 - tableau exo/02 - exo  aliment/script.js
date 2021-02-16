/*   2. Créer un tableau avec des aliments: Poulet, Frites, Chocolat
           Demander à l'utilisateur ce qu'il veut manger. Nous vérifierons que l'aliment
            est présent ou non dans
           le tableau*/

var aliment = [Poulet = 1, Frites = 1 , Chocolat = 0]

var demande = prompt('Que voulez vous manger ? (Poulet, Frites ou Chocolat)')
console.log(demande)


if (demande == 'Poulet' && Poulet == true){
    alert('vous avez de la chance, il en reste 1 !! ');} 
else if(demande == 'Poulet' && Poulet ==false)
    {alert('désolé notre dernier poulet s\'est envolé')}





 if (demande == 'Frites' && Frites == true){
    alert('vous pouvez manger des frites , il y en a !! ')}

else if(demande == 'Frites' && Frites == false)
    {alert('désolé un rat à mangé les pommes de terre')} 





if (demande == 'Chocolat' && Chocolat == true){
    alert('vous pouvez manger du Chocolat , il y en a !! ')}

    else if (demande == 'Chocolat' && Chocolat == false) {
     alert('désolé il n\'y  a plus de chocolat :( ')} 