// Counting backwards from 100 by 5

for (var i = 100; i >= 0; i -= 5) {
    console.log(i)
}

// Count backwards from 100 with while loop
// Print if it's divisible by 25
var i = 100;
while (i >= 0) {
    if (i % 25 == 0 && i != 0) {
        console.log(i + " This is divisible by 25");
    }
    else {
    console.log (i);
    }
    i--;
}

console.log("\n\n\n\n");
// Fizzbuzz

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }

    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}