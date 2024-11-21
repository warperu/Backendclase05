/*
Implemente una clase generica Cola<T> que simule el comportamiento de una estructura de datos tipo cola (FIFO).
Esta clase debe incluir las siguientes funcionalidades:

- Agregar elementos
- Quitar elementos
- Tamaño
- Ver primer elemento de la cola sin eliminar

*/

class Cola<T> {
    private elementos: T[] = [];
    
    agregar(elemento: T): void {
        this.elementos.push(elemento); // Se agrega al final de la cola
    }

    quitar(): T | undefined {
        if(this.elementos.length === 0){
            console.log("La cola esta vacia.");
            return undefined;
        }
        return this.elementos.shift(); // Remueve el primer elemento
    }

    tamano(): number {
        return this.elementos.length;
    }

    verPrimero(): T | undefined {
        return this.elementos[0]; // Retorna el primer elemento sin removerlo
    }
}

const colaNumeros = new Cola<number>();

colaNumeros.agregar(10);
colaNumeros.agregar(20);
colaNumeros.agregar(30);

console.log("Primer elemento:", colaNumeros.verPrimero()); // 10
console.log("Tamaño de la cola:", colaNumeros.tamano()); // 3

colaNumeros.quitar();

console.log("Primer elemento:", colaNumeros.verPrimero()); // 20
console.log("Tamaño de la cola:", colaNumeros.tamano()); // 2