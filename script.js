let gridNum = 16;
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
    clear.addEventListener('click', () => {
        grid.classList.remove('gridHover');
    });
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

function gridHover(grid) {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('gridHover');
    });
}

gridCreate();
