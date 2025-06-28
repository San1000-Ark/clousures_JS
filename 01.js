/**
Ejercicio 1: Contador personalizado 
Crea una función crearContador que retorne una función que aumenta un contador 
interno cada vez que se llama. 
 */

function count(){
    let count=0;
    return function(){
        return count++;
    }
}

let clousure = count();


console.log(clousure());
console.log(clousure());
console.log(clousure());
