



var nom = document.getElementById("Nom").value;
var email = document.getElementById("mail").value;
var prenom = document.getElementById("Prenom").value;
var date = document.getElementById("date").value;
var Adresse = document.getElementById("Adresse").value;

validation(){
    return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
 
}