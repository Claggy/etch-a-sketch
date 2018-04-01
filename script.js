let gridNum = 16;
let color = 'gray';
let opacity = '100%';
const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const gridSize = document.querySelector('#gridSize');


function gridCreate() {
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            let grid = document.createElement('div');
            let gridSize = (100 / gridNum) + '%';
            grid.setAttribute('class', 'grid');
            grid.setAttribute('style', `width: ${gridSize}; height: ${gridSize}`);
            container.appendChild(grid);
            gridHover(grid);
            newGrid();
            clearGrid(grid);
        }
    }
}

function clearGrid(grid) {
    clear.addEventListener('click', removeGrid);
    clear.addEventListener('click', gridCreate);
}

function newGrid() {
    gridSize.addEventListener('click', removeGrid);
    gridSize.addEventListener('click', newGridNum);
    gridSize.addEventListener('click', gridCreate);
}

function removeGrid() {
    grid = document.getElementsByClassName('grid');
    while (grid[0]) {
        grid[0].parentNode.removeChild(grid[0]);
    }
}

function newGridNum() {
    numChoice = prompt("How many squares per side do you want the grid to have (100 max)?", "16");
    numChoiceInt = parseInt(numChoice);
    if (isNaN(numChoiceInt)) {
        return;
    } else {
        gridNum = numChoiceInt;
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    color = document.querySelector('#color').value;
    if (color === 'random') {
        return randomColor();
    } else {
        return color;
    }
}

function changeOpacity(grid) {
    opacity = document.querySelector('#opacity').value;
    let op = 0;
    grid.addEventListener('mouseover', () => {
        opacity = document.querySelector('#opacity').value;
        if (opacity === '100%') {
            op = 1;
            grid.style.opacity = 1.0;
        } else if (opacity === '10%') {
            if (op < 1) {
                op += 0.1;
                grid.style.opacity = op;
            } else {
                return;
            }
        }
    });
}

function gridHover(grid) {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = changeColor();
    });
    changeOpacity(grid);
}

gridCreate();
