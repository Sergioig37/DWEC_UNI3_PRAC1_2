//importamos la clase PalabraOculta
import PalabraOculta from "./adivinaPalabra.js";
//y añadimos los eventos al cargar la página
window.addEventListener("load", init);

//creamos constantes para todo lo que vamos a necesitar
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
//como ya se generó una palabra al crear la constante palabra 
//tenemos que añadir los caracteres al array de caracteres
palabra.addCaracteres();
//revolvemos la palabra
palabra.revolverLetras();
//y la metemos en el campo de la palabra a adivinar
letrasInversas.value = palabra.PalabraInversa;

//esta función genera una nueva palabra
function generarNuevaPalabra() {
    //primero cambiamos la dificultad
    //la cual recibimos de la función verDificultad
    //está parseada a int por dos mótivos
    //1: como la dificultad no la mete el usuario sabemos que no va a poder haber
    //nada que no sea 4, 6 u 8
    //2: partiendo del primer mótivo sabemos con total seguridad que lo que nos llega se puede convertir a entero
    //y así no explota el programa
    palabra.cambiarDificultad(parseInt(verDificultad()));
    //limpiamos los campos que ya han sido usados
    limpiarInput(palabraInput);
    limpiarInput(letrasInversas);
    //preaparamos la nueva palabra
    prepararPalabra();
    //escondemos los campos de texto que haga falta
    hacerInvisible(solucionPalabra);
    hacerInvisible(aciertoPalabra)
    //metemos la nueva palabra
    letrasInversas.value = palabra.PalabraInversa;
    //deshabilitamos los botones
    botonSolucion.disabled = false;
    botonNuevaPalabra.disabled = true;
    //y limpiamos el campo de resultado final
    resultadoFinal.innerHTML = "";

}
//esto borra lo que haya en el campo en ese momento
function limpiarInput(evento) {
    evento.value = "";
}
//esto contiene los metodos necesarios para crear una nueva palabra
function prepararPalabra() {
    //generamos la nueva palabra
    palabra.generarNuevaPalabra();
    //pillamos los caracteres
    palabra.addCaracteres();
    //revolvemos los caracteres y creamos la nueva palabra
    palabra.revolverLetras();

}
//esta función pone en mayúsculas el texto del campo que le pases
function palabraMayus(evento) {
    var elemento = evento.target;
    elemento.value = elemento.value.toUpperCase();
}

//esta función está asociada al campo donde metes la palabra
//para intentar adivinarla
function palabraAction(evento) {
    //ponemos la palabra a mayúsculas
    palabraMayus(evento);
    //y comprobamos si está bien
    comprobarPalabra(evento);

}
//esta fyuncón comprueba la palabra
function comprobarPalabra(evento) {

   //si la palabra es correcta
    if (adivinada(evento.target.value, palabra.Palabra) == true) {
        //habilitamos el botón de generar una nueva palabra
        botonNuevaPalabra.disabled = false;
        //mandamos un mensaje por pantalla
        aciertoPalabra.innerHTML = "Enhorabuena, has acertado la palabra"
        //sumamos un acierto
        palabra.sumarAcierto();
        //y un intento para así poder calcular después el porcentaje de intentos
        palabra.sumarIntento();
        //hacemos visible el texto
        hacerVisible(aciertoPalabra);
        //deshabilitamos el botón de ver la solución porque ya la acertaste
        botonSolucion.disabled = true;
    }
    else {
        //sino acertaste solo sumamos un intenos
        palabra.sumarIntento();
    }
}

//esto finaliza la partida
function finalizarPartida() {
    //para que no salga nada raro comprobamos si lo intentaste siquiera
    //antes de pulsar el botón de finalizar
    if (palabra.NumeroIntentos === 0) {
        //si no lo hiciste el mensaje es este
        porcentajeIntentos.innerHTML += "No se ha intentado ni una vez." +"\n"+"Recarga la página si quieres jugar otra vez";
    }
    else {
        //si lo intentaste al menos una vez podemos calcular el porcentaje de aciertos
        //esto se have dividiendo los aciertos entre los intentos y multiplicando por 100
        var porcentajeAciertos = (palabra.NumeroAciertos / palabra.NumeroIntentos) * 100;
        //metemos este texto con el porcentaje de aciertos
        porcentajeIntentos.innerHTML += " " + porcentajeAciertos + "%."+"\n"+"Recarga la página si quieres jugar otra vez" ;

    }
    //hacemos visibles o invisibles los textos que correspondan
    hacerVisible(porcentajeIntentos);
    hacerInvisible(aciertoPalabra);
    hacerInvisible(solucionPalabra);
    //deshabilitamos todos los botones porque acabó la pártida
    botonNuevaPalabra.disabled = true;
    botonSolucion.disabled = true;
    botonFinalizar.disabled = true;
    //y mostramos el texto final
    hacerInvisible(resultadoFinal);
}
//esta función muestra la solución
function mostrarSolucion() {
    //habilitamos el botón de generar nueva palabra
    botonNuevaPalabra.disabled = false;
    //deshabilitamos el de ver solución porque es el que se acaba de pulsar
    botonSolucion.disabled = true;
       //metemos el texto
    solucionPalabra.innerHTML = "La solución es " + palabra.Palabra;
    //hacemos visible el texto de la solución
    hacerVisible(solucionPalabra);
    //y sumamos un intento porque no has acertado
    palabra.sumarIntento();
}
//esta función mira si acertaste
function adivinada(palabra, palabraOculta) {
    //si acertaste devuelve true
    if (palabra === palabraOculta) {
        return true;
    }
    //sino es false
    return false;
}

//esta función hace un elemento visible
function hacerVisible(elemento) {
    elemento.style.visibility = "visible";
}
//esta función hace un elemento invisible
function hacerInvisible(elemento) {
    elemento.style.visibility = "hidden";
}
//esta función comprueba que dificultad hay
function verDificultad() {
    //creamos una variable dificultad
    var dificultad = 0;
    //una i
    var i = 0;
    // y una variable valorEncontrado que empieza en false
    var valorEncontrado = false;
    //con un while comprobamos cual es la dificultad seleccionada
    //hasta que encontremos la dificultad seleccinada ( porque siempre va a haber una seleccionada)
    //esto se hace porque cada vez que le das a generar nueva palabra
    //el programa generará una palabra según la dificultad que esté activada
    while ( valorEncontrado == false) {
        //si encontramos la opcióm seleccionada
        if (selectorDificultad[i].checked == true) {
            //obtenemos ese valor
            dificultad = selectorDificultad[i].value;
            //y decimos que lo hemos encontrado
            valorEncontrado = true;
        }
        //sino sumamos 1
        i += 1;
    }
    //devolvemos la dificultad
    return dificultad;
}

//esta función se ejecuta al cargar la página y asocia todos los eventos con los elementos html
function init() {
    document.getElementById("palabra").addEventListener("blur", palabraAction, false);
    document.getElementById("nueva").addEventListener("click", generarNuevaPalabra, false);
    document.getElementById("finalizar").addEventListener("click", finalizarPartida, false);
    document.getElementById("solucion").addEventListener("click", mostrarSolucion, false);
}
