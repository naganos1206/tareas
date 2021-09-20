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
//ejemplo 39
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.saludar = function () {
        console.log("Hola Mundo Salud2");
    };
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada;
}(Base));
Derivada.saludar();
//ejemplo 40
var Video = /** @class */ (function () {
    function Video(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video;
}());
var miVideo = new Video("Vacaciones ", 60, "mp4");
console.log("Mi Video de: " + miVideo.nombre);
console.log("Tiene una duracion de: " + miVideo.duracion);
console.log("Y el formato es: " + miVideo.formato);
//ejemplo 41
var miclase = /** @class */ (function () {
    function class_1(v) {
        this.contenido = v;
    }
    return class_1;
}());
var miInstancia = new miclase("Un video de 12 minutos");
console.log("El contenido del video es: " + miInstancia.contenido);
