console.log("test");

// Variablen

let ausblenden = document.querySelector(".ausblenden");
// ausblenden.style.display = "none";
let einblenden = document.querySelector(".einblenden");

let radio_rundenZahl_05 = document.querySelector("#radio_rundenZahl_05");
let radio_rundenZahl_10 = document.querySelector("#radio_rundenZahl_10");
let radio_rundenZahl_15 = document.querySelector("#radio_rundenZahl_15");
let radio_rundenZahl_20 = document.querySelector("#radio_rundenZahl_20");

let rundenZahl_Text = document.querySelector("#rundenZahl_Text");
// 0 : 0 

let wuerfelErgebnisUser = document.querySelector("#wuerfelErgebnisUser");
let wuerfelErgebnisComp = document.querySelector("#wuerfelErgebnisComp");

let wuerfelErgebnis_Text = document.querySelector("#wuerfelErgebnis_Text");

let button_0 = document.querySelector("#button_0");
let button_1 = document.querySelector("#button_1");
let button_2 = document.querySelector("#button_2");

let button_reset = document.querySelector("#button_reset");
// reset = Seite neu laden    oder   alle Variablen auf 0



// EventListener
radio_rundenZahl_05.addEventListener("change", rundenVergleich);
radio_rundenZahl_10.addEventListener("change", rundenVergleich);
radio_rundenZahl_15.addEventListener("change", rundenVergleich);
radio_rundenZahl_20.addEventListener("change", rundenVergleich);

button_0.addEventListener("click", wuerfelnVergleich);
button_1.addEventListener("click", wuerfelnVergleich);
button_2.addEventListener("click", wuerfelnVergleich);

button_reset.addEventListener("click", reseteAlleVariablen);



// Funktionen   rundenVergleich
function rundenVergleich(event) {
    event.preventDefault();        // verhindert neu laden der Seite, so wie im html onsubmit="return false"
    console.log("radio geht in function rundenVergleich");

    if (radio_rundenZahl_05.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        wuerfelnVergleich();
    }
    else if (radio_rundenZahl_10.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        wuerfelnVergleich();
    }
    else if (radio_rundenZahl_15.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        wuerfelnVergleich();
    }
    else if (radio_rundenZahl_20.checked) {
        ausblenden.classList.add("js___ausblenden");
        einblenden.classList.add("jas___einblenden");
        wuerfelnVergleich();
    }
};





// Funktion    wuerfelnVergleich
function wuerfelnVergleich() {
    console.log("wuerfel geht in function wuerfelnVergleich");



};






// Funktion    reseteAlleVariablen
//    :-) dürfte nicht gehen, da seite im html hart neu geladen wird ;-)
function reseteAlleVariablen() {
    console.log("reseteAlleVariablen geht in function reseteAlleVar")



};