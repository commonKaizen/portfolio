/* var colors = [
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)"
]; */
var squares = document.querySelectorAll(".square");
var difficulty = 6;
var colors = generateRandomColorArray(difficulty);
var pickedColor = pickAColor();
var colorDisplay = document.querySelector("#colorDisplay");
var playerMessage = document.querySelector("#message");
var title = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    colors = generateRandomColorArray(difficulty);
    pickedColor = pickAColor();
    playerMessage.textContent = "";
    colorSquares(difficulty);
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            // for (var i = 0; i < squares.length; i++) {
            //     squares[i].style.backgroundColor = pickedColor;
            // }
            playerMessage.textContent = "You win!";
            title.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            playerMessage.textContent = "Try again!";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickAColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColorArray(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(pickRandomColor());
    }
    return arr;
}

function pickRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}

function colorSquares(num) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "";
        if (i >= difficulty) {
            squares[i].style.display = "none";
        }
    }
}