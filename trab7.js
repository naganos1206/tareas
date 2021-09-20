var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ejemplo 28
var cambry = ["Toyota", 2021];
var marca = cambry[0], modelo = cambry[1];
console.log("La marca del cambry: ", marca);
console.log("El modelo del cambry: ", modelo);
//ejemplo 28
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Punto;
}());
var miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);
//ejemplo 30
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproducinedo");
    };
    return Video;
}());
var miVideo = new Video("dios esta aqui");
miVideo.reproducir();
//ejemplo 31
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
