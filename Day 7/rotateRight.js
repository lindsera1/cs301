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