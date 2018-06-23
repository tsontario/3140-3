const targetCount = 10;
var answer;
var count;

function displayMessage(msg) {
  messageNode = document.getElementById("feedback");
  messageNode.innerHTML = msg;
}

function processGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  if (guess == undefined || isNaN(guess)) {
    displayMessage("Wrong input! You should enter a number between 1 and 1000.");
    return;
  } else if (guess === answer) {
    if (count < targetCount) {
      displayMessage("Either you know the secret or you got lucky!");
    } else if (count > targetCount) {
      displayMessage("You should be able to do better!");
    } else {
      displayMessage("Ahah! You know the secret!");
    }
    document.getElementById("submit").removeEventListener("click", processGuess, false);
    document.getElementById("submit").setAttribute("disabled", "true");
    document.getElementById("guess").setAttribute("disabled", "true");
  } else if (guess < answer) {
    displayMessage("Too low. Try again.");
    count++;
  } else {
    displayMessage("Too high. Try again.");
    count++;
  }
}

function init() {
  count = 0;
  answer = Math.floor(Math.random() * 1000 + 1) // random number between 1-1000
  document.getElementById("submit").addEventListener("click", processGuess, false);
}


window.addEventListener("load", init, false);