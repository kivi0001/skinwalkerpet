const css = document.querySelector("#lightmode");
console.log(css.href);

const darkBtn = document.querySelector("#darkBtn");
darkBtn.addEventListener("click", changeMode1);
function changeMode1() {
    if (css.href.includes("dark")) {
        css.href = "css/custom.css";
        darkBtn.textContent = "Dark mode";
    } else {
        css.href = "css/dark.css";
        darkBtn.textContent = "Light mode";
    }
}