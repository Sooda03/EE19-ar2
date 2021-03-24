const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    var namn = rutaNamn.value;
    console.log(namn);

    var cpu = meny.value;
    console.log(cpu);

    lista.innerHTML = "<li>" +
                    "AMD Ryzen 3 3100 3.6GHz 18MB" +
                    "Antal kärnor: 4 st | Antal trådar: 8st | TDP: 65W"
                     "</li>"
});