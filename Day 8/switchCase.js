let switchCase = function(s){
    let output = "";
    for(let char of s){
        if(char === char.toUpperCase()){
            output += char.toLowerCase();
        } else if(char === char.toLowerCase()){
            output += char.toUpperCase();
        } else if(char === ""){
            continue;
        }
    }
    return output;
}

let switchedCase = switchCase("The Great Gatsby");

console.log(switchedCase);