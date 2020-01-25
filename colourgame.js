var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

//adds click listenres to each square
for (var i = 0; i < squares.length; i++) {
  //add initial colours to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listners to squares
  squares[i].addEventListener("click", function() {
    //grab colour of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare colour to picked colour
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

resetButton.addEventListener("click", function() {
  //generate new colours
  colors = generateRandomColors(numSquares);
  //pick new random colour from array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change squares colours
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change colour to match given colour
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //picks a random color between 0 & 1 so multiply
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
