//variables
let gridSize = 20;
const container = document.querySelector(".container");
const containerSize = parseInt(container.style.width, 10)
let selectedColor = "black";

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
            changeColor)
        console.log("cell created");
    }
}

// colorBrush
function changeColor() {
    this.style.setProperty("background", selectedColor)
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