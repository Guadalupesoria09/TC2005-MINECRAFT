/* Laboratorio 8, Pair programing 
Ian Julian Estrada Castro
María Guadalupe Soria Velázquez 
*/

//Modulo 
const filesystem = require('fs');
const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout
})

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

// String en txt
const escribir = ()=>{
    readline.question('Escribe algo: ', palabra => {
        console.log(palabra);
        filesystem.writeFileSync("String.txt", palabra);
        readline.close(); 
    })
}
escribir();