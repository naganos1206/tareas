//ejemplo13
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function constuirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = constuirTransporte(Caballo, "Paso Fino");
var miAutomovil = constuirTransporte(Automovil, "Toyota");
console.log("Mi Caballo se llama" + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
//ejemplo14
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function longitud(x) {
    return x.length;
}
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
