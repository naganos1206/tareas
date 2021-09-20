//ejemplo 39
class Base{
    static saludar() {
        console.log("Hola Mundo Salud2")
    }
}

class Derivada extends Base {}

Derivada.saludar();

//ejemplo 40
class Video {
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"
    ){}
}

const miVideo: Video = new Video ("Vacaciones ", 60, "mp4");

console.log(`Mi Video de: ${miVideo.nombre}`);
console.log(`Tiene una duracion de: ${miVideo.duracion}`);
console.log(`Y el formato es: ${miVideo.formato}`);

//ejemplo 41
const miclase = class<T>{
    contenido: T;
    constructor(v: T){
        this.contenido = v;
    }

};

const miInstancia = new miclase("Un video de 12 minutos");

console.log(`El contenido del video es: ${miInstancia.contenido}`);