//ejemplo6
function impid2(id2) {
    if (typeof id2 === "string") {
        console.log("El id2 es " + id2.toUpperCase());
    }
    else {
        console.log("El id2 es " + id2.toFixed(2));
    }
}
impid2('Este_es_mi_id');
impid2(1206.100);
//ejemplo7
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("PitoP");
//ejemplo8
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//ejemplo9
var nombres = ["Pito", "Anaya", "Peña"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("la corrdenada x es: " + punto.x);
    console.log("la coordenada y es: " + punto.y);
}
imprimirCoordenada({ x: 12, y: 21 });
//ejemplo11
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEti(eti) {
    console.log(eti.label);
}
;
var miEti = { numero: 10, label: "esta es mi segunda etiqueta" };
imprimirEti(miEti);
