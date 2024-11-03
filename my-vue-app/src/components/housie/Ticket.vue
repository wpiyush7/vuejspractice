<script setup lang="ts">
const rowsLength = 3;
const columnsLength = 9;
const totalNumbers = Array.from({ length: 90 }, (_, i) => i + 1);

const ranges: number[][] = [];
const rangeSize = 10;

for (let r = 0; r < 9; r++) {
    const start = r * rangeSize + (r === 0 ? 0 : 1);
    const end = start + rangeSize;
    ranges.push(totalNumbers.slice(start, end));
}

function getRandomNumbers(val: number, count: number): number[] {
    const numbers = ranges[val];

    const shuffled = numbers.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).sort((a, b) => a - b);
}

const ticketArray: number[][] = Array.from({ length: rowsLength }, () => Array(columnsLength).fill(0));

for (let j = 0; j < columnsLength; j++) {
    const randomNumbers = getRandomNumbers(j, rowsLength);
    for (let i = 0; i < rowsLength; i++) {
        ticketArray[i][j] = randomNumbers[i] || 0;
    }
}

console.log(ticketArray.map(row => row.join(' ')).join('\n'));




</script>
