// Esta funcion agrega los numeros que se puso en el input para operarlos
function addToDisplay(value) {
    document.getElementById ("Display").value += value
}
// La funcion es para calcular las operaciones
function calculate(){
    var expression = document.getElementById("Display").value
    // La funcion eval toma la cadena de expresion y la ejecuta como si fuera js
    var result = eval(expression) 
    document.getElementById("Display").value = result;
}
// Esta funcion es para limpiar lo operado
function clearDisplay() {
    document.getElementById ("Display").value = " "
}
