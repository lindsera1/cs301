let arrayReverse = function(arr){
    let output = [];
    for(let i = arr.length-1;i >= 0; i--){
         output.push(arr[i]);
    }
    return output;
}

let reversed = arrayReverse([12,3,4,5,6,67]);

console.log(reversed);

//************************************** */

let replaceAll = function(str,word1,word2){
    let words = str.split(" ");
    for(let word of words){
        if(word === word1){
            word = word2;
        }
    }
    return words.join(" ");
}

let replaced = replaceAll("She said Hi and I replied Hi","Hi","Hello");

console.log(replaced);