
const matrizPalabras = [["LAGO", "SOLA", "TREN", "PALO", "VINO", "CAJA", "MANO", "PICO", "LEÓN", "UÑAS"],
["ESCUDO", "ABETO", "BONDAD", "BROMAS", "DIOSES", "EVITAR", "FILTRO", "PERROS", "SILLAS", "GARRAS"],
["ALEMANES", "ADAPTADO", "CABLEADO", "CALCINAR", "DECORADO", "DICTADOR", "EXCESIVO", "FABULOSO", "GABINETE", "HECHIZAR"]]

export default class PalabraOculta {
    constructor() {
        this._dificultad = 4;

        switch (this._dificultad) {
            case (4):
                this._palabra = matrizPalabras[0][Math.floor(Math.random() * 10)];;
                break;
            case (6):
                this._palabra = matrizPalabras[1][Math.floor(Math.random() * 10)];;
                break;
            case (8):
                this._palabra = matrizPalabras[2][Math.floor(Math.random() * 10)];;
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
    get Dificultad() {
        return this._dificultad;
    }
    set Dificultad(nuevaDificultad) {
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

    generarNuevaPalabra() {

        var listaPalabras = new Array();
        var nuevaPalabra;
        switch (this._dificultad) {
            case (4):
                nuevaPalabra = matrizPalabras[0][Math.floor(Math.random() * 10)];
                this._caracteresPalabra = new Array();
                if (this._palabra === nuevaPalabra) {
                    while (this._palabra === nuevaPalabra) {
                        nuevaPalabra = matrizPalabras[0][Math.floor(Math.random() * 10)];
                    }
                }
                this._palabra = nuevaPalabra;
                break;
            case (6):
                nuevaPalabra = matrizPalabras[1][Math.floor(Math.random() * 10)];
                this._caracteresPalabra = new Array();
                if (this._palabra === nuevaPalabra) {
                    while (this._palabra === nuevaPalabra) {
                        nuevaPalabra = matrizPalabras[1][Math.floor(Math.random() * 10)];
                    }
                }
                this._palabra = nuevaPalabra;
                break;
            case (8):
                nuevaPalabra = matrizPalabras[2][Math.floor(Math.random() * 10)];
                this._caracteresPalabra = new Array();
                if (this._palabra === nuevaPalabra) {
                    while (this._palabra === nuevaPalabra) {
                        nuevaPalabra = matrizPalabras[2][Math.floor(Math.random() * 10)];
                    }
                }
                this._palabra = nuevaPalabra;
                break;
        }
    }

    sumarAcierto() {
        this._numeroAciertos += 1;
    }
    sumarIntento() {
        this._numeroIntentos += 1;
    }
    cambiarDificultad(nuevaDificultad) {
        this._dificultad = nuevaDificultad;
    }
}