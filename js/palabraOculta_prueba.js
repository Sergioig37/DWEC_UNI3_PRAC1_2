import PalabraOculta from "./adivinaPalabra.js";
function probarJuego(){
    var palabra = new PalabraOculta();
    return palabra;
}

function jugar(){
    var intentos = 3;
    var palabraOculta = probarJuego();
    palabraOculta.addCaracteres();
    palabraOculta.revolverLetras();
    do{
      var prueba = prompt("Adivina la palabra, estas son las letras " + palabraOculta.PalabraInversa)  ;
      intentos-=1;
    }
    while(adivinada(prueba, palabraOculta)==false&&intentos!==0);   
    console.log("Enhorabuena, has ganado");
}

function adivinada(palabra, palabraOculta){
    if(palabra===palabraOculta.Palabra){
        return true;
    }
    console.log("Vuelve a intentarlo")
    return false;
}

jugar();