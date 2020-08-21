let prompt = require("prompt-sync")();

for(let i=1;i<6;i++){
    let row = '';
    for(let j=1; j<=i; j++){
        row += i + "";
    }
    console.log(row);
}

//***************** */

row = ""
for(let i=1;i<6;i++){

    row += i

    console.log(row);
}

//****************** */

row = ''

for(let i=5;i>0;i--){
    let row = "";
    for(let j = i; j>0; j--){
        row += i + "";
    }
    console.log(row);
} 

//Sunshine

let n = prompt("Please enter a number: ");
n = parseInt(n);
let i = 0;

while (i<=n) {
    
    console.log("sunshine");

    i++;
}

//***************************** */

let phrase = prompt("Type something: ");

n = prompt("Now, enter a number: ");

n = parseInt(n);

for(i = 0; i < n; i++) {

    console.log(phrase);
}

//******************************** */

n = prompt("Please enter a number: ");

n = parseInt(n);

i = 1;

while(i<n){
    console.log(i);
    i++;
}

//************************** */

n = prompt("Please enter a number: ");

n = parseInt(n);

let output = 0;

for(i=1;i<=n;i++){
    if(i%2!==0){
        output += i;
    }
} 

console.log(output);

//************************** */

let number = 5;

for(i=1;i<13;i++){
    console.log(number + "X" + i + "=" + (number*i));
}

//*********************************** */

for(i = 0;i<=32; i++){
    console.log(2**i);
}

//**************************************** */
let a = 0;
let b = 1;
let fib_num = 1;
output = [0,1]

for(i=0;i<26;i++){

    fib_num = a+b;
    a=b;
    b=fib_num;

    output.push(fib_num);
}
console.log(output);

//************** */

let message = "I'm thinking of anumber between 1 and 100.\n" +
"Try to guess it! \n" + "Please enter an integer between 1 and 100."

let answer = 38;
let guess;
let guesses = 0;
do {
    guess = parseInt(prompt(message));

    if (guess < answer) {

        message = guess + " is too low. Please enter another integer.";
    } else if (guess > answer) {
        message = guess + " is too high. Please enter another integer.";
    }
    guesses++;
} while (guess !== answer);
message = guess + " is correct!";
console.log(message + "It took " + guesses + "attempts to guess correctly!");

//**************************** */

let integer = prompt("Please enter a number: ");

integer = parseInt(integer);

for(i=1;i<10;i++){
    row = "";
    row = row + integer;
    row = row + 2*integer;
    row = row + 3*integer;
    row = row + integer*integer;
    row = row + integer*integer*integer;
    integer++;
    console.log(row);
}

//*********************** */

for(i=1;i<=12;i++){
    let row = "";
    for(j=1;j<=12;j++){
        row += i*j + "\t";
    }
    console.log(row);
}