day = parseInt(day);

let days = [0,"first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"];

let gifts = [0, "a partridge in a pear tree", "two turtle doves","three French hens", "four calling birds","five golden rings","six geese a laying","seven swans a swimming","eight maids a milking","nine ladies dancing","ten lords a leaping","eleven pipers piping","twelve drummers drumming"];

console.log("On the " + days[day] + " day of Christmas, my true love gave to me: ");

while(day > 0){

    console.log(gifts[day]);

    day--;
}