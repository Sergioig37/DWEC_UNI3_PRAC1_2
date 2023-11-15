const palabrasPosibles = ["COHETE", "HURACÁN", "MANDO", "TECLADO", "BARCO", "PIEZA", "SARTÉN", "BAÑO", "BOTELLA", "TENEDOR"];
export default class PalabraOculta{
    constructor(){
        this._palabra = palabrasPosibles[Math.floor(Math.random()*palabrasPosibles.length)];
        this._palabraInversa = "";
        this._caracteresPalabra = new Array();
        this._numeroAciertos = 0;
        this._numeroIntentos = 0;
    }

    get Palabra(){
        return this._palabra;
    }
    set Palabra(palabra){
        this._palabra = palabra;
    }

    get PalabraInversa(){
        return this._palabraInversa;
    }
    set PalabraInversa(palabraInversa){
        this._palabraInversa = palabraInversa;
    }
    get NumeroAciertos(){
        return this._numeroAciertos;
    }
    get NumeroIntentos(){
        return this._numeroIntentos;
    }
    set NumeroAciertos(numeroAciertos){
         this._numeroAciertos = numeroAciertos;
    }
    set NumeroIntentos(numeroIntentos){
         this._numeroIntentos = numeroIntentos;
    }



    addCaracteres(){
        for(let i=0; i<this._palabra.length; i++){
            this._caracteresPalabra.push(this._palabra.charAt(i));
        }
    }

    revolverLetras(){
        this._palabraInversa = "";
        this._caracteresPalabra.sort(() => Math.random() - 0.5);;
        for(let i=0;i<this._caracteresPalabra.length;i++){
            this._palabraInversa += this._caracteresPalabra[i];
        }
    }

    pillarNuevaPalabra(){
        this._palabra = palabrasPosibles[Math.random()*palabrasPosibles.length];
    }
    generarNuevaPalabra(){
        var nuevaPalabra = palabrasPosibles[Math.floor(Math.random()*palabrasPosibles.length)];
        this._caracteresPalabra = new Array();
        if(this._palabra===nuevaPalabra){
            while(this._palabra===nuevaPalabra){
                nuevaPalabra = palabrasPosibles[Math.floor(Math.random()*palabrasPosibles.length)];
            }
        }
        this._palabra = nuevaPalabra;
    }

    sumarAcierto(){
        this._numeroAciertos +=1;
    }
    sumarIntento(){
        this._numeroIntentos +=1;
    }
}