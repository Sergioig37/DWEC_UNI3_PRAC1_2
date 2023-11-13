import PalabraOculta from "./adivinaPalabra.js";
window.addEventListener("load", init);
function generarNuevaPalabra(){

    var palabra = new PalabraOculta();
    palabra.addCaracteres();
    palabra.revolverLetras();
    document.getElementById("letras").value = palabra.PalabraInversa;

}

function palabraAmAYUS(evento){
    var elemento = evento.target;
    elemento.value = elemento.value.toUpperCase();


}

// function comprobarPalabra(evento){
//     if(evento.key == "ENTER"){
//         if(adivinada(evento.target.value == ))
//     }
// }



function adivinada(palabra, palabraOculta){
    if(palabra===palabraOculta.Palabra){
        return true;
    }
    console.log("Vuelve a intentarlo")
    return false;
}

function init(){
    generarNuevaPalabra();
    document.getElementById("palabra").addEventListener("beforeinput", palabraAmAYUS, false);
   
    document.getElementById("nueva").addEventListener("click", generarNuevaPalabra, false);

    document.getElementById("finalizar").addEventListener("click", finalizarPartida, false);
    document.getElementById("solucion").addEventListener("click", mostrarSolucion, false);
    
    
}

jugar();