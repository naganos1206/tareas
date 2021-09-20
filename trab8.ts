//ejemplo 32
class Padre {
    saludar(){
        console.log("Hola");
    }
}

class Hijo extends Padre {
    saludar(nombre?: string){
        if(!!nombre){
            console.log(`Hola ${nombre}`);
        }
        else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("pito perez");

//ejemplo 33
class Definicion{
    nombre = "definicion";
    constructor(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion {}

const d = new Implementacion();

//ejemplo 34
class Saludo{
    public saludar() {
        console.log("Saludar!");
    }
}

const inst = new Saludo();
inst.saludar();
//Ejemplo 38
class A{
    private x = 10;
    
    public imprimirX(otra: A){
        console.log(otra.x);
    }
}

const b = new A();
b.imprimirX(new A());