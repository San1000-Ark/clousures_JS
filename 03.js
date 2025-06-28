/**
 * Ejercicio 3: Almacenamiento privado 
Crea una función crearListaPrivada() que retorne funciones para agregar elementos a 
una lista privada y ver esa lista.
 */
/*
function makePrivateList(){
    let list=[];
    return function(item){
        list.push(item);
        console.log(list);
    }
}
*/
/*
function makePrivateList(){
    let list=[];
    return {
        agregar: (arr) => {
            arr.forEach(element => {
                list.push(element)
            });
        },
        ver: () => {
            console.log(list);
        }   
    }
}

let closure = makePrivateList()

array = [1,2,3,4]
closure.agregar(array)
closure.ver()
*/

function makePrivateList() {
    let list = [];
    return function(items) {
        if (Array.isArray(items)) {//create the var Array with method isArray
            list.push(...items); // ...add many ítems if is array
        } else {
            list.push(items); // add only one item
        }
        return list;//return list in the function
    }
}

let closure = makePrivateList(); // save the function in the clousure var

// add items
closure(2);
closure(5);
closure([10, 20]); // i can add array also

console.log(closure()); // show all items




