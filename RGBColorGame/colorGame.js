var colors = [
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)"
];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * colors.length)];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;
            }
        } else {
            this.style.backgroundColor = "#232323";
        }
    })
}