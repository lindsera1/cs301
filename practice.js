let checkPrime = function(n){
    let counter = 0;
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n%i===0){
            counter++;
        }
    }
    return counter === 0;
}

function isPerfectPrimeArray(arr){

    let prime_counter = 0;
    let odd_counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(i%2!==0){
            odd_counter ++;
            if(checkPrime(arr[i])===true){
                prime_counter ++;
            }
        }
    }
    return odd_counter === prime_counter;
}

let answer = isPerfectPrimeArray([1,2,3,3,5,7,7,11,9]);

console.log(answer);

//******************************************* */

let findSumofDigits = function(n){
    let sum = 0;
    while(n>0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}

let theSum = findSumofDigits(12345);

console.log(theSum);

//************************************* */

let testPalindrome = function(str){
    let letters = str.toLowerCase().split("");
    letters = letters.reverse();
    let reversed = letters.join("");
    return reversed === str.toLowerCase();
}

let test = testPalindrome("amanaplanacanalpanama");

console.log(test);

//*********************************************** */

let vowelCount = function(str){
    let count = 0;
    new_str = str.toLowerCase();
    for(let char of new_str){
        if(char === "a" || char ==="i" || char === "e" || char ==="o" || char === "u"){
            count ++;
        }
    }
    return count;
}

let count = vowelCount("supercalifragilisticespialidocious");

console.log(count);

//********************************** */

let arr1 = [25,3,123,45];

let arr2 = ["madam","car","civic","apple"]

let mappedOutput1 = arr1.map(n=>findSumofDigits(n));

console.log(mappedOutput1);

let mappedOutput2 = arr2.map(n=>testPalindrome(n));

console.log(mappedOutput2);

//********************************************** */

arr3 = ["apple","sync","ball","rhythm"];

let noVowels = function(str){
    let consonantCount = 0;
   for(let char of str){
       if(char !== "a" && char !=="i" && char !== "e" && char !=="o" && char !== "u"){
           consonantCount++;
        }
    }
    if(str.length===consonantCount){
        return str;
    }
}

let wordFilter = arr3.filter(n=>noVowels(n));

console.log(wordFilter);

//*********************************** */

let arr9 = [3,-5,8,9,25,-7];

let maxMinPair = function(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        } else if(arr[i]>max){
            max = arr[i];
        }
    }
    
    return [max,min];
}

let MaxMin = maxMinPair(arr9);

console.log(MaxMin);

