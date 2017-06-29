
var wordList = ["a","b","c","d","e","f"];
var statusOutput = document.getElementById('status_output');
var guessInput = document.getElementById('guessInput');
var guessSoFar = document.getElementById('status_guessed');
var guessLoose = document.getElementById('looses');
var guessWins = document.getElementById('wins');
var counter = 3;
var looses = 0;
var wins = 0;

// function checkLetter

function checkLetter () {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var computerChoice = wordList[randomNumber];
    if(counter > 0) {
        if (guessInput.value === computerChoice) {
            statusOutput.value = "Congratulation. You're correct";
            wins++;
            $("#wins").html("<output>" + wins + "</output>");
            clearFields();
        };
        if (guessInput.value !== computerChoice) {
            statusOutput.value = "Incorrect. Guess Again";
            $("#status_guessed").append("<output>" + guessInput.value + " "  + "</output>");
            counter --;
            guessInput.value = "";
        };
    } else if(counter === 0) {
        looses++;
        $("#looses").html("<output>" + looses + "</output>");
        clearFields();
    };
};
//  clearfield without refresh
function clearFields() {
  guessInput.value = "";
  counter = 3;
  statusOutput.value = "Guess anything";
  guessSoFar.value = "";
  return false;
};
// reset all
function reset() {
  guessInput.value = "";
  counter = 3;
  statusOutput.value = "Guess anything";
  guessWins.value = "";
  guessLoose.value = "";
  guessSoFar.value = "";
  return false;
};