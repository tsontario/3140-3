// Globals
var convertFunc = celsius;

function celsius(fahrenheit) {
  return 5.0 / 9.0 * (fahrenheit - 32);
}

function fahrenheit(celsius) {
  return (9.0 / 5.0) * celsius + 32;
}

function convertToCelsius() {
  var resultNode = document.getElementById("result");
  resultNode.innerHTML = ""; // reset
  var input = document.getElementById("input").value;
  if (isNaN(parseInt(input))) {
    return;
  }
  var result = celsius(input).toFixed(2);
  resultNode.innerHTML = input + "&deg;F = " +  result + "&deg;C";
}

function convertToFahrenheit() {
  var resultNode = document.getElementById("result");
  resultNode.innerHTML = ""; // reset
  var input = document.getElementById("input").value;
  if (isNaN(parseInt(input))) {
    return;
  }
  var result = fahrenheit(input).toFixed(2);
  resultNode.innerHTML = input + "&deg;C = " +  result + "&deg;F";
}

function init() {
  document.getElementById("celsius").addEventListener("click", convertToCelsius, false);
  document.getElementById("fahrenheit").addEventListener("click", convertToFahrenheit, false);
}

window.addEventListener("load", init, false);