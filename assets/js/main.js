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
let rundenZahl_Ist = 0;
// 0 / 0
let rundenZahl_Soll___text = document.querySelector("#rundenZahl_Soll");
let rundenZahl_Soll = 0;


let wuerfelErgebnisUser___text = document.querySelector("#wuerfelErgebnisUser");
let wuerfelErgebnisUser = 0;
let wuerfelErgebnisComp___text = document.querySelector("#wuerfelErgebnisComp");
let wuerfelErgebnisComp = 0;
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
    if (rundenZahl_Ist < rundenZahl_Soll) {

        // Zufalszahl für PC zwischen 0 und 2 erstellen
        let zufallszahl_pc = Math.round((Math.random() * (2-0)+0));
        console.log(zufallszahl_pc);  // pc = zufall 0 - 2 

        // User Zahl über den Button holen
        zahl_user = Number(button_0.value);             // !!! Button umstellen  0 = Zahl 

/* 
0 = Stein
1 = Papier
2 = Schere
      
       = Gewinner
                     0 : 0  = Unentschieden
0 : 1 = 1 Papier
0 : 2 = 0 Stein
1 : 0 = 1 Papier
1 : 2 = 2 Schere
                     1 : 1 = Unentschieden
2 : 0 = 0 Stein
2 : 1 = 2 Schere
                     2 : 2 = Unentschieden

 */

        // If Vergleich,     = Ausgabe = verschiedene Erhöhungen
        // Unentschieden
        if (zufallszahl_pc === zahl_user ) {    
            const zahlNull = 0;                       // !!!   0 = Zahl
            console.log("zufallszahl gleich")

            // User Ergebnis wird weiter gezählt und erhöht
            wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
            wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;

            // PC Ergebnis wird weiter gezählt und erhöht
            wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
            wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;

            wuerfeErgebnis_Text.innerHTML = `Unentschieden Zufallszahl ist gleich`

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            // Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc===1 &&  zahl_user===0) {    
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 1){
            // User Ergebnis wird weiter gezählt und erhöht
            wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
            wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
            //  ??? Farben ??      
            // !!! Button ändern
            button_0.style.backgroundColor = "green";
            
            wuerfeErgebnis_Text.innerHTML = `User Gewinnt`

            }
            else if (zufallszahl_pc == 1){
            // PC Ergebnis wird weiter gezählt und erhöht
            wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
            console.log(zahlNull)
            console.log(wuerfelErgebnisComp);
            wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
            // ??? Farben ??
            // !!! Button ändern
            button_0.classList.add = "js___rotVerloren";

            wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`

            }
            // wuerfeErgebnis_Text.innerHTML = `Unentschieden Zufallszahl ist gleich`

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;



    } else {
        wuerfeErgebnis_Text.innerHTML = `neues Spiel ? Dann drück  <br> unten reset `
    }

};






// Funktion    reseteAlleVariablen
//    :-) dürfte nicht gehen, da seite im html hart neu geladen wird ;-)
function reseteAlleVariablen() {
    console.log("reseteAlleVariablen geht in function reseteAlleVar")

}

};