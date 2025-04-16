// newscard dialog 1 //
const openBtn1 = document.querySelector("#openBtn1");
const closeBtn1 = document.querySelector("#closeBtn1");
const dialog1 = document.querySelector("#dialog1");

openBtn1.addEventListener("click", openDialog1);
closeBtn1.addEventListener("click", closeDialog1);

function openDialog1(){
    document.querySelector ("#dialog1").showModal();
}
function closeDialog1(){
    document.querySelector("#dialog1").close();
}

// newscard dialog 2 //

const openBtn2 = document.querySelector("#openBtn2");
const closeBtn2 = document.querySelector("#closeBtn2");
const dialog2 = document.querySelector("#dialog2");

openBtn2.addEventListener("click", openDialog2);
closeBtn2.addEventListener("click", closeDialog2);

function openDialog2(){
    document.querySelector ("#dialog2").showModal();
}
function closeDialog2(){
    document.querySelector("#dialog2").close();
}

// newscard dialog 3 //

const openBtn3 = document.querySelector("#openBtn3");
const closeBtn3 = document.querySelector("#closeBtn3");
const dialog3 = document.querySelector("#dialog3");

openBtn3.addEventListener("click", openDialog3);
closeBtn3.addEventListener("click", closeDialog3);

function openDialog3(){
    document.querySelector("img").scrollIntoView();
    document.querySelector ("#dialog3").showModal();
}
function closeDialog3(){
    document.querySelector("#dialog3").close();
}