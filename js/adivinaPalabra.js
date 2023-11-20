
//tenemos la matriz con las palabras
const matrizPalabras = [["LAGO", "SOLA", "TREN", "PALO", "VINO", "CAJA", "MANO", "PICO", "LEÓN", "UÑAS"],
["ESCUDO", "ABETO", "BONDAD", "BROMAS", "DIOSES", "EVITAR", "FILTRO", "PERROS", "SILLAS", "GARRAS"],
["ALEMANES", "ADAPTADO", "CABLEADO", "CALCINAR", "DECORADO", "DICTADOR", "EXCESIVO", "FABULOSO", "GABINETE", "HECHIZAR"]]

export default class PalabraOculta {
    constructor() {
        //la dificultad inicial es de 4
        this._dificultad = 4;
        //según la dificultad que haya buscaremos en una fila u otra
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
        //la palabra revuelta
        this._palabraInversa = "";
        //las letras de esa palabra
        this._caracteresPalabra = new Array();
        //número de aciertos
        this._numeroAciertos = 0;
        //número de intentos
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


    //con este método añadimos las letras de la palabra al array de caracteres
    addCaracteres() {
        for (let i = 0; i < this._palabra.length; i++) {
            this._caracteresPalabra.push(this._palabra.charAt(i));
        }
    }
    //est método revuelve las letras de manera aleatoria y 
    //las junta para crear la palabra revuelta
    revolverLetras() {
        this._palabraInversa = "";
        this._caracteresPalabra.sort(() => Math.random() - 0.5);;
        for (let i = 0; i < this._caracteresPalabra.length; i++) {
            this._palabraInversa += this._caracteresPalabra[i];
        }
    }
    // este método genera una nueva palabra
    generarNuevaPalabra() {
        //necesitaremos una nueva palabra
        var nuevaPalabra;
        switch (this._dificultad) {
            //según la dificultad la buscaremos en una fila u otra
            case (4):
                
                nuevaPalabra = matrizPalabras[0][Math.floor(Math.random() * 10)];
                //vaciaremos el array de carcteres para poder empezar de nuevo
                this._caracteresPalabra = new Array();
                // y nos aseguraremos de que la palabra no es igual que la que anterior
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
    //esto solo suma un acierto
    sumarAcierto() {
        this._numeroAciertos += 1;
    }
    //esto solo suma un intento
    sumarIntento() {
        this._numeroIntentos += 1;
    }
    //esto cambia la dificultad
    cambiarDificultad(nuevaDificultad) {
        this._dificultad = nuevaDificultad;
    }
}