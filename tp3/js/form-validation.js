
window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("error").innerHTML ="";
        document.getElementById("title").innerHTML ="";
        
        var nom = document.getElementById("fname").value;
        var prenom = document.getElementById("lname").value;
        var Adresse = document.getElementById("inputAddress").value;
        var mail = document.getElementById("inputEmail4").value;
        let date = document.getElementById("inputl4").value;
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
       

        
        var i = 0;
        let nowTimestamp = Date.now();
        let time =Date.parse(date);

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!nom.replace(/\s+/, '').length) {
            document.getElementById("error").innerHTML += "La saisie du nom est obligatoire </br>";
        } else if (nom.length > 30 || nom.length < 5) {
            document.getElementById("error").innerHTML += "Le nom est incorrect </br>";
        } else {
            i = i + 1;
        }
        if (!prenom.replace(/\s+/, '').length) {
            document.getElementById("error").innerHTML += "La saisie du prenom est obligatoire </br>";
        } else if (prenom.length > 30 || prenom.length < 5) {
            document.getElementById("error").innerHTML += "Le prenom est incorrect </br>";
        } else {
            i = i + 1;
        }
        if (!Adresse.replace(/\s+/, '').length) {
            document.getElementById("error").innerHTML += "La saisie de l'Adresse est obligatoire </br>";
        } else if (Adresse.length > 50 || Adresse.length < 5) {
            document.getElementById("error").innerHTML += "L'Adresse est incorrect </br>";
        } else {
            i = i + 1;
        }


        if (!re.test(String(mail).toLowerCase())) {
            document.getElementById("error").innerHTML += "Email incorrect </br>";

        } else {
            i = i + 1;
        }
        if (!date.replace(/\s+/, '').length) {
            document.getElementById("error").innerHTML += "Date incorrect </br>";
        } else {
            i = i + 1;
        }

        if (time > nowTimestamp) {
            document.getElementById("error").innerHTML += "date dans le futur </br>";
        }
        else {
            i = i + 1;
        }
        if (i == 6) {
            document.getElementById("title").innerHTML += "Bienvenue " + nom;
            document.getElementById("error").innerHTML +="vous etes ne le "+date +" et vous habitez";
            document.getElementById("error").innerHTML +="<a href=http://maps.google.com/maps?q=Paris><img width=450 src=https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg /> </a>";
           


            myModal.show();
        }
        else{
            document.getElementById("title").innerHTML +="Erreur dans le formulaire";
           myModal.show();
        }

        
        console.log("form submitted!");
        console.log();
       
        
        
        
    });



};

