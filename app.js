var Table = [];

function Ajouter() {
  var inputText = document.getElementById('inputText').value;
  Table.push(inputText);
  afficherResultat();
  document.getElementById('inputText').value = ''; 
}

function Vider() {
  Table = [];
  afficherResultat();
}

function random() {
  if (Table.length > 0) {
    var motAleatoire = Table[Math.floor(Math.random() * Table.length)];
    var resultatParagraphe = document.getElementById('resultat');
    resultatParagraphe.innerHTML =  motAleatoire;
  } else {
    alert("Ajoutez des mots !!");
  }
}

function afficherResultat() {
  var resultatParagraphe = document.getElementById('resultat');
  resultatParagraphe.innerHTML =  Table.join('<br>');
}