const rutaKm = document.querySelector(".km");
const rutaLm = document.querySelector(".lm");
const button = document.querySelector(".raknaUt");
const rutaOutput = document.querySelector(".output");

button.addEventListener("click", function() {
    
    var kilometer = rutaKm.value
    var litermil = rutaLm.value
    var förbrukning = kilometer * litermil
    console.log(förbrukning);

    if (förbrukning < 50) {
        rutaOutput.value = "Du har kört " + kilometer + " kilometer och förbrukat " + förbrukning + " liter bensin"
    } else {
        rutaOutput.value = "Du har kört " + kilometer + " kilometer och förbrukat " + förbrukning + " liter bensin glöm inte att tanka!"
    }
})