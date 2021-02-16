

var amount = parseInt(prompt('Quel montant voulez-vous ?'));
var rest = amount;
var bankNotesChoice = parseInt(prompt('Quel billet voulez-vous ? (500 / 200 / 100 / 50 / 20 / 10 / 5 / 2 / 1)'));
var bankNotes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
var bankNotesQuantities = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (var j = 0; j < bankNotes.length; j++) {
    if (bankNotes[j] === bankNotesChoice) {
        bankNotesQuantities[j] = Math.floor(rest / bankNotesChoice);
        rest = rest % bankNotesChoice;
    }
}

for (var i = 0; i < bankNotes.length; i++) {
    if (rest > 0 && bankNotes[i] !== bankNotesChoice) {
        bankNotesQuantities[i] = Math.floor(rest / bankNotes[i]);
        // Alternative: (rest - rest % bankNotes[i]) / bankNotes[i]
        rest = rest % bankNotes[i];
    }
}
console.log(bankNotesQuantities);