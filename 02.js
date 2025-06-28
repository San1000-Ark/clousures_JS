/**
 * Ejercicio 2: Multiplicador configurable 
Crea una función crearMultiplicador(base) que retorne una función que multiplique 
cualquier número por base.
 */

function makeMultiplicator(base){
    return function(number){
        let result=number*base;
        return result
    }
}

clousure=makeMultiplicator(2)(5)
console.log(clousure);


