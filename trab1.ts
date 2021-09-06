function saludar(nombre){

    return "Hola, " + nombre;

}

console.log(saludar("Pito Perez"));

//ejemplo2
let futbolista: [string, number];

futbolista = ['Pïto Perez',20]

console.log(`El nombre es ${futbolista[0]}`)
console.log(`Su edad es ${futbolista[1]}`)

//ejemplo3
enum MarcasDeAuto{
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAuto = MarcasDeAuto.Toyota;

console.log(tacoma);

//ejemplo4
function saludar2(): void{

    console.log("Hola chaval")

}
saludar2();

//ejemplo5
function imprimirId(id: number | string){
    console.log(`El id es ${id}`);
}
imprimirId(12);
imprimirId('pito perez')