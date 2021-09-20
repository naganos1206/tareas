//ejemplo13

interface Transporte{
    nombre: string;
}
    class Caballo implements Transporte {
    constructor(public nombre: string){}
}
    class Automovil implements Transporte{
        constructor(public nombre: string){}
}
    type ConstructorDeTransporte = {
        new (nombre: string): Transporte;
}
    function constuirTransporte(ctr : ConstructorDeTransporte, nombre: string){
        return new ctr(nombre);
}

const miCaballo = constuirTransporte(Caballo, "Paso Fino");
const miAutomovil = constuirTransporte(Automovil, "Toyota")

console.log("Mi Caballo se llama" + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);

//ejemplo14

function miIterador(arr: any[], callback: (arg: any, index?: number) => void){
    for(let i=0; i<=arr.length; i++){
        callback(arr[i],i);
    }
}

miIterador([1,2,3], (a) => console.log(a));
miIterador([1,2,3], (a,i) => console.log(a,i));

//ejemplo15

function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number{
    return x.length;
}
console.log(longitud("Hola mundo"));
console.log(longitud([1,2,3,4,5]));