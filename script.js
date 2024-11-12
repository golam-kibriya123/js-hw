let display = document.getElementById("cl-display");
function cl_num(num) {
    if (display.value.length >= 15) { display.style.fontSize = "15px" } else if (display.value.length >= 10) { display.style.fontSize="20px" }
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
    if (display.value.length >= 15) { display.style.fontSize = "15px" } else if (display.value.length >= 10) { display.style.fontSize="20px" }
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