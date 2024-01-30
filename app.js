var Table = [];

function Ajouter() {
  var inputText = document.getElementById('inputText').value;
  Table.push(inputText);
  afficherResultat();
  document.getElementById('inputText').value = ''; 
}