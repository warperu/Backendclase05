/*
Implemente una clase generica Cola<T> que simule el comportamiento de una estructura de datos tipo cola (FIFO).
Esta clase debe incluir las siguientes funcionalidades:

- Agregar elementos
- Quitar elementos
- Tamaño
- Ver primer elemento de la cola sin eliminar

*/
var Cola = /** @class */ (function () {
    function Cola() {
        this.elementos = [];
    }
    Cola.prototype.agregar = function (elemento) {
        this.elementos.push(elemento); // Se agrega al final de la cola
    };
    Cola.prototype.quitar = function () {
        if (this.elementos.length === 0) {
            console.log("La cola esta vacia.");
            return undefined;
        }
        return this.elementos.shift(); // Remueve el primer elemento
    };
    Cola.prototype.tamano = function () {
        return this.elementos.length;
    };
    Cola.prototype.verPrimero = function () {
        return this.elementos[0]; // Retorna el primer elemento sin removerlo
    };
    return Cola;
}());
var colaNumeros = new Cola();
colaNumeros.agregar(10);
colaNumeros.agregar(20);
colaNumeros.agregar(30);
console.log("Primer elemento:", colaNumeros.verPrimero()); // 10
console.log("Tamaño de la cola:", colaNumeros.tamano()); // 3
colaNumeros.quitar();
console.log("Primer elemento:", colaNumeros.verPrimero()); // 20
console.log("Tamaño de la cola:", colaNumeros.tamano()); // 2
