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

// SVG site, hover artikler //

document.querySelector("#curlers").addEventListener("click", curlerInfo);
function curlerInfo (){
    console.log ("curlerInfo");
    document.querySelector(".info-text > h2").textContent = "CURLERE";
    document.querySelector(".info-text > article > p").textContent = "Har din hund på uforklarlig vis curlere i håret, når du står op om morgenen? Så er der en sandsynlighed for, at din hund i virkeligheden er din afdøde mormor.";
    document.querySelector("#andreTegn").innerHTML = "<h3>ANDRE TEGN</h3><p><ul><li>Bruger briller el. høreapparater</li><li>Din hund holder øje med naboerne gennem persiennerne</li><li>Vil kun høre dansk top</li></ul></p>";
    document.querySelector("#andreSituationer").innerHTML = "<h3>ANDRE SITUATIONER</h3><p>Mange oplever lignende oplevelser med andre typer af kæledyr el. husdyr, og med besættelser af andre afdøde end bedstemødre. Gå til siden <strong>indhent tilbud</strong>, for at få et tilbud fra en clairvoyant med speciale i dyr, som kan hjælpe dig med at afdække hvorvidt dit kæledyr er besat af en afdød.</p>";
}

document.querySelector("#table").addEventListener("click", tableInfo);
function tableInfo (){
    console.log ("tableInfo");
    document.querySelector(".info-text > h2").textContent = "KAFFE";
    document.querySelector(".info-text > article > p").textContent = "Vil din hund allerhelst bare drikke 8 kopper kaffe, og spise kalkpiller og omega 3? Så skal du måske overveje muligheden for, at din hund i virkeligheden er din afdøde mormor.";
    document.querySelector("#andreTegn").innerHTML = "<h3>ANDRE TEGN</h3><p><ul><li>Læser BilledBladet</li><li>Spiller Yatzy</li><li>Forsøger ubønhørligt at få dig med på en tur i campingvogn</li></ul></p>";
    document.querySelector("#andreSituationer").innerHTML = "<h3>ANDRE SITUATIONER</h3><p>Mange oplever lignende oplevelser med andre typer af kæledyr el. husdyr, og med besættelser af andre afdøde end bedstemødre. Gå til siden <strong>indhent tilbud</strong>, for at få et tilbud fra en clairvoyant med speciale i dyr, som kan hjælpe dig med at afdække hvorvidt dit kæledyr er besat af en afdød.</p>";
}

document.querySelector("#bowl").addEventListener("click", bowlInfo);
function bowlInfo(){
    console.log ("bowlInfo");
    document.querySelector(".info-text > h2").textContent = "MAD-PUSHER";
    document.querySelector(".info-text > article > p").textContent = "Bliver din hund ved med at skubbe madskålen tilbage til dig med et bebrejdende blik, så du føler dig skamfuldt presset til at spise mere mad, uanset hvor mæt du er? Måske er din hund faktisk din afdøde mormor.";
    document.querySelector("#andreTegn").innerHTML = "<h3>ANDRE TEGN</h3><p><ul><li>Fnyser når du afviser maden</li><li>Sniger en pengeseddel i hånden på dig, når I leger giv pote</li><li>Ser bebrejdende og dømmende på din mor, hver gang hun kommer på besøg</li></ul></p>";
    document.querySelector("#andreSituationer").innerHTML = "<h3>ANDRE SITUATIONER</h3><p>Mange oplever lignende oplevelser med andre typer af kæledyr el. husdyr, og med besættelser af andre afdøde end bedstemødre. Gå til siden <strong>indhent tilbud</strong>, for at få et tilbud fra en clairvoyant med speciale i dyr, som kan hjælpe dig med at afdække hvorvidt dit kæledyr er besat af en afdød.</p>";
}