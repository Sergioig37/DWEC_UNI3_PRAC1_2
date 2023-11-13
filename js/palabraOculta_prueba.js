import PalabraOculta from "./adivinaPalabra";
const palabrasPosibles = ["Avión", "Mando", "Cabeza", "Teclado", "Barco"];
function probarJuego(){
    var palabra = new PalabraOculta();
    return palabra;
}

function jugar(){
    var palabraOculta = probarJuego();
    palabraOculta.addCaracteres();
    palabraOculta.revolverLetras();
    do{
      var prueba = prompt("Adivina la palabra, estas son las letras" + palabraOculta.PalabraInversa)  ;
    }
    while(adivinada(prueba, palabraInversa)==false);   
    console.log("Enhorabuena, has ganado");
}

function adivinada(palabra, palabraOculta){
    if(palabra===palabraOculta.Palabra){
        return true;
    }
    return false;
}

jugar();