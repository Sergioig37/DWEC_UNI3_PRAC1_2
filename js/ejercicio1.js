import PalabraOculta from "./adivinaPalabra.js";
window.addEventListener("load", init);

const palabra = new PalabraOculta();
const palabraInput = document.getElementById("palabra");
const letrasInversas = document.getElementById("letras");
const solucionPalabra = document.getElementById("solucionP");
const aciertoPalabra = document.getElementById("acertado");
const porcentajeIntentos = document.getElementById("porcentaje");
const botonNuevaPalabra = document.getElementById("nueva");
const botonSolucion = document.getElementById("solucion");
const botonFinalizar = document.getElementById("finalizar");
const selectorDificultad = document.getElementsByName("dificultad");

palabra.addCaracteres();
palabra.revolverLetras();
 letrasInversas.value = palabra.PalabraInversa;

function generarNuevaPalabra() {

    palabra.cambiarDificultad(parseInt(verDificultad()));
    limpiarInput(palabraInput);
    limpiarInput(letrasInversas);
    prepararPalabra();
    hacerInvisible(solucionPalabra);
    hacerInvisible(aciertoPalabra)
    letrasInversas.value = palabra.PalabraInversa;
    botonSolucion.disabled = false;
    botonNuevaPalabra.disabled = true;
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
            aciertoPalabra.innerHTML = "Enhorabuena, has acertado la palabra"
            palabra.sumarAcierto();
            palabra.sumarIntento();
            hacerVisible(aciertoPalabra);
            botonSolucion.disabled = true;
        }
        else{
            palabra.sumarIntento();
        }
}


function finalizarPartida() {
    var porcentajeAciertos = (palabra.NumeroAciertos/palabra.NumeroIntentos) * 100;
    botonNuevaPalabra.disabled =true;
    botonSolucion.disabled = true;
    botonFinalizar.disabled = true;
    hacerVisible(porcentajeIntentos);
    hacerInvisible(aciertoPalabra);
    hacerInvisible(solucionPalabra);
    porcentajeIntentos.style.visibility = "visible";
    porcentajeIntentos.innerHTML +=  " "+ porcentajeAciertos +"%";
    hacerInvisible(resultadoFinal);
}

function mostrarSolucion(){
    botonNuevaPalabra.disabled =false;
    botonSolucion.disabled = true;
    hacerVisible(solucionPalabra);
    solucionPalabra.innerHTML = "La solución es " + palabra.Palabra;
    palabra.sumarIntento();
}

function adivinada(palabra, palabraOculta) {
    if (palabra === palabraOculta) {
        return true;
    }
    return false;
}

function hacerVisible(elemento){
    elemento.style.visibility = "visible";
}

function hacerInvisible(elemento){
    elemento.style.visibility = "hidden";
}

function verDificultad(){
    var dificultad = 0;
    var i=0;
    var valorEncontrado = false;
    while(i<selectorDificultad.length&&valorEncontrado == false){
        if(selectorDificultad[i].checked==true){
            dificultad = selectorDificultad[i].value;
            valorEncontrado=true;
        }
        i +=1;
    }
    return dificultad;
}

function init() {
    document.getElementById("palabra").addEventListener("blur", palabraAction, false);
    document.getElementById("nueva").addEventListener("click", generarNuevaPalabra, false);
    document.getElementById("finalizar").addEventListener("click", finalizarPartida, false);
    document.getElementById("solucion").addEventListener("click", mostrarSolucion, false);
}
