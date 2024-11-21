//tipo estatico
let nombre: string  = 'Mariano';
let edad: number = 30;


// interfaces
interface Persona{
    nombre: string;
    edad: number;    
}

const andrew: Persona = {nombre: "Andrew", edad: 30};


// Clases con modificadores de acceso

class Estudiante{
    constructor(nombre: string){

    }

    public saludar(){

    }
}

// funciones tipadas

function sumar(a: number, b: number): number{
    return a + b;
}


