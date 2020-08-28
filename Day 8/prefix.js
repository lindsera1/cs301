let prefix = function(str1,str2){
    let commonPre = "";
    for(let i = 0; i<str1.length && i<str2.length;i++){
        if(str1[i] === str2[i]){
            commonPre += str1[i];
        } else {
            break;
        }
    }
    return commonPre;
}

let pre = prefix("Happiness","Happening");

console.log(pre);