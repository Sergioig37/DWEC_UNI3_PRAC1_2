const palabrasSeisLetras = ["ESCUDO", "ABETO", "BONDAD", "BROMAS", "DIOSES", "EVITAR", "FILTRO", "PERROS", "SILLAS", "GARRAS"];
const palabrasCuatroLetras = ["LAGO", "SOLA","TREN","PALO","VINO", "CAJA","MANO",  "PICO","LEÓN","UÑAS"];
const palabrasOchoLetras = ["ALEMANES", "ADAPTADO", "CABLEADO"," CALCINAR","DECORADO","DICTADOR","EXCESIVO","FABULOSO","GABINETE","HECHIZAR"];



export default class PalabraOculta {
    constructor() {
        this._dificultad = 4;
        switch(this._dificultad){
            case(4): 
                this._palabra = palabrasCuatroLetras;[Math.floor(Math.random() * palabrasCuatroLetras.length)];
                break;
            case(6):
               this._palabra =  palabrasSeisLetras[Math.floor(Math.random() * palabrasSeisLetras.length)];
                break;
            case(8):
               this._palabra = palabrasOchoLetras[Math.floor(Math.random() * palabrasOchoLetras.length)];
                break;
        }
        this._palabraInversa = "";
        this._caracteresPalabra = new Array();
        this._numeroAciertos = 0;
        this._numeroIntentos = 0;
    }

    get Palabra() {
        return this._palabra;
    }
    set Palabra(palabra) {
        this._palabra = palabra;
    }

    get PalabraInversa() {
        return this._palabraInversa;
    }
    set PalabraInversa(palabraInversa) {
        this._palabraInversa = palabraInversa;
    }
    get NumeroAciertos() {
        return this._numeroAciertos;
    }
    get NumeroIntentos() {
        return this._numeroIntentos;
    }
    set NumeroAciertos(numeroAciertos) {
        this._numeroAciertos = numeroAciertos;
    }
    set NumeroIntentos(numeroIntentos) {
        this._numeroIntentos = numeroIntentos;
    }
    get Dificultad(){
        return this._dificultad;
    }
    set Dificultad(nuevaDificultad){
        this._dificultad = nuevaDificultad;
    }



    addCaracteres() {
        for (let i = 0; i < this._palabra.length; i++) {
            this._caracteresPalabra.push(this._palabra.charAt(i));
        }
    }

    revolverLetras() {
        this._palabraInversa = "";
        this._caracteresPalabra.sort(() => Math.random() - 0.5);;
        for (let i = 0; i < this._caracteresPalabra.length; i++) {
            this._palabraInversa += this._caracteresPalabra[i];
        }
    }

    pillarNuevaPalabra() {
        this._palabra = palabrasPosibles[Math.random() * palabrasPosibles.length];
    }
    generarNuevaPalabra() {
        
        var listaPalabras = new Array();
        switch(this._dificultad){
            case(4): 
                listaPalabras = palabrasCuatroLetras;
                break;
            case(6):
                listaPalabras =  palabrasSeisLetras;
                break;
            case(8):
                listaPalabras = palabrasOchoLetras;
                break;
        }
        var nuevaPalabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
        this._caracteresPalabra = new Array();
        if (this._palabra === nuevaPalabra) {
            while (this._palabra === nuevaPalabra) {
                nuevaPalabra =listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
            }
        }
        this._palabra = nuevaPalabra;
    }

    sumarAcierto() {
        this._numeroAciertos += 1;
    }
    sumarIntento() {
        this._numeroIntentos += 1;
    }
    cambiarDificultad(nuevaDificultad){
        this._dificultad = nuevaDificultad;
    }
}