import PalabraOculta from "./adivinaPalabra.js";
window.addEventListener("load", init);

const palabra = new PalabraOculta();
const palabraInput = document.getElementById("palabra");
const letrasInversas = document.getElementById("letras");
const resultadoFinal = document.getElementById("resultado");
const porcentajeAciertos = document.getElementById("porcentaje");
const botonNuevaPalabra = document.getElementById("nueva");
const botonSolucion = document.getElementById("solucion");
const botonFinalizar = document.getElementById("finalizar");

palabra.addCaracteres();
palabra.revolverLetras();
 letrasInversas.value = palabra.PalabraInversa;

function generarNuevaPalabra(evento) {
   
    var elemento = evento.target;
    limpiarInput(palabraInput);
    limpiarInput(letrasInversas);
    prepararPalabra();
    letrasInversas.value = palabra.PalabraInversa;
    botonSolucion.disabled = false;
    elemento.disabled = true;
    resultadoFinal.innerHTML = "";

}

function limpiarInput(evento){
    evento.value = "";
}

function prepararPalabra(){

    palabra.generarNuevaPalabra();

    palabra.addCaracteres();

    palabra.revolverLetras();

}

function palabraMayus(evento) {
    var elemento = evento.target;
    elemento.value = elemento.value.toUpperCase();
}


function palabraAction(evento){
    palabraMayus(evento);
    comprobarPalabra(evento);

} 

function comprobarPalabra(evento) {
        var intentos = 0;
        if (adivinada(evento.target.value, palabra.Palabra) == true) {
            botonNuevaPalabra.disabled= false;
            resultadoFinal.innerHTML = "Enhorabuena, has acertado la palabra"
        }
}


function finalizarPartida() {
    botonNuevaPalabra.disabled =true;
    botonSolucion.disabled = true;
    botonFinalizar.disabled = true;
    resultadoFinal.innerHTML = "El porcentaje de aciertos es"
}

function mostrarSolucion(){
    botonNuevaPalabra.disabled =false;
    botonSolucion.disabled = true;
    resultadoFinal.innerHTML = "La solución es " + palabra.Palabra;
}

function adivinada(palabra, palabraOculta) {
    if (palabra === palabraOculta) {
        return true;
    }
    return false;
}

function init() {
    document.getElementById("palabra").addEventListener("blur", palabraAction, false);
    document.getElementById("nueva").addEventListener("click", generarNuevaPalabra, false);
    document.getElementById("finalizar").addEventListener("click", finalizarPartida, false);
    document.getElementById("solucion").addEventListener("click", mostrarSolucion, false);


}
