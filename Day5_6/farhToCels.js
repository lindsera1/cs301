let prompt = require("prompt-sync")();

let farhToCels = function(farh){

    let cels = (farh - 32) * (5/9);

    return cels;
}

let farh = prompt("Please enter a temperature in farenheit: ");

farh = parseFloat(farh);

var cels = farhToCels(farh);

console.log("Your temperature in celsius is " + cels + " degrees celsius.");
