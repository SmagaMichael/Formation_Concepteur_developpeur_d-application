/*  1. Créer un tableau avec les jours de la semaine sans lundi et vendredi.
           Ajouter lundi et vendredi (pas dans le tableau initial).
           Afficher le 3ème jour de la semaine.
           Combien y-a-t-il de jours ?*/


var jours = [ 'Mardi', 'Mercredi', 'Jeudi', 'Samedi', 'Dimanche']
console.log(jours)

jours.unshift('Lundi')
console.log(jours)

jours.splice(4,0,'Vendredi')
console.log(jours)

console.log(jours[2])

console.log('il y a ' + jours.length + ' jours indiqués dans votre tableau')