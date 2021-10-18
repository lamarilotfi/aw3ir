






function validation(){

var nom =document.getElementById("n").value;
var prenom =document.getElementById("Pre").value;
var Adresse =document.getElementById("Adr").value;
var mail =document.getElementById("m").value;
var date =document.getElementById("d").value;
var i=0;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if( !nom.replace(/\s+/, '').length ){
    document.getElementById("error").innerHTML +="La saisie du nom est obligatoire </br>" ;
}else if(nom.length>30 || nom.length<5){
    document.getElementById("error").innerHTML +="Le nom est incorrect </br>" ;
}else{
  i=i+1;
}
if( !prenom.replace(/\s+/, '').length ){
    document.getElementById("error").innerHTML +="La saisie du prenom est obligatoire </br>" ;
}else if(prenom.length>30 || prenom.length<5){
    document.getElementById("error").innerHTML +="Le prenom est incorrect </br>" ;
}else{
   i=i+1;
}
if( !Adresse.replace(/\s+/, '').length ){
    document.getElementById("error").innerHTML +="La saisie de l'Adresse est obligatoire </br>" ;
}else if(Adresse.length>50 || Adresse.length<5){
    document.getElementById("error").innerHTML +="L'Adresse est incorrect </br>" ;
}else{
    i=i+1;
}


if(!re.test(String(mail).toLowerCase())){
    document.getElementById("error").innerHTML +="Email incorrect </br>" ;

}else {
    i=i+1;
}
if( !date.replace(/\s+/, '').length ){
    document.getElementById("error").innerHTML += "Date incorrect " ;
}else
{
    i=i+1;
}

if(i == 5 ){
    document.getElementById("resultat").innerHTML += "Bienvenue " + nom;
}
   
 
}
