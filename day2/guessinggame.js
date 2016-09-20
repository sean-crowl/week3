// Create a variable to hold the answer.
var answer;

// Set up the game.
function setupGame () {
    // Clear out old values.
    $("#tbxGuess").val("");
    $("#message").text("");
    $("#lab").text("What is your guess?");
    $("#btnGuess").show();
    $("#tbxGuess").show();

    // Come up with the answer.
    answer = parseInt(Math.random() * 10 + 1);
    console.log("Cheater! Don't you dare put " + answer);

    // Hide and show the appropriate divs.
    $("#intro").show();
    $("#game").hide();
    $("#restart").hide();
    $("#new").hide();
    $("#win").hide();
    $("#wrong").hide();
}

// Handle the guess.
function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        // Tell them the answer is right.
        $("#message").text("You are right! You win!");
        $("#new").show();
        $("#btnGuess").hide();
        $("#restart").hide();
        $("#tbxGuess").hide();
        $("#wrong").hide();
        $("#win").fadeIn("slow", "linear");
        $("#lab").text("WINNER!");
    }
       // Tell them how the answer is wrong.
    else if (+guess < answer) {
        $("#message").text("Too low! Try again!");
        $("#tbxGuess").val("");
        $("#tbxGuess").focus();
        $("#wrong").hide();
        $("#wrong").fadeIn("slow", "linear");
    }
    else if (+guess > answer) {
        $("#message").text("Too high! Try again!");
        $("#tbxGuess").val("");
        $("#tbxGuess").focus();
        $("#wrong").hide();
        $("#wrong").fadeIn("slow", "linear");
    }
    /* else {
        // Tell them the answer is wrong.
        $("#message").text("Nope! Try again!");
    } */
}

// Set up the page for the game.
function playGame() {
   // Hide and show the appropriate divs.
    $("#intro").hide();
    $("#game").show();
    $("#restart").show();
    // Makes cursor start in text box.
    $("#tbxGuess").focus();

    }

// When the page loads, setup the game.
$(function() {
    // Wire up the event handlers.
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);
    $("#restartGame").on("click", setupGame);
    $("#newGame").on("click", setupGame);

    // Start the game.
    setupGame();
});