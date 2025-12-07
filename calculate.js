let display = document.getElementById("display");

function appendToDisplay(value) {

    if (value === "+/-") {
        if (display.value.startsWith("-")) {
            display.value = display.value.substring(1);
        } else {
            display.value = "-" + display.value;
        }
        return;
    }

     if (value === "()") {
        display.value += "()";
        return;
    }

    display.value += value;

}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Invalid format";
    }
}
