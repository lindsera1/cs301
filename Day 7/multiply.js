let multiply = function(arr,n){
    let output = [];
    for(let i = 0;i<arr.length;i++){
        output[i] = arr[i]*9;
    }

    return output;
}

let newArray = multiply(list,9);

console.log(newArray);