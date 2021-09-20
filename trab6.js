var miCachorro = { raza: "chihuahua" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var x = {
    contenido: "Hola Mundo"
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase());
//ejemplo 26
onst;
imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "Levantarse",
    "ir al baño",
    "desayunar",
];
imprimirTareas(misTareas);
var prius = ['Toyota', 2020];
var civic = ['Honda', 2021];
console.log('El Prius es marca: ', prius[0], 'y modelo', prius[1]);
console.log('El Civic es marca: ', civic[0], 'y modelos', civic[1]);
