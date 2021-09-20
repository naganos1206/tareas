//ejemplo 24
interface Perro{
    readonly raza: string;
}

const miCachorro: Perro = {raza: "chihuahua"};

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

//ejemplo 25
interface Caja {
    contenido: unknown;
}

let x: Caja = {
    contenido: "Hola Mundo",
};

if(typeof x.contenido === "string"){
    console.log(x.contenido.toLocaleLowerCase());
}

console.log((x.contenido as string).toLocaleLowerCase());

//ejemplo 26
onst imprimirTareas = (v: Array<string>) => {
    v.forEach((v) =>{
        console.log(v);
    });
};

const misTareas: string[] = [
    "Levantarse",
    "ir al baño",
    "desayunar",
];

imprimirTareas(misTareas);

//ejemplo 27
type Auto = [string, number]

const prius : Auto = ['Toyota', 2020]
const civic : Auto = ['Honda', 2021]

console.log('El Prius es marca: ', prius[0], 'y modelo', prius[1])
console.log('El Civic es marca: ', civic[0], 'y modelos', civic[1])