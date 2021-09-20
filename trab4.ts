//ejemplo16

function calcularLongitud(x: any[] | string){
    return x.length;
}

console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1,2,3,4,5]));

//Ejemplo 17
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function(){
        this.admin = true ;
    },
    
}

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

//ejemplo 18
const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () =>{
        this.admin = true;
    },
};

console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);

//ejemplo 19
function multiplicar(n: number, ...m: number[]): number{
    return m.reduce((p,c) =>{
        return p*c;
    },n);
}

console.log(multiplicar(2,2));
console.log(multiplicar(2,2,3));
console.log(multiplicar(2,2,3,4));