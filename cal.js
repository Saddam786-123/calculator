// const calculator = document.getElementById('');
const a = document.getElementById('display');
function appendToDisplay(number) {
    a.value += number
}
function clearDisplay() {
    a.value = ""
}
function calculate() {
    try {
        a.value = eval(a.value);
    } catch (error) {
        a.value = 'Error';
    }
}