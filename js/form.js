// SUMMARY KODE //
document.querySelector("#webform").reset();

document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

function submitForm(){
    document.querySelector("#sum").style.display = "block";
document.querySelector("#sum-navn").textContent = document.querySelector("#fornavn").value;
document.querySelector("#sum-efternavn").textContent = document.querySelector("#efternavn").value;
document.querySelector("#sum-telefon").textContent = document.querySelector("#tlf").value;
document.querySelector("#sum-email").textContent = document.querySelector("#email").value;
document.querySelector("#sum-persondate").textContent = document.querySelector("#persondate").value;
document.querySelector("#sum-petdate").textContent = document.querySelector("#petdate").value;
document.querySelector("#sum-beskriv").textContent = document.querySelector("#beskriv").value;
document.querySelector("#sum-type").textContent = document.querySelector("#pettype").value;
document.querySelector("#sum-accept").textContent = document.querySelector("#risiko").value;
document.querySelector("#sum-ouija").textContent = document.querySelector("#ouija").value;


// checkboxes //
/* document.querySelector("sum-accept").textContent = document.querySelector('input[name="risiko"]:checked').value; */

/* const checkboxes = document.querySelectorAll('input[name="check"]:checked');
console.log (checkboxes);

const myArray = [];

checkboxes.forEach(lavListe);

function lavListe(element){
    myArray.push(element.value);
}
document.querySelector("#sum-accept").textContent = myArray.join (","); */
}

// reset button //

document.querySelector("#reset-btn").addEventListener("click", reset);

function reset (){
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
}