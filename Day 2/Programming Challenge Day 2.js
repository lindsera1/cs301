let prompt = require('prompt-sync')();

let quarts = prompt("Please enter volume in quarts: ");

quarts = parseFloat(quarts);

let liters = quarts * 0.946353;

console.log(liters);

//***************************************************/

let prompt = require('prompt-sync')();

let kilometers = prompt("Please enter distance in kilometers: ");

kilometers = parseFloat(kilometers);

let miles = kilometers * 0.621371;

console.log(miles);

//***************************************************/

let prompt = require('prompt-sync')();

let num_of_boxes = prompt("Please enter the number of boxes: ");

let boxes_per_stack = prompt("How many boxes per stack would you like?: ");

num_of_boxes = parseFloat(num_of_boxes);

boxes_per_stack = parseFloat(boxes_per_stack);

let num_of_stacks = (num_of_boxes)/(num_of_stacks);

num_of_stacks = Math.ceil(num_of_stacks);

console.log(num_of_stacks);

//**********************************************/

let prompt = require('prompt-sync')();

let students = prompt("How many students are in your class?: ");

let teams = ("How many teams do you want to have?: ");

students = parseInt(students);

teams = parseInt(teams);

let students_per_team = (students)/(teams);

students_per_team = Math.floor(students_per_team);

let remainder = (students)%(teams)

console.log(remainder + " teams with " + (students_per_team + 1) + " members " + (teams - remainder) + " teams with " + (students_per_team) + " members.");

/**********************************************************/

let prompt = require('prompt-sync')();

let beginning = prompt("How many miles did you start at?: ");

let ending = prompt("How many miles did you end at?: ");

let gallons = prompt("How many gallons of gas did you use?: ");

gallons = parseFloat(gallons);

beginning = parseFloat(gallons);

ending = parseFloat(ending);

let total_miles = (ending) - (beginning);

console.log("Your mileage is " + (total_miles/gallons);

/*****************************************************/

let prompt = require('prompt-sync')();

let age = prompt("Please enter your age: ");

age = parseInt(age);

let maximum_heartrate = 220 - age;

let upper = .85*(maximum_heartrate);

let lower = .65*(maximum_heartrate);

console.log("Your upper limit is " + upper + " BPM and your lower limit is " + lower + " BPM.");

/*******************************************************/

let prompt = require('prompt-sync')();

let hours = prompt("How many hours did you work?: ");

let wage = prompt("What is your hourly wage?: ");

hours = parseInt(hours);

wage = parseInt(wage);

let gross_pay = hours * wage;

console.log("Your after tax pay is " + (gross_pay * .85) + "dollars");