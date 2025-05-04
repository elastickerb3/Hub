//Globale Variablen
let Fertig = false;
let level = 1;
let Punkte = 0;
let maxlevel = 120;
let Frage = document.querySelector(".Frage");
let a = document.querySelector(".A");
let b = document.querySelector(".B");
let c = document.querySelector(".C");
let levelFeld = document.querySelector(".level");
let punkteFeld = document.querySelector(".punkte");
async function sleep(sekunden){
    let time = new Promise(resolve => setTimeout(resolve, sekunden * 1000))
    return time
}
function ChangeQuiz(frage, AntwortA, AntwortB, AntwortC, RichtigeAntwort) {
    Frage.innerHTML = frage;
    a.innerHTML = '<h1 id="Antwort">' + "A. " + AntwortA + "</h1>";
    b.innerHTML = '<h1 id="Antwort">' + "B. " + AntwortB + "</h1>";
    c.innerHTML = '<h1 id="Antwort">' + "C. " + AntwortC + "</h1>";
    if(RichtigeAntwort === "a"){
        a.className = "A richtig";
        a.onclick = () => QuisAuswertung(true)
        b.className = "B falsch";
        b.onclick = () => QuisAuswertung(false)
        c.className = "C falsch";
        c.onclick = () => QuisAuswertung(false)
        richtig = document.querySelector(".richtig"); 
    }
    if(RichtigeAntwort == "b"){
        a.className = "A falsch";
        a.onclick = () => QuisAuswertung(false);
        b.className = "B richtig";
        b.onclick = () => QuisAuswertung(true)
        c.className = "C falsch";
        c.onclick = () => QuisAuswertung(false)
        richtig = document.querySelector(".richtig")
    }
    if(RichtigeAntwort === "c"){
        a.className = "A falsch";
        a.onclick = () => QuisAuswertung(false)
        b.className = "B falsch";
        b.onclick = () => QuisAuswertung(false)
        c.className = "C richtig"
        c.onclick = () => QuisAuswertung(true)
        richtig = document.querySelector(".richtig");
    }
}
function FragenAntwortenUndCo(){
    if(level == 1){
        ChangeQuiz("Das schnellste Landtier der Erde, der Gepard, kommt auf",
                    "80 km h.",
                    "90 kmh.",
                    "110 km h.",
                    "c"
        )
    }
    if(level - 1 == 1) {
        ChangeQuiz("Das langsamste Säugetier der Welt ist ...", 
            "die Seekuh.", 
            "das Faultier.", 
            "der Plumplori.", 
            "b"
        )
}
if(level - 1 == 2){
        ChangeQuiz("Welches Tier hat die längste Zunge?", 
            "die Giraffe",
            "das Chamäleon",
            "die Fledermaus",
            "b")
}
if(level - 1 == 3){
        ChangeQuiz("Welches ist das schwerste Lebewesen das je die Erde bewohnt hat?",
                    "der Tyrannosaurus Rex",
                    "der Blauwal",
                    "der Riesenkalmar",
                    "b"
        )
}
if(level - 1 == 4){
        ChangeQuiz("Welcher Vogel hat die höchste Flügelschlagzahl pro Sekunde?",
                    "die Blaumeise",
                    "der Kolibri",
                    "die Schwalbe",
                    "b"
        )
}
if(level - 1 == 5){
        ChangeQuiz("Der Albatros, der größte Vogel der Welt, ist mit geöffneten Flügeln wie breit?",
                    "280 cm",
                    "350 cm",
                    "390 cm",
                    "b"
        )
}
if(level - 1 == 6){
        ChangeQuiz("Welches ist das giftigste Tier der Welt?",
                    "ein Frosch",
                    "eine Qualle",
                    "ein Skorpion",
                    "b"
        )
}
if(level - 1 == 7){
        ChangeQuiz("Welches Säugetier ist das schnellste?",
                    "Gepard",
                    "Springbock",
                    "Fledermaus",
                    "c"
        )
}
if(level - 1 == 8){
        ChangeQuiz("Der schnellste Vogel der Welt erreicht",
                    "140 Kilometer pro Stunde.",
                    "180 Kilometer pro Stunde.",
                    "320 Kilometer pro Stunde",
                    "c"
        )
}
if(level - 1 == 9){
        ChangeQuiz("Wie lange kann der größte Hungerkünstler der Erde fastet?(Ein Tier)",
                    "30 Jahre",
                    "18 Monate",
                    "12 Wochen",
                    "a"
        )
}
if(level -1 == 10){
        ChangeQuiz("Welches ist das größte Landtier unserer Zeit?",
                    "die Giraffe",
                    "der Elefant",
                    "das Nashorn",
                    "b"
        )
}
if(level -1 == 11){
        ChangeQuiz("Haben Tausendfüßer wirklich 1000 oder mehr Beine?",
                    "Es gibt wirklich welche mit 1000 oder mehr Beinen.",
                    "Man nennt sie nur so, sie haben aber viel weniger Beine",
                    "Sie haben immer exakt 1000 Beine",
                    "a"
        )
}
if(level -1 == 12){
        ChangeQuiz("Neben Hunden eignen sich als Blindenführer auch",
                    "Pferde.", 
                    "Schafe.",
                    "Hausschweine",
                    "a"           
                )
}
if(level -1 == 13){
        ChangeQuiz("Wie lang ist die längste Schlange der Welt?",
                    "4 Meter - so lang wie ein Kleinwagen",
                    "6 Meter - so lang wie ein Wohnmobil",
                    "9 Meter - so lang wie ein Kleinbus für 20 Personen",
                    "c"
        )
}
if(level -1 == 14){
        ChangeQuiz("Die kleinste schlange der Welt misst",
                    "3 Zentimeter",
                    "10 Zentimeter",
                    "17,7 Zentimeter",
                    "b"
        )
}
if(level -1 == 15){
        ChangeQuiz("Die Länge der größten Schlangen der Erdgeschichte war",
                    "10 Meter, mehr als ein Betonmischer.",
                    "12 Meter, länger als ein Tennisplatz breit ist.",
                    "14 Meter, so viel wie ein Großraumbus.",
                    "c"
        )
}
if(level -1 == 16){
        ChangeQuiz("Welche Tierart gibt in einer Laichsaison 300 Milionen Eier ab?",
            "eine Schildkröte",
            "eine Ameise",
            "ein Fisch",
            "c"
        );
}
if(level -1 == 17){
        ChangeQuiz("Bei den Seepferdchen gebären die Mänchen fertig ausgebildete Babys: bis zu",
                    "100 Babys auf einmal.",
                    "500 Babys auf einmal.",
                    "2000 Babys auf einmal.",
                    "c"
        )
}
if(level -1 == 18){
        ChangeQuiz("Wer hat das dichteste Fell im Tierreich?",
                    "die Katze",
                    "der Eisbär",
                    "der Seeotter",
                    "c"
        )
}
if(level -1 == 19){
    ChangeQuiz("Welches Tier hat die feinste Nase?",
                "ein Fisch",
                "ein Hund",
                "ein Trüffelschwein",
                "a"
    )
}
if(level -1 == 20){
    ChangeQuiz("Das größte Ei legt ...",
                "der Kasuar.",
                "der Strauß.",
                "der Königspinguin",
                "b"
    )
}
if(level -1 == 21){
    ChangeQuiz("Die längste Feder im Reich der Vögel hat",
                "der Fasan",
                "der Pfau",
                "die Gans",
                "b"
    )
}
if(level -1 == 22){
    ChangeQuiz("Die langlebigsten Haie werden",
                "40 Jahre alt.",
                "200 Jahre alt.",
                "400 Jahre alt.",
                "c"
    )
}
if(level -1 == 23){
    ChangeQuiz("Welches war das größte Tier, das jemals auf der Erde herumlief?",
                "das Mammut",
                "der Dinosaurier",
                "das Rhinozeros",
                "b"
    )
}
if(level -1 == 24){
    ChangeQuiz("Welches ist das wichtigsten Nutztiere für den Menschen?",
                "das Rind",
                "das Huhn",
                "die Biene",
                "c"
    )
}
if(level -1 == 25){
    ChangeQuiz("Den weitesten Sprung aus dem Stand schafft",
                "eine Springmaus.",
                "ein Frosch",
                "ein Hase.",
                "b"
    )
}
if(level -1 == 26){
    ChangeQuiz("Der Mount Everest in Nepal und Tibet, der höchste Berg der Erde, ist",
                "8.848 Meter hoch.",
                "8.448 Meter hoch.",
                "8.248 Meter hoch.",
                "a"
    )
}
if(level -1 == 27){
    ChangeQuiz("Der tiefste Punkt der Erde liegt",
                "im Atlantik.",
                "unter einer Eisschicht am Südpol.",
                "im Pazifik.",
                "c"
    )
}
if(level -1 == 28){
    ChangeQuiz("Wie oft würde die Erde in die Sonne hineinpassen?",
                "100 Milionen Mal",
                "1,3 Milionen Mal",
                "500 Mal",
                "b"
    )
}
if(level -1 == 29){
    ChangeQuiz("Wie hoch ist die höchste Temperatur, die jemals tagsüber auf der Erde gemessen wurde?",
                "64,7 Grad Celsius",
                "78,2 Grad Celsius",
                "82,6 Grad Celsius",
                "b"
    )
}
if(level -1 == 30){
    ChangeQuiz("Wie kalt ist es am kältesten Ort der Erde?",
                "-75 Grad",
                "-84 Grad",
                "-93 Gard",
                "c"
    )
}
if(level -1 == 31){
    ChangeQuiz("Der tiefsten See der Erde ist mit 1642 Metern Tiefe",
                "der Bodensee zwischen Deutschland, Österreich und der Schweiz.",
                "der Baikalsee in Russland.",
                "der in der Schweiz und in Italien gelegene Lago Maggiore.",
                "b"
    )
}
if(level -1 == 32){
    ChangeQuiz("In welchem Land Europas liegt der höchste Alpengipfel",
                "in der Schweiz",
                "in Frankreich",
                "in Österreich",
                "b"
    )
}
if(level -1 == 33){
    ChangeQuiz("Welcher Antweil der Erde war in der letzten Eiszeit mit Eis bedeckt",
                "17 %",
                "32%",
                "49%",
                "b"
    )
}
if(level -1 == 34){
    ChangeQuiz("Der erste Mensch im All war",
                "ein Russe.",
                "ein Franzose.",
                "ein US-Amerikaner",
                "a"
    )
}
if(level -1 == 35){
    ChangeQuiz("Wie viel Masse unseres Sonnensystems enthält die Sonne",
                "ca. 99,8%",
                "ca. 45 %",
                "ca 80,3 %",
                "a"
    )
}
if(level -1 == 36){
    ChangeQuiz("Wie groß ist der größte Stern im Universum, den man bisher endeckt hat?",
                "100 Mal so groß wie unsere Sonne",
                "1000 Mal so groß wie unsere Sonne",
                "2000 Mal so groß wie die Sonne",
                "c"
    )
}
if(level -1 == 37){
    ChangeQuiz("Woraus besteht der Saturn, der Planet mit den Ringen?",
                "aus Eisen",
                "aus Gas",
                "aus Gestein",
                "b"
    )
}
if(level -1 == 38){
    ChangeQuiz("Welcher Planet unseres Sonnensystems hat die meisten Monde?",
                "Mars, der rote Planet",
                "Jupiter, der größte Planet unseres Sonnensystem",
                "Saturn, der Planet mit dem Ringsystem",
                "b"
    )
}
if(level -1 == 39){
    ChangeQuiz("Wie viele Menschen betraten bisher den Mond?",
                "2 Menschen",
                "6 Menschen",
                "12 Menschen",
                "c"
    )
}
if(level -1 == 40){
    ChangeQuiz("Wie lange bleiben die Fußabdrücke der Astronauten auf dem Mond sichtbar?",
                "1 Milionen Jahre",
                "100 000 Jahre",
                "1 000 Jahre",
                "a"
    )
}
if(level -1 == 41){
    ChangeQuiz("Wie lange dauerte der bisher längste Aufenthalten eines Menschen im Weltraum?",
                "196 Tage, ungefähr 6,5 Monate",
                "360 Tage, etwas über ein Jahr",
                "438 Tage, rund ein Jahr und 2,5 Monate",
                "b"
    )
}
if(level -1 == 42){
    ChangeQuiz("Wie viel wiegt ein Raumanzug?",
                "fast 50 kg",
                "fast 90 kg",
                "130 kg",
                "c"
    )
}
if(level -1 == 43){
    ChangeQuiz('Der "wertvollste" Planet des Universums besteht aus',
                "Gold.",
                "Platin.",
                "Diamanten.",
                "c"
    )
}
if(level -1 == 44){
    ChangeQuiz("Wie viele künstliche Satelliten umkreisen die Erde?",
                "ca. 500",
                "ca. 5500",
                "ca. 5 000 000",
                "b"
    )
}
if(level -1 == 45){
    ChangeQuiz("Wie viele Sterne kannstdu in einer klaren Nacht am Himmel sehen?",
                "max. 500 Sterne",
                "max. 6000 Sterne",
                "max. 12 000 Staerne",
                "b"
    )
}
if(level -1 == 46){
    ChangeQuiz("Wo herrscht die stärkste Anziehung, die es gibt?",
                "auf dem Jupiter",
                "in einem Schwarzen Loch",
                "auf dem Mars",
                "b"
    )
}
if(level -1 == 47){
    ChangeQuiz("Was hat die höchste Geschwindigkeit im Universum?",
                "Schall",
                "Licht",
                "Gas",
                "b"
    )
}
if(level -1 == 48){
    ChangeQuiz("Wie weit ist die am weitesten von der Erde entfernte Forschungssonde bisher gereist?",
                "über unser Sonnensystem hinaus",
                "90 % durch unser Sonnensystem",
                "zur Hälfte durch unser Sonnensystem",
                "a"
    )
}
if(level -1 == 49){
    ChangeQuiz("Wie alt wurde der bisher älteste Mensch der Welt?",
                "99 Jahre",
                "112 Jahre",
                "122 Jahre",
                "c"
    )
}
if(level -1 == 50){
    ChangeQuiz("Das älteste erhaltene gedruckte Buch entstand",
                "um 1 370 in Korea.",
                "um 1450 in Deutschland.",
                "um 1530 in Niederlanden.",
                "a"
    )
}
if(level -1 == 51){
    ChangeQuiz("Das älteste Gemälde der Welt entstand vor ...",
                "800 Jahren.",
                "30 000 Jahre",
                "45 500 Jahre",
                "c"
    )
}
if(level -1 == 52){
    ChangeQuiz("Wie groß ist der größte Mensch, der offiziell vermessen wurde?",
                "2,21 Meter",
                "2,42 Meter",
                "2,73 Meter",
                "c"
    )
}
if(level -1 == 53){
    ChangeQuiz("Wie viel Erbgut haben Menschen und Schimpansen gemeinsam?",
                "69,3 %",
                "98,7 %",
                "99,6 %",
                "b"
    )
}
if(level -1 == 54){
    ChangeQuiz("Die meisten Hundertjährigen leben in",
                "Italien.",
                "Japan.",
                "Deutschland.",
                "b"
    )
}
if(level -1 == 55){
    ChangeQuiz("Der schnellste Mensch der Welt lief umgerechnet",
                "37,58 km h.",
                "43,56 km h.",
                "44,72 km h.",
                "c"
    )
}
if(level -1 == 56){
    ChangeQuiz("Der schnellste Skirennläufer  der Welt lief umgerechnet",
                "167 km h.",
                "205 km h.",
                "254 km h.",
                "c"
    )
}
if(level -1 == 57){
    ChangeQuiz("Der jüngste Schachgroßmeister aller Zeiten war",
                "11 Jahre alt.",
                "12 Jahre alt.",
                "13 Jahre alt.",
                "b"
    )
}
if(level -1 == 58){
    ChangeQuiz("Wie alt war der jüngste Mensch, der allein um die Welt segelte",
                "16 Jahre",
                "17 Jahre",
                "14 Jahre",
                "c"
            )
}
if(level -1 == 59){
    ChangeQuiz("Wie viele Nervenzellen hat das menschliche Gehirn?",
                "ca. 800 Miliarden",
                "ca. 50 Miliarden",
                "ca. 100 Miliarden",
                "c"
    )
}
if(level -1 == 60){
    ChangeQuiz("Wo befindet sich der härteste Knochen unseres Körpers?",
                "im Oberschenkel",
                "im Ohr",
                "in der Hüfte",
                "b"
    )
}
if(level -1 == 61){
    ChangeQuiz("Welches ist das härteste Material in unserem Körper?",
                "Knochen",
                "Zahnschmelz",
                "Nägel",
                "b"
    )
}
if(level -1 == 62){
    ChangeQuiz("Welches Tier hat die härtesten Zähne",
                "der Hamster",
                "der Elefant",
                "die Ratte",
                "c"
    )
}
if(level -1 == 63){
    ChangeQuiz("Welches der genannten Tiere ist eines der stärksten Tiere der Welt im Verhältnis zu seiner Körpergröße?",
                "ein Elefant",
                "ein Käfer",
                "ein Gorilla",
                "b"
    )
}
if(level -1 == 64){
    ChangeQuiz("Das größte Insekt aller Zeiten war mit geöffneten Flügel so breit wie",
                "eine  Hand",
                "der Unterarm eines Erwachsenenen",
                "der Arm eines Erwachsenen",
                "c"
    )
}
if(level -1 == 65){
    ChangeQuiz("Wie viele Zähne hat das Gebiss des Weißen Hais?",
                "ca. 3600",
                "ca. 2600",
                "ca. 360",
                "a"
    )
}
if(level -1 == 66){
    ChangeQuiz("Das größte Weltreich der Geschichte war",
                "das Römische Reich",
                "das Britische Weltreich",
                "das Mongolische Reich",
                "b"
    )
}
if(level -1 == 67){
    ChangeQuiz("Wie viele Fahrspuren hat die breiteste Straße der Welt?",
                "20",
                "16",
                "12",
                "a"
    )
}
if(level -1 == 68){
    ChangeQuiz("Die längste künstliche Wasserstraße aller Zeiten war",
                "95 km lang.",
                "193 km lang.",
                "1800 km lang.",
                "c"
    )
}
if(level -1 == 69){
    ChangeQuiz("Die wichtigste Wasserstraße der Gegenwart ist",
                "der Main-Donau-Kanal.",
                "der Suezkanal.",
                "der Panamakanal.",
                "b"
    )
}
if(level -1 == 70){
    ChangeQuiz("Wie hoch liegt die höchste Großstadt der Welt ?",
                "auf über 3 800 Meter über dem Meeresspiegel",
                "auf über 3 200 Meter über dem Meeresspiegel",
                "auf über 2 300 Meter über dem Meeresspiegel",
                "a"
    )
}
if(level -1 == 71){
    ChangeQuiz("Die steilst Straßenbahn der Welt fährt in",
                "San Francisco(USA).",
                "Lisabon (Portugal).",
                "Chur (Schweiz).",
                "b"
    )
}
if(level -1 == 72){
    ChangeQuiz("Aus welcher Höhe erfolgte der höchste Fallschirmsprung aller Zeiten?",
                "aus über 40 km über der Erde",
                "mehr 35 km über der Erde",
                "aus 26 km Höhe über der Erde",
                "a"
    )
}
if(level -1 == 73){
    ChangeQuiz("Wie hoch war die höchste Welle, die ein Surfer bisher bezwungen hat?",
                "ca. 26 Meter",
                "ca. 18 Meter",
                "ca. 12 Meter",
                "a"
    )
}
if(level -1 == 74){
    ChangeQuiz("Aus welcher Meerestiefe ist der Mensch bisher vorgedrungen?",
                "mehr als 5 000 Meter tief",
                "mehr als 8 500 Meter tief",
                "mehr als 10 000 Meter tief",
                "c"
    )
}
if(level -1 == 75){
    ChangeQuiz("Wie lang kann der Weltmeister im Apnoetaucher die Luft anhalten",
                "über 11 Minuten",
                "über 9 Minuten",
                "über 8 Minuten",
                "a"
    )
}
if(level -1 == 76){
    ChangeQuiz("Wie viel Druck herrscht am tiefsten Punkt der Erde, in 11.022 Metern unter dem Meeresspiegel",
                "über 450 kg pro Quadratzentimeter",
                "über 850 kg pro Quadratzentimeter",
                "über 1 Tonne pro Quadratzentimeter",
                "c"
    )
}
if(level -1 == 77){
    ChangeQuiz("Wo verläuft die längste Straße der Welt?",
                "quer durch Russland",
                "über den amerikanischen Kontinent",
                "von West nach Ost durch China",
                "b"
    )
}
if(level -1 == 78){
    ChangeQuiz("Wie weit war die längste Reise, die je ein Mensch gemacht hat?",
                "etwa 80 000 km weit, so wie zweimal um die Erde",
                "etwa 380 000 km weit",
                "etwa 760 000 km weit",
                "c"
    )
}
if(level -1 == 79){
    ChangeQuiz("Wo gibt es die meisten Geysire der Welt?",
                "in Island",
                "im Yellowstone-Nationalpark in den USA",
                "in Indonesien",
                "b"
    )
}
if(level -1 == 80){
    ChangeQuiz("Amazonien, das größte Regenwaldgebiet der Erde, bedeckt",
                "40 % der Fläche Südamerikas.",
                "20 % der Fläche Südamerikas.",
                "10 % der Fläche Südamerikas.",
                "a"
    )
}
if(level -1 == 81){
    ChangeQuiz("Die giftigste Pflanze Deutschland ist",
                "der Löwenzahn.",
                "der Blaue Eisenhut.",
                "der Fliegenpilz.",
                "b"
    )
}
if(level -1 == 82){
    ChangeQuiz("Die Regenwaldpflanze Titanwurz hat",
                "die größte Blüte.",
                "den übelsten Geruch.",
                "die schönste Farben.",
                "a"
    )
}
if(level -1 == 83){
    ChangeQuiz("Der älteste Baum der Erde ist",
                "2 200 Jahre alt.",
                "4 500 Jahre alt.",
                "9 550 Jahre alt.",
                "c"
    )
}
if(level -1 == 84){
    ChangeQuiz("Wie alt ist das älteste Wurzelwerk eines Baumes",
                "6 000 Jahre",
                "10 500 Jahre",
                "12 650 Jahre",
                "b"
    )
}
if(level -1 == 85){
    ChangeQuiz("der größte Pilz ist so groß wie",
                "1 200 Fußballfelder",
                "650 Fußballfelder",
                "380 Fußballfelder",
                "a"
    )
}
if(level -1 == 86){
    ChangeQuiz("Wie schwer wird die größte Baumfrucht der Welt, die Jackfrucht",
                "12 kg",
                "37 kg",
                "50 kg",
                "c"
    )
}
if(level -1 == 87){
    ChangeQuiz("Der größte Samen der welt wiegt",
                "25 kg.",
                "3 kg.",
                "600 g.",
                "a"
    )
}
if(level -1 == 88){
    ChangeQuiz("Der höchste Baum ist",
                "über 60 Meter hoch, wie ein Hochhaus mit 20 Etagen.",
                "über 115 Meter hoch, wie ein Hochhaus mit 35 Etagen.",
                "über 180 Meter hoch, wie ein Hochhaus mit 47 Etagen",
                "b"
    )
}
if(level -1 == 89){
    ChangeQuiz("Das größte Blatt einer Seerose",
                "hat über 3 Meter Durchmesser.",
                "hat 2,50 Meter Durchmesser.",
                "hat über 2 Meter Durchmesser.",
                "a"
    )
}
if(level -1 == 90){
    ChangeQuiz("Die am schnellsten wachsende Pflanze ist",
                "die Zypresse.",
                "der Bambus.",
                "eine Alge.",
                "b"
    )
}
if(level -1 == 91){
    ChangeQuiz("Am trockensten Ort der Welt regnet es im Durchschnitt",
                "0,5 Liter pro Quadratmeter im Monat",
                "0,5 Liter pro Quadratmeter im Jahr",
                "0,5 Liter pro Quadratmeter im Jahrzehnt",
                "b"
    )
}
if(level -1 == 92){
    ChangeQuiz("Den meisten Schneefall der welt gibt es in",
                "der Schweiz.",
                "Österreich.",
                "Japan.",
                "c"
    )
}
if(level -1 == 93){
    ChangeQuiz("Die höchste Freiluft-Aussichtsplattform der Welt befindet sich in",
                "über 380 Metern Höhe.",
                "über 590 Metern Höhe.",
                "über 800 Metern Höhe.",
                "c"
    )
}
if(level -1 == 94){
    ChangeQuiz("Das schmalste Haus der Welt ist nur",
                "3 Meter breit.",
                "2 Meter breit.",
                "1 Meter breit.",
                "c"
    )
}
if(level -1 == 95){
    ChangeQuiz("Das größte Karussell der Welt dreht sich in",
                "90 Metern Höhe.",
                "110 Metern Höhe.",
                "180 Metern Höhe.",
                "b"
    )
}
if(level -1 == 96){
    ChangeQuiz("Die kleinste Zirkustiere der welt sind",
                "Kaninchen.",
                "Flöhe.",
                "Mäuse.",
                "b"
    )
}
if(level -1 == 97){
    ChangeQuiz("Die meisten Hochhäuser Deutschlands stehen in",
                "Berlin.",
                "Frankfurt am Main.",
                "Köln.",
                "b"
    )
}
if(level -1 == 98){
    ChangeQuiz("Die Chinesische Mauer, das größte von Menschen erschaffene Bauwerk, ist",
                "2 197 km lang.",
                "12 832 km lang",
                "21 196 km lang",
                "c"
    )
}
if(level -1 == 99){
    ChangeQuiz("Der schnellste Zug der Welt fährt in",
                "Japan.",
                "China.",
                "Frankreich.",
                "b"
    )
}
if(level-1 == 100){
    ChangeQuiz("Das größte Riesenrad der welt dreht sich in",
                "Las Vegas, USA.",
                "Dubai, Vereinigte Arabische Emirate.",
                "London, Vereinigte Königreich.",
                "b"
    )
}
if(level-1 == 101){
    ChangeQuiz("Die schnellste Achterbahn der Welt beschleunigt auf atemberaubende",
                "240 km h",
                "210 km h",
                "190 km h",
                "a"
    )
}
if(level-1 == 102){
    ChangeQuiz("Der längste Eisenbahntunnel der Welt steht in",
                "der Eurotunnel zwischen England und Frankreich.",
                "der Gotthard-Basistunnel in der Schweiz.",
                "der Guadarrama-Tunnel in Spanien.",
                "b"
    )
}
if(level-1 == 103){
    ChangeQuiz("Die längste Brücke der welt steht in",
                "Brasilien.",
                "den USA.",
                "China.",
                "c"
    )
}
if(level-1 == 104){
    ChangeQuiz("Der Airbus A380, befördert bis zu",
                "570 Passagiere.",
                "790 Passagiere.",
                "853 Passagiere.",
                "c"
    )
}
if(level-1 == 105){
    ChangeQuiz("Das härteste natürliche Material der Welt ist",
                "Marmor.",
                "Diamanten.",
                "Stahl.",
                "b"
    )
}
if(level-1 == 106){
    ChangeQuiz("Die tiefste Bohrung auf der Erde ging",
                "10 km in die Tiefe.",
                "12 km in die Tiefe.",
                "20 km in die Tiefe.",
                "b"
    )
}
if(level-1 == 107){
    ChangeQuiz("Der tiefste Tunnel der Welt liegt",
                "242 Meter unter dem Meeresspiegel.",
                "272 Meter unter dem Meeresspiegel.",
                "191 Meter unter dem Meerespiegel.",
                "c"
    )
}
if(level-1 == 108){
    ChangeQuiz("Das längste Wohnhaus der Welt ist",
                "einen halben km lang.",
                "einen dreiviertel km lang.",
                "ein km lang.",
                "c"
    )
}
if(level-1 == 109){
    ChangeQuiz("Den höchsten Kirchturm der Welt hat",
                "das Ulmer Münster.",
                "die Kathedrale von Rouen in Frankreich.",
                "der Kölner Dom.",
                "a"
    )
}
if(level-1 == 110){
    ChangeQuiz("Wie viele Medien kann man in der größten Bibliothek der Welt lesen?",
                "50 Milionen",
                "110 Milionen",
                "170 Milionen",
                "c"
    )
}
if(level-1 == 111){
    ChangeQuiz("Die längsten Fertigstellung einer Baustelle in Deutschland dauerte",
                "ca. 600 Jahre.",
                "ca. 360 Jahre.",
                 "ca. 90 Jahre.",
                "a"
    )
}
if(level-1 == 112){
    ChangeQuiz("In dergrößten Kirche der Welt können sich...Menschen versammeln.",
                "ca. 20 000",
                "ca. 30 000",
                "ca. 60 000",
                "c"
    )
}
if(level-1 == 113){
    ChangeQuiz("Die erste U-Ba  hn der Welt fuhr in",
                "Moskau",
                "London",
                "Berlin",
                "b"
    )
}
if(level-1 == 114){
    ChangeQuiz("Das älsteste Musikinstrument der Welt ist",
                "eine Trommel.",
                "eine Flöte.",
                "eine Harfe.",
                "b"
    )
}
if(level-1 == 115){
    ChangeQuiz("Die meisten Saiten aller Instrumente hat",
                "die Harfe.",
                "der Flügel.",
                "die Orgel.",
                "b"
    )
}
if(level-1 == 116){
    ChangeQuiz("Die meistgesprochene Sprache der Welt ist",
                "Mandarin-Chinesisch",
                "Englisch",
                "Spanisch",
                "b"
    )
}
if(level-1 == 117){
    ChangeQuiz("Die größte Ritterburg der Welt bedeckt so viel Fläche wie",
                "10 Fußballfelder.",
                "25 Fußballfelder.",
                "100 Fußballfelder.",
                "b"
    )
}
if(level-1 == 118){
    ChangeQuiz("Der erste Zeichentrickfilm entstand",
                "um 1985.",
                "um 1940.",
                "um 1900.",
                "c"
    )
}
if(level-1 == 119){
    ChangeQuiz("Die größte Statue der Welt steht in",
                "Indien.",
                "den USA.",
                "Brasilien.",
                "a"
    )
}
}
async function QuisAuswertung(Richtig) {
    let richtig = document.querySelector(".richtig");
    level++;
    if (Richtig) {
        Punkte++
    }
    levelFeld.innerHTML = "Du bist in Frage nummer " + level + " / " + maxlevel
    punkteFeld.innerHTML = "Du hast " + Punkte + " / " + (level - 1) + " Punkte"
    richtig.style = "background: lime;";
    await sleep(1)
    richtig.style = ""
    FragenAntwortenUndCo()
    document.querySelector(".Quiz1").style = "display: none;"
    if(level-1==maxlevel){
        FertigPunkte()
    }
    document.querySelector(".Quiz2").style = "display: block;"
    Erklären()
}
