//ejemplo 20
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
//ejemplo 21
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Ayala", edad: 22 }));
function saludo(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludo({ nombre: "Monchito", edad: 22 }));
function imprimir(computador) {
    console.log("Sistemas Operativos: " + computador.os);
    console.log("Memorias: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 16,
    procesador: 'amd'
});
