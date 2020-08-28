let prompt = require("prompt-sync")();

//Check Primes ******************************/

function check_prime(x){

    let counter = 0;

    for(let i = 2; i <= Math.sqrt(x); i++){

        if (x%i===0){
            counter++;
        }
        if (counter > 0){
            return false;
        } 
    }
    return true;
}

let x = prompt("Please enter a number to see if it is prime: ");

x = parseInt(x);

let result = check_prime(x);

console.log(result);