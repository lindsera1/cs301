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