var answer;

function displayMessage(msg) {
  messageNode = document.getElementById("feedback");
  messageNode.innerHTML = msg;
}

function processGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  if (guess == undefined || isNaN(guess)) {
    displayMessage("Input was not a number. Try again.");
    return;
  }
  if (guess === answer) {
    displayMessage("Congratulations, you guessed the number!");
    document.getElementById("submit").removeEventListener("click", processGuess, false);
    document.getElementById("guess").setAttribute("disabled", "true");
  } else if (guess < answer) {
    displayMessage("Too low. Try again.");
  } else {
    displayMessage("Too high. Try again.");
  }
}

function init() {
  answer = Math.floor(Math.random() * 1000 + 1) // random number between 1-1000
  document.getElementById("submit").addEventListener("click", processGuess, false);
}


window.addEventListener("load", init, false);