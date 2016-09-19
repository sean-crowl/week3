// bronze
for (var i=0; i <= 30; i++) {
    // exclude 3, 13, and 17
    if (i != 3 && i !=13 && i != 17) {
        console.log(i)
    }
}

// silver
console.log("\n\n\n\n")
var result= "";
for (var i=10; i <= 50; i++) {
    // turns numbers into string
    result += i.toString();
}
console.log(result)