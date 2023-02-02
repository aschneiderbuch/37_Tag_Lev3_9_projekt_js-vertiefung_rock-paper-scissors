console.log("test");

// Variablen

let ausblenden = document.querySelector(".ausblenden");
// ausblenden.style.display = "none";
let einblenden = document.querySelector(".einblenden");

let radio_rundenZahl_05 = document.querySelector("#radio_rundenZahl_05");
let radio_rundenZahl_10 = document.querySelector("#radio_rundenZahl_10");
let radio_rundenZahl_15 = document.querySelector("#radio_rundenZahl_15");
let radio_rundenZahl_20 = document.querySelector("#radio_rundenZahl_20");

let rundenZahl_Ist___text = document.querySelector("#rundenZahl_Ist");
rundenZahl_Ist = 0;
// 0 / 0
let rundenZahl_Soll___text = document.querySelector("#rundenZahl_Soll");
rundenZahl_Soll = 0; 


let wuerfelErgebnisUser = document.querySelector("#wuerfelErgebnisUser");
wuerfelErgebnisUser = 0;
let wuerfelErgebnisComp = document.querySelector("#wuerfelErgebnisComp");
wuerfelErgebnisComp = 0;
let wuerfeErgebnis_Text = document.querySelector("#wuerfeErgebnis_Text");

let button_0 = document.querySelector("#button_0");
let button_1 = document.querySelector("#button_1");
let button_2 = document.querySelector("#button_2");

let button_reset = document.querySelector("#button_reset");
// reset = Seite neu laden    oder   alle Variablen auf 0

let zahl_user = 0;

// EventListener
radio_rundenZahl_05.addEventListener("change", rundenVergleich);
radio_rundenZahl_10.addEventListener("change", rundenVergleich);
radio_rundenZahl_15.addEventListener("change", rundenVergleich);
radio_rundenZahl_20.addEventListener("change", rundenVergleich);

//
button_0.addEventListener("click", wuerfelnVergleich_0);
button_1.addEventListener("click", wuerfelnVergleich_1);
button_2.addEventListener("click", wuerfelnVergleich_2);

button_reset.addEventListener("click", reseteAlleVariablen);




// Funktionen   rundenVergleich
function rundenVergleich(event) {
    event.preventDefault();        // verhindert neu laden der Seite, so wie im html onsubmit="return false"
    console.log("radio geht in function rundenVergleich");

    if (radio_rundenZahl_05.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        const zahl5 = Number(radio_rundenZahl_05.value); // Zahl 5
        rundenZahl_Soll = zahl5;
        rundenZahl_Soll___text.innerHTML = zahl5;
            
    }
    else if (radio_rundenZahl_10.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        const zahl10 = Number(radio_rundenZahl_10.value); // Zahl 10
        rundenZahl_Soll = zahl10;
        rundenZahl_Soll___text.innerHTML = zahl10;
    }
    else if (radio_rundenZahl_15.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        const zahl15 = Number(radio_rundenZahl_15.value); // Zahl 5
        rundenZahl_Soll = zahl15;
        rundenZahl_Soll___text.innerHTML = zahl15;
    }
    else if (radio_rundenZahl_20.checked) {
        ausblenden.classList.add("js___ausblenden");
        einblenden.classList.add("jas___einblenden");
        const zahl20 = Number(radio_rundenZahl_20.value); // Zahl 5
        rundenZahl_Soll = zahl20;
        rundenZahl_Soll___text.innerHTML = zahl20;
    }
};





// Funktion    wuerfelnVergleich
function wuerfelnVergleich_0() {
    console.log("wuerfel geht in function wuerfelnVergleich");

    let zufallszahl_pc = Math.round((Math.random()*3));
    console.log(zufallszahl_pc);  // pc = zufall 0 - 2 
     
    zahl_user = Number(button_0.value);   // !!! Button umstellen  0 = Zahl 
console.log(zahl_user);

if (zufallszahl_pc == zahl_user == Number(button_0.value)) {
    const zahlNull = 0; // !!! Button umstellen  0 = Zahl
    console.log("zufallszahl gleich")
    wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
    console.log(wuerfelErgebnisUser);
    wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
    console.log(wuerfelErgebnisComp);
    wuerfeErgebnis_Text.innerHTML = `Unentschieden Zufallszahl ist gleich`



}

};






// Funktion    reseteAlleVariablen
//    :-) dürfte nicht gehen, da seite im html hart neu geladen wird ;-)
function reseteAlleVariablen() {
    console.log("reseteAlleVariablen geht in function reseteAlleVar")



};