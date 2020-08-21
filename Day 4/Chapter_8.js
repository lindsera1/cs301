let prompt = require("prompt-sync")();

let row = ''

for(i=1;i<6;i++){
    
    row = i + ''

   console.log(row.repeat(i));
}

//***************** */

row = "";

for(i=1;i<6;i++){

    row += i

    console.log(row);
}

//****************** */

row = ''

for(i=5;i>0;i--){
    
   row = i + ''

   console.log(row.repeat(i));
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

let n = prompt("Now, enter a number: ");

n = parseInt(n);

for(i = 0; i < n; i++) {

    console.log(phrase);
}

//******************************** */

let n = prompt("Please enter a number: ");

n = parseInt(n);

i = 1;

while(i<n){
    console.log(i);
    i++;
}

//************************** */

let n = prompt("Please enter a number: ");

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
let output = [0,1]

for(i=0;i<26;i++){

    fib_num = a+b;
    a=b;
    b=fib_num;

    output.append(fib_num);
}
console.log(output);

//************** */

