// SVG KODE //

document.querySelector("#bowl").addEventListener("mouseover", newColorBowl);
document.querySelector("#bowl").addEventListener("mouseout", normalizeBowl);

function newColorBowl (){
    console.log ("newColorBowl");
    document.querySelector(".bowlcolor").style.fill = "#DBB2FF";
    document.querySelector(".bowlshine").style.fill = "#FFD0F1";
    document.querySelector(".food").style.fill = "#723E00";
}

function normalizeBowl(){
    console.log ("normalizeBowl");
    document.querySelector(".bowlcolor").style.fill = "#B8005F";
    document.querySelector(".bowlshine").style.fill = "#FF7CAE";
    document.querySelector(".food").style.fill = "#491B02";
}


document.querySelector("#table").addEventListener("mouseover", newColorTable);
document.querySelector("#table").addEventListener("mouseout", normalizeTable);

function newColorTable(){
    console.log ("newColorTable");
    document.querySelector(".tableTop").style.fill = "#A0D9ED";
    document.querySelector(".tableEdge").style.fill = "#3286FF";
    document.querySelector(".leg").style.fill = "#91AAFF";
    document.querySelector(".leg2").style.fill = "#91AAFF";
    document.querySelector(".leg3").style.fill = "#91AAFF";
    document.querySelector(".leg4").style.fill = "#91AAFF";
    document.querySelector(".plate").style.fill = "#FFDD00";
    document.querySelector(".cup").style.fill = "#FFC3E5";
}

function normalizeTable(){
    console.log ("normalizeTable");
    document.querySelector(".tableTop").style.fill = "#74C4ED";
    document.querySelector(".tableEdge").style.fill = "#292D95";
    document.querySelector(".leg").style.fill = "#0072BF";
    document.querySelector(".leg2").style.fill = "#0072BF";
    document.querySelector(".leg3").style.fill = "#0072BF";
    document.querySelector(".leg4").style.fill = "#0072BF";
    document.querySelector(".plate").style.fill = "#FF9300";
    document.querySelector(".cup").style.fill = "#E02229";
}



document.querySelector("#curlers").addEventListener("mouseover", newCurlerColor);
document.querySelector("#curlers").addEventListener("mouseout", normalizeCurlerColor);


function newCurlerColor (){
    console.log ("newCurlerColor");
    document.querySelector(".curler1").style.fill = "#99DAFF";
    document.querySelector(".curler2").style.fill = "#99DAFF";
    document.querySelector(".curler3").style.fill = "#99DAFF";
    document.querySelector(".curler4").style.fill = "#99DAFF";
    document.querySelector(".curler5").style.fill = "#99DAFF";
    document.querySelector(".curler6").style.fill = "#99DAFF";
    document.querySelector(".curler7").style.fill = "#99DAFF";
    document.querySelector(".curler8").style.fill = "#99DAFF";
    document.querySelector(".curler9").style.fill = "#99DAFF";
    document.querySelector(".curler10").style.fill = "#99DAFF";
}

function normalizeCurlerColor(){
    console.log ("normalizeCurler");
    document.querySelector(".curler1").style.fill = "#FF7CAE";
    document.querySelector(".curler2").style.fill = "#FF7CAE";
    document.querySelector(".curler3").style.fill = "#FF7CAE";
    document.querySelector(".curler4").style.fill = "#FF7CAE";
    document.querySelector(".curler5").style.fill = "#FF7CAE";
    document.querySelector(".curler6").style.fill = "#FF7CAE";
    document.querySelector(".curler7").style.fill = "#FF7CAE";
    document.querySelector(".curler8").style.fill = "#FF7CAE";
    document.querySelector(".curler9").style.fill = "#FF7CAE";
    document.querySelector(".curler10").style.fill = "#FF7CAE";
}
