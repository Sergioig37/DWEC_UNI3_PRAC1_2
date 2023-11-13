const palabrasPosibles = ["Avión", "Mando", "Cabeza", "Teclado", "Barco"];
export default class PalabraOculta{
    constructor(){
        this._palabra = palabrasPosibles[Math.random()*palabrasPosibles.length];
        this._palabraInversa = "";
        this._caracteresPalabra = new Array();
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


    addCaracteres(){
        for(let i=0; i<this._palabra.length; i++){
            this._caracteresPalabra.push(this._palabra.charAt(i));
        }
    }

    revolverLetras(){
        this._caracteresPalabra.sort(() => Math.random() - 0.5);;
        for(let i=0;i<this._caracteresPalabra.length;i++){
            this._palabraInversa += this._caracteresPalabra[i];
        }
    }

    pillarNuevaPalabra(){
        this._palabra = palabrasPosibles[Math.random()*palabrasPosibles.length];
    }
}