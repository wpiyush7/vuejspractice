<script setup lang="ts">

let occupancyLimit = 15;
const rowsLength = 3;
const columnsLength = 9;
const game: number[][] = Array.from({ length: rowsLength }, () => Array(columnsLength).fill(0));

function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}

function getRandomNumberForCol(high: number): number {
    if (high === 0) {
        high = 10;
    } else {
        high = (high + 1) * 10;
    }
    let low = high - 9;

    return Math.floor(Math.random() * (high - low + 1)) + low;

}

function isValueExistsCol(game: number[][], i: number, j: number, data: number): boolean {
    for (let k = 0; k < rowsLength; k++) {
        if (game[k][j] === data) {
            return true;
        }
    }
    return false;
}

function validateAndReturnNum(i: number, j: number, game: number[][]) {
    if (game[i][j] !== 0) {
        return false;
    }

    let rowCouter = 0;
    for (let r = 0; r < rowsLength; r++) {
        if (game[r][j] !== 0) {
            rowCouter++;
        }
    }

    if (rowCouter >= 2) {
        return false;
    }

    let columnCounter = 0;
    for (let c = 0; c < columnsLength; c++) {
        if (game[i][c] !== 0) {
            columnCounter++;
        }
    }

    if (columnCounter >= 5) {
        return false;
    }

    var data: number | boolean = false;
    var isValueSet = false;
    do {
        data = getRandomNumberForCol(j);
        isValueSet = isValueExistsCol(game, i, j, data);
    } while (isValueSet);
    return data;
}


while (occupancyLimit > 0) {
    let i = getRandomNumber(3);
    let j = getRandomNumber(9);

    var data = validateAndReturnNum(i, j, game);
    if (data && data > 0) {
        game[i][j] = data;
        occupancyLimit--;
    }
}

console.log(game.map(row => row.join(' ')).join('\n'));

const sortColumnsPreservingZeros = (game: number[][]) => {
    for (let j = 0; j < columnsLength; j++) {
        const column = [];
        for (let i = 0; i < rowsLength; i++) {
            if (game[i][j] !== 0) {
                column.push(game[i][j]);
            }
        }

        const sortedColumn = column.sort((a, b) => a - b);

        let sortedIndex = 0;
        for (let i = 0; i < rowsLength; i++) {
            if (game[i][j] !== 0) {
                game[i][j] = sortedColumn[sortedIndex++];
            }
        }
    }

}


sortColumnsPreservingZeros(game);

// Log the sorted array
console.log(game.map(row => row.join(' ')).join('\n'));











</script>
