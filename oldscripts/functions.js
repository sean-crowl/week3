function writeHelloWorld() {
 console.log("Hello World!");   
}

writeHelloWorld();

function writeMessage(message) {
    console.log(message);
}
writeMessage("Hey there, how are you?");

function sum(number1, number2) {
    var result = number1 + number2;
    return result;
}

var a = sum(10, 50);

console.log(a);

console.log(sum(2, 2));
console.log(sum(5, 7));
console.log(sum(800, 200));

// Write a function that takes a number and counts from 1 to whatever that number is

function count(num) {
    for(var i = 1; i <= num; i++) {
    console.log(i);
    }
}

count(29)

