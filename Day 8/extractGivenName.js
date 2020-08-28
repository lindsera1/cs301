let extractGivenName = function(fullName){
    let names = fullName.split(",");
    return names[1];
}

let givenName = extractGivenName("Lindsey,Ryan");

console.log(givenName);

