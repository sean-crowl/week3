// While 
var count = 3;

while (count <= 5) {
    console.log(count);
    count++;
}

// for each
var names = ["Bob", "Steve", "Janine", "Linus"];
console.log(names.length);
console.log(names[2]);

for (var n in names) {
    if (names[n][0] == "S") {
        console.log("Name starts with S: " + names[n]);
    }
}
// for 
console.log("\n\n\n\n");
for (var i=0; i <= 100; i += 10) {
console.log(i);
}

/* // do while 
var enteredCorrectAnswer = false;
do {
    // ask for guess
    var enteredCorrectAnswer = true;
} while {!enteredCorrectAnswer}; */
