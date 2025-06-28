/**
 * Ejercicio 5: Filtro por rango 
Crea una función crearFiltro(min, max) que retorne una función que determine si un 
número está dentro del rango. 
 */

function filter(min,max){
    return function(number){
        if (number >= min && number <= max){
            console.log('The number in range');
        }else{
            console.log('The number is not in range');
        }
        return number;
    }
}

let clousure=filter(1,10)(10);
console.log(clousure);
