let prompt = require("prompt-sync")();

//1

let isSumSafe = function (arr) {
    let sum = 0;
    if (arr.length === 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (sum === arr[i]) {
            return false;
        }
    }
    return true;
}

let safe = isSumSafe([5, -5, 0]);

console.log(safe);

//***************************** */

let arr2 = [1, 3, -4, 5, 6, 9];

let absValue = arr2.map(n => Math.abs(n));

console.log(absValue);

//***************************** */

let arr3 = ["this", "that", "Hi_there", "How_are_you"]

let noUnderscore = arr3.filter(n => !n.includes("_"));

console.log(noUnderscore);

//***************************************** */


//********************* */

let OneTwoOne = function (arr){
    if (arr[0] === 1 && arr[arr.length - 1] === 1) {
        for (let i = 1; i < arr.length - 2; i++) {
            if (arr[i] !== 2) {
                return false;
            }
        } 
    } else {
        return false;
    }
    return true;
}

let isItOneTwoOne = OneTwoOne([1, 2, 2, 2, 2, 2, 2, 2, 2]);

console.log(isItOneTwoOne);

//*********************************** */

let findSmallest = function(a,b,c){
    let smallest = a;
    if(b<smallest){
        smallest = b;
    } else if(c<smallest){
        smallest = c;
    } 
    return smallest;
}

let small = findSmallest(13,24,25);

console.log(small);

//*********************************** */

const scores = [];

for(let i = 0; i<5; i++){
    scores[i] = (i+1)*10;
}

let findAverage = function(arr){
    let sum = 0;
    for(let i = 0; i< arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


let average  = findAverage(scores);

console.log(average);

const randomArr = [];

for(let i = 0; i <10; i++){
    randomArr[i] = Math.floor(Math.random()*10);
}
console.log(randomArr);

//*************************************** */

let reducer = (total,n) => total * n;

let reducedArray = randomArr.reduce(reducer);

console.log(reducedArray);

//************************* */

let answer;

do{

    answer = prompt("Type a word: ");

    console.log(answer);

    answer = answer.toLowerCase();

} while(answer !== "stop");

//************************************* */

let text = "how,are,you,doing,today";

let reverseStr = function(str){
    let splitText = text.split(",");
    let reversed = splitText.reverse();
    return reversed.join(" ");
}

let reversedText = reverseStr(text);

console.log(reversedText);

//*********************************** */

let car = {

    make: "Honda",
    model: "Civic",
    year: 2017,
    odometer: 42000,
    serviceCount: 4,
    service: function(){this.serviceCount++;},
    getOdometerReading: function(){return this.odometer;},
    reset: function(){
        this.odometer = 0;
        this.serviceCount = 0;
    }
}

console.log(car.serviceCount);

car.service();

console.log(car.serviceCount);