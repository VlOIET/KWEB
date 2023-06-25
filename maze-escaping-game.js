const RowMax = 6, RowMin = 0;
const ColMax = 7, ColMin = 0;
const CurrentPos = { row: 5, col: 0 };

const getElementByPosition = pos => {
    const cellsEl = document.getElementsByClassName('cells')[pos.row];
    return cellsEl.getElementsByClassName('cell')[pos.col];
}

const getNewPositionByKey = key => {
    const pos = {
        row: CurrentPos.row,
        col: CurrentPos.col,
    }
    switch (key) {
        case 'ArrowUp': pos.row--; break;
        case 'ArrowDown': pos.row++; break;
        case 'ArrowLeft': pos.col--; break;
        case 'ArrowRight': pos.col++; break;
    }
    return pos;
};

const isPositionInRange = pos => {
    (pos.row >= RowMin) && (pos.row <= RowMax) && (pos.col >= ColMin) && (pos.col <= ColMax)};

const isPositionWall = pos => getElementByPosition(pos).classList.contains('wall');

document.addEventListener('keyup', event => {
    getElementByPosition(CurrentPos).classList.remove('current');
    const newPos = getNewPositionByKey(event.code);
    if(isPositionInRange(newPos) && !isPositionWall(newPos)) {
        CurrentPos.row = newPos.row;
        CurrentPos.col = newPos.col;
    }
    const newElmt = getElementByPosition(CurrentPos);
    newElmt.classList.add('current');
    if(newElmt.classList.contains('target')) alert('You Escaped!');
});