//Even or odd
let prompt = require("prompt-sync")();

let integer = parseFloat(prompt("Please enter a number: "));

if (integer%2 === 0) {
    console.log(integer + " is even!");
} else {
    console.log(integer + " is odd!")
}

//Chapter6Problem1********************* */
let num1 = parseFloat(prompt("Please enter a number: "));

let num2 = parseFloat(prompt("Please enter another number: "));

let result = Math.abs(num2-num1);

console.log("The difference between these two numbers is" + result);
//Problem2****************** */
let weather = prompt("What is the weather like?: ");

if (weather === "hot") {
    console.log("Wear sandals!");
} else if (weather === "raining") {
    console.log("Wear galoshes!");
} else if (weather === "snowing") {
    console.log("Wear boots!");
} else {
    console.log("Wear shoes!");
}

//Problem3******************* */
let name = prompt("What is this students name?: ");

let credits = parseFloat(prompt("How many credits has this student completed?: "));

let year;

if (0 <= credits && credits < 30) {
    year = "Freshman";
} else if (30 <= credits && credits < 60) {
    year = "Sophomore";
} else if (60 <= credits && credits < 90) {
    year = "Junior";
} else {
    year = "Senior";
}

console.log(name + " is a " + year);
//Problem4********************* */
let cost = parseFloat(prompt("What is the cost of the house?: "));

let down_payment;

if (0 <= cost && cost < 50000) {
    down_payment = .05*cost;
} else if (50000<= cost && cost < 100000) {
    down_payment = 2000 + .10*(cost-50000);
} else if (100000 <= cost && cost < 200000) {
    down_payment = 7500 + .20*(cost-100000);
} else {
    down_payment = 27500 + .25*(cost-200000);
}

console.log("The down payment is " + down_payment);

//Problem 5*********************** */
let status = prompt("Is this person a student, faculty or other?: ");

let books = parseInt(prompt("How many books were overdue in the past year?: "));

let loan_duration;

if (status === "student") {
    if (books === 0) {
        loan_duration = 6;
    } else if (books < 3) {
        loan_duration = 4;
    } else {
        loan_duration = 2;
    }
} else if (status === "faculty") {
    if (books === 0) {
        loan_duration = 16;
    } else if (books < 3) {
        loan_duration = 12;
    } else {
        loan_duration = 8;
    }
} else {
    if (books === 0) {
        loan_duration = 4;
    } else if (books < 3) {
        loan_duration = 3;
    } else {
        loan_duration = 2;
    }
}

console.log("The loan duration is" + loan_duration + "weeks.");
//Chapter7Problem5*********************** */

let age = parseFloat(prompt("What is the child's age?: "));

let season = prompt("What season is it?: ");

let bedtime;

if (age <= 5) {
    if (season === "summer" || season === "fall") {
        bedtime = "8:30 PM";
    } else {
        bedtime = "8:00 PM";
    }
} else if (6 <= age && age <= 12) {
    if (season === "summer") {
        bedtime = "9:30 PM";
    } else {
        bedtime = "8:30 PM";
    }
} else {
    if (season === "summer") {
        bedtime = "10:30 PM";
    } else {
        bedtime = "9:30 PM";
    }
}

console.log("The bedtime is " + bedtime);