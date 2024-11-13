let display = document.getElementById("cl-display");
function cl_num(num) {
    if (display.value.length >= 15) { display.style.fontSize = "15px" } else if (display.value.length >= 10) { display.style.fontSize = "20px" }
    display.value += num;
};

function cl_operator(operator) {
    let lastChar = display.value.slice(-1);
    if (display.value.length <= 0) { display.value = " 0" + operator }
    else if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    }
    else {
        display.value += operator;
    }
};


function calculate() {
    if (display.value.length >= 15) { display.style.fontSize = "15px" } else if (display.value.length >= 10) { display.style.fontSize = "20px" }
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

function d_clear() { display.value = " " }

function d_delete() {
    display.value = display.value.slice(0, -1);
}
// text_field text counter modal

let open = document.getElementById("counter-open"); 
open.style.color = "red";

let massageField = document.querySelector('.Counting');

let openStatus = true;

open.addEventListener("click", function () {
    openStatus = !openStatus;
    console.log(openStatus);
    if (openStatus != true) {
        open.innerText = "open character counter";
        open.style.color = "#fff";
        massageField.style.display = "none"

    }
    else if (openStatus = true) {
        open.innerText = "close character counter";
        open.style.color = "red";
        massageField.style.display = "block";


    }


})


let field = document.getElementById("text_field");
let total = document.getElementById("total");
let limit = document.getElementById("limit");
limit.value = 20;
let remaining = document.getElementById("remaining");



field.addEventListener("input", function () {
    field.value = field.value.substring(0, limit.value)

    remaining.innerText = limit.value - field.value.length;
    total.innerText = field.value.length
})