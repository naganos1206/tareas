//ejemplo6
function impid2(id2: number|string){

    if (typeof id2 === "string"){

        console.log(`El id2 es ${(id2 as string).toUpperCase()}`);

    } else {

        console.log(`El id2 es ${(id2 as number).toFixed(2)}`);

    }

}

impid2('Este_es_mi_id');
impid2(1206.100);

//ejemplo7
function saludar3(nombre: string){
    console.log(`Hola ${nombre}`);
}

saludar3("PitoP");

//ejemplo8
function elevarAlCuadrado(base: number): number{

    return base * base;

}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//ejemplo9
const nombres = ["Pito", "Anaya", "Peña"];

nombres.forEach(function (s) {

    console.log(s.toUpperCase());

});

nombres.forEach((s) => {

    console.log(s.toUpperCase());

});

//ejemplo10
type Punto = {

    x: number;
    y: number;

}

function imprimirCoordenada(punto : Punto) {

    console.log(`la corrdenada x es: ${punto.x}`);
    console.log(`la coordenada y es: ${punto.y}`);

}

imprimirCoordenada({x:12, y:21});

//ejemplo11
function imprimirEtiqueta(etiqueta: {label: string}){

    console.log(etiqueta.label);

}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

//ejemplo12
interface Etiqueta{

    label: string;

}

function imprimirEti(eti: Etiqueta){

    console.log(eti.label);

};

let miEti = {numero: 10, label:"esta es mi segunda etiqueta"};

imprimirEti(miEti);