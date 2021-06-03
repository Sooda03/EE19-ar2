const rutaHastighet = document.querySelector(".hastighet");
const rutaTid = document.querySelector(".tid");
const button = document.querySelector(".raknaUt");
const rutaSvar = document.querySelector(".output");

button.addEventListener("click", function() {

    var hastighet = rutaHastighet.value
    var tid = rutaTid.value
    var resultat = hastighet * tid / 60;
    console.log(resultat);

    rutaSvar.value = "Du kör i " + resultat + " km/h";
})

