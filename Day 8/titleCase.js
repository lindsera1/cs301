let titleCase = function(s){
   let output = " ";
   for(let i = 0; i<s.length;i++){
       if(s[i]!==" " && s[i]===s[0]){
            output += s[i].toUpperCase();
        } else if (s[i]!== " " && s[i-1]=== " "){
            output += s[i].toUpperCase();
        } else {
            output += s[i];  
        }  
   }
   return output;
}

let titleCased = titleCase("what am i doing");

console.log(titleCased);