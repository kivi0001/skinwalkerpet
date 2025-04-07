// SUMMARY KODE //

const submit = document.querySelector("#submit_btn");
submit.addEventListener("click", submitForm);

function submitForm(){
document.querySelector("#sum-navn").textContent = document.querySelector("#fornavn").value;
}

// checkboxes //
/* document.querySelector("sum-accept").textContent = document.querySelector('input[name="risiko"]:checked').value; */

const checkboxes = document.querySelectorAll('input[name="check"]:checked');
console.log (checkboxes.value);

const myArray = [];
checkboxes.forEach(lavListe);

function lavListe(element){
    myArray.push(element.value);
}
document.querySelector("#sum-accept").textContent = myArray;

// reset button //

document.querySelector("#reset-btn").addEventListener("click", reset);

function reset (){
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.visibility = "hidden";
}