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
