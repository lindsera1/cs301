let suffix = function(str1,str2){
    let i = str1.length-1;
    let j = str2.length-1;
    let commonSuf = "";

    do{
        if(str1[i] === str2[j]){
            commonSuf += str1[i];
            i--;
            j--;
        } 
    } while(str1[i] === str2[j]);

    let suf = commonSuf.split("");
    suf = suf.reverse();
    return (suf.join(""));
}

let suf = suffix("originator","supinator");

console.log(suf);