let prompt = require("prompt-sync")();

//addEnds***********************/

let list = [22,3,14,9,7,1];

let addEnds = function(arr){
    let sum = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === arr[0] || arr[i] === arr[arr.length-1]){
            sum += arr[i];
        }
    }
    return sum;
}

let result = addEnds(list);

console.log(result);

//getMiddle******************************* */

let getMiddle = function(arr){
    let middle = 0;
    let middleIndex = ((arr.length-1)/2);

    if(middleIndex === Math.trunc(middleIndex)){
        middle = arr[middleIndex];
    } else{
        middle = (arr[Math.floor(middleIndex)] + arr[Math.ceil(middleIndex)])/2;
    }
    return middle;
}

let theMiddle = getMiddle(list);

console.log(theMiddle);

//******************************** */

let countEvens = function(arr){
    let evens = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            evens++;
        }
    }
    return evens;
}

let evens = countEvens(list);

console.log(evens);

//******************************** */

let multiply = function(arr,n){
    let output = [];
    for(let i = 0;i<arr.length;i++){
        output[i] = arr[i]*9;
    }

    return output;
}

let newArray = multiply(list,9);

console.log(newArray);

//********************* */

let rotateLeft = function(arr){
    let output = [];
    for(i=arr.length-1;i>=0;i--){
        if(arr[i] === arr[arr.length-1]){
            output[i] = arr[0];
        } else {
            output[i] = arr[i+1];
        }
    }
    return output;
}

let rotatedArray = rotateLeft(list);
console.log(rotatedArray);

//******************************** */

let rotateRight = function(arr){
    let output = [];
    for(i=0;i<arr.length;i++){
        if(arr[i] === arr[0]){
            output[i] = arr[arr.length-1];
        } else {
            output[i] = arr[i-1];
        }
    }
    return output;
}

rotatedArray = rotateRight(list);
console.log(rotatedArray);

//********************************* */

let day = prompt("What day of Christmas would you like to see? Please enter a number: ");

day = parseInt(day);

let days = [0,"first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"];

let gifts = [0, "a partridge in a pear tree", "two turtle doves","three French hens", "four calling birds","five golden rings","six geese a laying","seven swans a swimming","eight maids a milking","nine ladies dancing","ten lords a leaping","eleven pipers piping","twelve drummers drumming"];

console.log("On the " + days[day] + " day of Christmas, my true love gave to me: ");

while(day > 0){

    console.log(gifts[day]);

    day--;

}