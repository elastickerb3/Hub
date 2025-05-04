function FertigPunkte(){
    let feld = document.querySelector(".Punkte");
    feld.innerHTML = "Du bist jetzt fertig was willst du machen?(Du hast " + punkte + " fragen von " + maxlevel + " richtig beantwortet)";
}
function Hub(){
    level = 1;
    Punkte = 0;
    document.querySelector("#Quiz").style = "display:none;";
    document.querySelector("#Start").style = "display:block;";
}
function Nochmal(){
    level = 1;
    Punkte = 0;
    document.querySelector("#Quiz3").style = "display:none;";
    document.querySelector("#Quiz1").style = "display:block;";
}