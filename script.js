//variables
let gridSize = 20;
const container = document.querySelector(".container");
const containerSize = parseInt(container.style.width, 10)
var hue = 0
var saturation = 0
var brightness = 0
var selectedColor = `hsl( ${hue}, ${saturation}%, ${brightness}%)`;

//create grid function
function setGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        const cellSize = containerSize / gridSize;
        var cell = document.createElement("div");
        cell.setAttribute("class", "square-block");
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.style.backgroundColor = "white";
        container.appendChild(cell);
        cell.addEventListener("mouseover",
            actualColor)
        console.log("cell created");
    }
}

// colorBrush
function actualColor() {
    this.style.setProperty("background", selectedColor)
}

//changecolor
function changeColor() {
    selectedColor = window.prompt("write a color!")
}

//random pencil
function randomColor() {
    selectedColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
}
//transparent pencil
function transparentColor() {
    if (brightness < 100) {
        brightness = brightness + 10;
    }

}
//reset grid button
function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let newSize = window.prompt("How many squares on a row?")
    gridSize = newSize;
    setGrid();

}

//onload
window.onload = setGrid();