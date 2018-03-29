let gridNum = 16;
let gridSize = (100 / gridNum) + '%';
const container = document.querySelector('#container');

function gridCreate() {
    for (var i = 0; i < gridNum; i++) {
        for (var j = 0; j < gridNum; j++) {
            let grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.setAttribute('style', `width: ${gridSize}; height: ${gridSize}`);
            container.appendChild(grid);
            grid.addEventListener('mouseover', () => {
                gridHover(grid);
            });
        }
    }
}

function gridHover(grid) {
    grid.classList.add('gridHover');
}

gridCreate();