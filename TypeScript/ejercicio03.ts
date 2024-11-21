/*
Convertir esta función a una función de flecha
*/
 
/*
function resultadoDoble(a,b){
    return (a+b)*2
}
*/


const suma = (a: number, b: number): number => (a + b)*2;

console.log(suma(5, 3)); 
console.log(suma(10, 20)); 