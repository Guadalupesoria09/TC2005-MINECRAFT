/* Laboratorio 8, Pair programing 
Ian Julian Estrada Castro
María Guadalupe Soria Velázquez 
*/

// Promedio de arreglo de números 
function promedio (arreglo){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}
const numeros = [10, 2, 30, 15, 4, 6, 2, 9, 19]
console.log("Promedio del arreglo: ",promedio(numeros)); 