function findNextPrime(arr, startIndex) {
  for (var i = startIndex; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

function sieve() {
  var arr = new Array(1000)
  arr[0] = arr[1] = 0;
  for (var i = 2; i < arr.length; i++) {
    arr[i] = 1;
  }
  
  var i = 0;
  while (i != -1) {
    console.log(i);
    currentPrime = findNextPrime(arr, i+1);
    if (currentPrime === -1) {
      break;
    }
    i = currentPrime;
    var j = currentPrime * 2;
    while (j < arr.length) {
      arr[j] = 0;
      j += currentPrime;
    }
  }
  makeTable(arr);
  console.log("HERE");
  displayPrimes(arr);
}

function makeTable(arr) {
  var tableBody = document.getElementById("table");
  var rows = 100;
  var cols = 10;

  for (var i=0; i<rows; i++) {
    var row = document.createElement("tr")

    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      cell.innerHTML = i*10 + j;
      if (arr[i*10 + j] == 1) {
        cell.style.backgroundColor = "grey";
      }
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

function displayPrimes(arr) {
  primes = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      primes.push(i);
    }
  }
  document.getElementById("result").innerHTML = primes.join(", ");
}

window.addEventListener("load", sieve, false);