let a=' hey ';

function greetGlobal(){
    return function(){
        let b=' gengar ';
        return function(){
            let c=' how are u ';
            let u = a + b + c;
            return u;
            
        }
    }
}

let clousure=greetGlobal();
let clousure2=clousure();
let result=clousure2();

console.log(result);


