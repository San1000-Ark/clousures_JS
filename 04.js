/**
 * Ejercicio 4: Ejecutar solo una vez 
Crea una función que solo permita ejecutar un bloque de código una sola vez. 
 */

function oneTry(fn){
    let exe1=false;
    return function (...args){
        if (!exe1){
            exe1=true;
            return fn(...args);
        }else{
            console.log('The function has execute one try');
        }
    };
}

let clousure=oneTry(()=>{
    console.log('Executed');
});

clousure();
clousure();

