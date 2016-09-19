var likeCats = false;
var likeDogs = true;
if (likeDogs && !likeCats) {
    console.log("My kinda guy");
}
else {
    console.log("Get outta here");
}
// my kinda guy

var steelersWins = 0;
var bengalsWins = 4;

if (steelersWins > bengalsWins) {
    console.log("We're the greatest!");
}
else if (bengalsWins > steelersWins && steelersWins != 0) {
    console.log("We're still the best!");
}
else if (steelersWins == bengalsWins) {
    console.log("We're better, anyway.");
}
else if (steelersWins == 0) {
    console.log("Silence.");
}