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
