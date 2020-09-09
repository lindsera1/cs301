let findAverage = function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return ((sum)/(arr.length));
}

let scores = [];

for(let i = 0; i < 5; i++){
    let score = 10;
    scores[i] = score*(i+1);
}

let average = findAverage(scores);

console.log(average);

let random = [];

for(let i = 0; i < 10; i++){
    random[i] = (Math.ceil(Math.random()*100));
} 

let randomAverage = findAverage(random);
console.log(randomAverage);

//******************* */

const num_array = [1,11,3,14,6,23,9,5]

const default_sorted_array = num_array.sort();

console.log(default_sorted_array);

const properly_sorted_array = num_array.sort((a,b) => a-b);

console.log(properly_sorted_array);

//**************************** */

const arr1 = [1,2,3,4,5];

let doubleIt = function(n){
    return n*2
}

const doubled_arr = arr1.map(doubleIt);
console.log(doubled_arr);

//

arr2 = [1,2,3,4,5];

doubled_arr2 = arr2.map(function(n){return n*2});
console.log(doubled_arr);

//*************************** */

const words = ["apple","ball","cat"];

let i = 0;

const word_lengths = words.map((arr) => (words[i++].length));

console.log(word_lengths);

//FilterOdd******************/

const arr = [1,2,3,4,5,6,7,8,9,10];

function filterOdd(arr){
    let temp_arr = [];
    let j = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            temp_arr[j++] = arr[i];
        }
    }
    return temp_arr;
}

let odds = filterOdd(arr);

console.log(odds);

i = 0;

const filterOdds = arr.filter(n => n%2!==0);

console.log(filterOdds);

//********************************* */

const arr3 = [1,2,3,4,5,6,7,8,9,10];

let accumulator = function(arr){
    let output = 0;
    for(let i = 0; i<10; i++){
        output = output + arr[i];
    }
    return output;
}

let arr_sum = accumulator(arr3);

console.log(arr_sum);

//********************************** */

const arr4 = [1,2,3,4];

arr4.forEach(n=>console.log(n));


