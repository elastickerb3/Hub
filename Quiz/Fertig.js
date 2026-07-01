function FertigPunkte(){
    document.querySelector(".Quiz1").style = "display:none;";
    document.querySelector(".Quiz2").style = "display:none;";
    document.querySelector(".Quiz3").style = "display:block;";
    let feld = document.querySelector(".Punkte");
    feld.innerHTML = "Du bist jetzt fertig was willst du machen?(Du hast " + Punkte + " fragen von " + maxlevel + " richtig beantwortet)";
}
function Hub(){
    level = 1;
    Punkte = 0;
    document.querySelector("#Quiz").style = "display:none;";
    document.querySelector(".Cheated").style = "display:none;";
    document.querySelector(".Quiz1").style = "display:block;";
    document.querySelector("#Start").style = "display:block;";
    UpdateLevelAndPoints();
}
function Nochmal(){
    level = 1;
    Punkte = 0;
    document.querySelector(".Quiz3").style = "display:none;";
    document.querySelector(".Cheated").style = "display:none;";
    document.querySelector(".Quiz1").style = "display:block;";
    FragenAntwortenUndCo()
    UpdateLevelAndPoints()
}