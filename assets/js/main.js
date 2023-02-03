console.log("test");

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

// ist ein array []
let button_all = document.querySelectorAll(".button_all");
console.log(button_all);

//let button_reset = document.querySelector("#button_reset");
// reset = Seite neu laden    oder   alle Variablen auf 0

let zahl_user = 0;

// EventListener
radio_rundenZahl_05.addEventListener("change", rundenVergleich);
radio_rundenZahl_10.addEventListener("change", rundenVergleich);
radio_rundenZahl_15.addEventListener("change", rundenVergleich);
radio_rundenZahl_20.addEventListener("change", rundenVergleich);

//
//button_0.addEventListener("click", wuerfelnVergleich_0);
//button_1.addEventListener("click", wuerfelnVergleich_1);
//button_2.addEventListener("click", wuerfelnVergleich_2);

// array auslesen
button_all.forEach(button => button.addEventListener("click", (element) => {
    zahl_user = Number(element.target.value)
    console.log("User zahl: " + zahl_user)
    console.log(Number(element.target.value))
    wuerfelnVergleich_0()
}));



button_reset.addEventListener("click", reseteAlleVariablen);




// Funktionen   rundenVergleich
function rundenVergleich(event) {
    event.preventDefault();        // verhindert neu laden der Seite, so wie im html onsubmit="return false"
    console.log("radio geht in function rundenVergleich");

    if (radio_rundenZahl_05.checked) {

        setTimeout(() => {                           // wartet 1000 ms bis Display weg
            ausblenden.style.display = "none";
            einblenden.style.display = "flex";
        }, 1000);

        const zahl5 = Number(radio_rundenZahl_05.value); // Zahl 5
        rundenZahl_Soll = zahl5;
        rundenZahl_Soll___text.innerHTML = zahl5;

    }
    else if (radio_rundenZahl_10.checked) {
        ausblenden.style.display = "none";
        einblenden.style.display = "flex";
        const zahl10 = Number(radio_rundenZahl_10.value); // Zahl 10
        rundenZahl_Soll = zahl10;      // zählt mit
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
        einblenden.classList.add("js___einblenden");
        const zahl20 = Number(radio_rundenZahl_20.value); // Zahl 5
        rundenZahl_Soll = zahl20;
        rundenZahl_Soll___text.innerHTML = zahl20;
    }
};





// Funktion    wuerfelnVergleich 0
function wuerfelnVergleich_0() {
    if (rundenZahl_Ist < rundenZahl_Soll) {

        // Zufalszahl für PC zwischen 0 und 2 erstellen
        let zufallszahl_pc = Math.round((Math.random() * (2 - 0) + 0));
        console.log("Pc zahl: " + zufallszahl_pc);  // pc = zufall 0 - 2 

        // User Zahl über den Button holen
        //zahl_user = Number(button_all.value);             // !!! Button umstellen  0 = Zahl 
        //console.log(button_all.value);  
        console.log(zahl_user);

        // button Zusammenfügen 
        let button = document.querySelector(`#button_${zahl_user}`);

        // Button farben zurück setzen
        button.classList.remove("js___gruenGewonnen","js___rotVerloren")                    // !!! Button ändern
button.classList.add("js___neutralDefault")
button_0.classList.add("js___neutralDefault")
button_1.classList.add("js___neutralDefault")
button_2.classList.add("js___neutralDefault")  // !!! ??? wieso wechseln die classListen 
                                        // !!! ??? nur beim wechsel von Gewinner und Velierer




        // If Vergleich,     = Ausgabe = verschiedene Erhöhungen
        //0:0 1:1 2:2 Unentschieden
        if (zufallszahl_pc === zahl_user) {
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
            rundenZahl_Ist ++; //1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //0:1 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if ((zufallszahl_pc === 0 && zahl_user === 1) ||
            (zufallszahl_pc === 1 && zahl_user === 2) ||
            (zufallszahl_pc === 2 && zahl_user === 0)) {
           // let zahlEins = 1;                       // !!! 1 = Zahl

            //  if (zahl_user == 1) {                    // !!! 1 = Zahl 
            // User Ergebnis wird weiter gezählt und erhöht
            wuerfelErgebnisUser ++ ; //zahlEins; // z.B. 0 + 0 
            wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
            button.classList.toggle("js___gruenGewonnen")                    // !!! Button ändern
            wuerfeErgebnis_Text.innerHTML = `User Gewinnt`
            setTimeout(() => {button.classList.add("js___neutralDefault")}, 1000);


            // }

            // PC Ergebnis wird weiter gezählt und erhöht
        } else
            // zahlEins = 1
            wuerfelErgebnisComp ++ //zahlEins; // z.B. 0 + 0
        //console.log(zahlEins)
        console.log(wuerfelErgebnisComp);
        wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
        button.classList.toggle("js___rotVerloren");                        // !!! Button ändern
        wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`
        setTimeout(() => {button.classList.add("js___neutralDefault")}, 1000);

        // Runde wird um 1 erhöht
        rundenZahl_Ist ++; //1;
        rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


        /* 
        
                //1:0 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
            } else if (zufallszahl_pc === 1 && zahl_user === 0) {
                const zahlNull = 1;                       // !!! 1 = Zahl
        
                if (zufallszahl_pc == 1) {              // !!! 1 = Zahl
                    // PC Ergebnis wird weiter gezählt und erhöht
                    wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                    console.log(zahlNull)
                    console.log(wuerfelErgebnisComp);
                    wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                    button_0.classList.add("js___rotVerloren");                        // !!! Button ändern
                    wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`
        
        
                }
        
                // Runde wird um 1 erhöht
                rundenZahl_Ist += 1;
                rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;
        
        
                //0:2 Gewinner hier: 0  Stein //     0 = Stein 1 = Papier 2 = Schere     
            } else if (zufallszahl_pc === 0 && zahl_user === 2) {
                const zahlNull = 1;                       // !!! 1 = Zahl
        
                if (zahl_user == 0) {                    // !!! 1 = Zahl 
                    // User Ergebnis wird weiter gezählt und erhöht
                    wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                    wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                    button_0.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                    wuerfeErgebnis_Text.innerHTML = `User Gewinnt`
        
                }
        
                // Runde wird um 1 erhöht
                rundenZahl_Ist += 1;
                rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;
        
        
                //2:0 Gewinner hier: 0 Stein //     0 = Stein 1 = Papier 2 = Schere     
            } else if (zufallszahl_pc === 2 && zahl_user === 0) {
                const zahlNull = 1;                       // !!! 1 = Zahl
        
                if (zahl_user == 0) {                    // !!! 1 = Zahl 
                    // User Ergebnis wird weiter gezählt und erhöht
                    wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                    wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                    button_0.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                    wuerfeErgebnis_Text.innerHTML = `User Gewinnt`
        
        
                }
                // Runde wird um 1 erhöht
                rundenZahl_Ist += 1;
                rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;
        
        
                //1:2 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
            } else if (zufallszahl_pc === 2 && zahl_user === 0) {
                const zahlNull = 1;                       // !!! 1 = Zahl
        
                if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                    // PC Ergebnis wird weiter gezählt und erhöht
                    wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                    console.log(zahlNull)
                    console.log(wuerfelErgebnisComp);
                    wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                    button_0.classList.add("js___rotVerloren");                        // !!! Button ändern
                    wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`
        
        
                }
        
                // Runde wird um 1 erhöht
                rundenZahl_Ist += 1;
                rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;
        
        
                //2:1 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
            } else if (zufallszahl_pc === 2 && zahl_user === 0) {
                const zahlNull = 1;                       // !!! 1 = Zahl
        
                if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                    // PC Ergebnis wird weiter gezählt und erhöht
                    wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                    console.log(zahlNull)
                    console.log(wuerfelErgebnisComp);
                    wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                    button_0.classList.add("js___rotVerloren");                        // !!! Button ändern
                    wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`
        
                }
        
                // Runde wird um 1 erhöht
                rundenZahl_Ist += 1;
                rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;
        
        
        
        
            } */

    }
    else {
        wuerfeErgebnis_Text.innerHTML = `neues Spiel ? Dann drück  <br> unten reset `

    }
}
/* 
// Funktion    wuerfelnVergleich 1
function wuerfelnVergleich_1() {
    if (rundenZahl_Ist < rundenZahl_Soll) {

        // Zufalszahl für PC zwischen 0 und 2 erstellen
        let zufallszahl_pc = Math.round((Math.random() * (2 - 0) + 0));
        console.log(zufallszahl_pc);  // pc = zufall 0 - 2 

        // User Zahl über den Button holen
        zahl_user = Number(button_1.value);             // !!! Button umstellen  0 = Zahl 

        // Button farben zurück setzen
        button_1.classList.remove("js___gruenGewonnen")                    // !!! Button ändern
        button_1.classList.remove("js___rotVerloren");                        // !!! Button ändern




        // If Vergleich,     = Ausgabe = verschiedene Erhöhungen
        //0:0 1:1 2:2 Unentschieden
        if (zufallszahl_pc === zahl_user) {
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


            //0:1 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 0 && zahl_user === 1) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 1) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_1.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`


            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;




            //1:0 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 1 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 1) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_1.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`


            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //0:2 Gewinner hier: 0  Stein //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 0 && zahl_user === 2) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 0) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_1.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`

            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //2:0 Gewinner hier: 0 Stein //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 0) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_1.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`


            }
            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //1:2 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_1.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`


            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //2:1 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_1.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`

            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;




        }

    }
    else {
        wuerfeErgebnis_Text.innerHTML = `neues Spiel ? Dann drück  <br> unten reset `

    }
}
// Funktion    wuerfelnVergleich 2
function wuerfelnVergleich_2() {
    if (rundenZahl_Ist < rundenZahl_Soll) {

        // Zufalszahl für PC zwischen 0 und 2 erstellen
        let zufallszahl_pc = Math.round((Math.random() * (2 - 0) + 0));
        console.log(zufallszahl_pc);  // pc = zufall 0 - 2 

        // User Zahl über den Button holen
        zahl_user = Number(button_0.value);             // !!! Button umstellen  0 = Zahl 

        // Button farben zurück setzen
        button_2.classList.remove("js___gruenGewonnen")                    // !!! Button ändern
        button_2.classList.remove("js___rotVerloren");                        // !!! Button ändern




        // If Vergleich,     = Ausgabe = verschiedene Erhöhungen
        //0:0 1:1 2:2 Unentschieden
        if (zufallszahl_pc === zahl_user) {
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


            //0:1 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 0 && zahl_user === 1) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 1) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_2.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`

            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;




            //1:0 Gewinner hier: 1  Papier //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 1 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 1) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_2.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`


            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //0:2 Gewinner hier: 0  Stein //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 0 && zahl_user === 2) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 0) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_2.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`

            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //2:0 Gewinner hier: 0 Stein //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zahl_user == 0) {                    // !!! 1 = Zahl 
                // User Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisUser += zahlNull; // z.B. 0 + 0 
                wuerfelErgebnisUser___text.innerHTML = wuerfelErgebnisUser;
                button_2.classList.add("js___gruenGewonnen")                    // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `User Gewinnt`


            }
            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //1:2 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_2.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`


            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;


            //2:1 Gewinner hier: 2 Schere //     0 = Stein 1 = Papier 2 = Schere     
        } else if (zufallszahl_pc === 2 && zahl_user === 0) {
            const zahlNull = 1;                       // !!! 1 = Zahl

            if (zufallszahl_pc == 2) {              // !!! 1 = Zahl
                // PC Ergebnis wird weiter gezählt und erhöht
                wuerfelErgebnisComp += zahlNull; // z.B. 0 + 0
                console.log(zahlNull)
                console.log(wuerfelErgebnisComp);
                wuerfelErgebnisComp___text.innerHTML = wuerfelErgebnisComp;
                button_2.classList.add("js___rotVerloren");                        // !!! Button ändern
                wuerfeErgebnis_Text.innerHTML = `Comp Gewinnt`

            }

            // Runde wird um 1 erhöht
            rundenZahl_Ist += 1;
            rundenZahl_Ist___text.innerHTML = rundenZahl_Ist;




        }

    }
    else {
        wuerfeErgebnis_Text.innerHTML = `neues Spiel ? Dann drück  <br> unten reset `

    }
}
 */

// Funktion    reseteAlleVariablen
//    :-) dürfte nicht gehen, da seite im html hart neu geladen wird ;-)
function reseteAlleVariablen() {
    console.log("reseteAlleVariablen geht in function reseteAlleVar")

}

;