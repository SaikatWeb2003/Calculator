function appendValue(value) {
    let display = document.getElementById("display");
    if (display.value === "0" && value !== ',') {
        display.value = value;
    } else {
        display.value += value;
    }
}
function clearDisplay() {
    document.getElementById("display").value = "0";
}
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value.replace(',', '.'));
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}