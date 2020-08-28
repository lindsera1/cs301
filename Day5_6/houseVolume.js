let houseVolume = function(width,depth,height,sweep){
    
    let Volume1 = roofVolume(width,depth,sweep);

    let Volume2 = livingVolume(width,depth,height);

    return (Volume1 + Volume2); 
}

let livingVolume = function(width,depth,height){
    
    return ((depth)*(width)*(height));
}
let roofVolume = function(width,depth,sweep){

    let area = triangleArea(a,b,c);

    return ((area)*(width));
}
let triangleArea = function(a,b,c){

    let s = ((a+b+c)/2);

    return (Math.sqrt(s*(s-a)*(s-b)*(s-c)));

}

let depth = prompt("Please enter the depth of the house: ");

depth = parseInt(depth);

let width = prompt("Please enter the width of the house: ");

width = parseInt(width);

let height = prompt("Please enter the height of the house: ");

height = parseInt(height);

let sweep = prompt("Please enter the sweep of the roof: ");

sweep = parseInt(sweep);

let a = sweep;
let b = sweep;
let c = depth;

let totalVolume = houseVolume(depth,width,height,sweep);

console.log("The volume of this house is about " + Math.floor(totalVolume) + " cubic feet");