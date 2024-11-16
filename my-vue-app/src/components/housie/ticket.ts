/**
 * Function to generate the game board.
 * @returns The populated and sorted game board.
 */
export const generateGameBoard = (): number[][] => {

    const rowsLength = 3;
    const columnsLength = 9;
    const occupancyLimit = 15;
    // Initialize the game board with zeros
    const game: number[][] = Array.from({ length: rowsLength }, () => Array(columnsLength).fill(0));

    /**
     * Generates a random number between 0 and max (exclusive).
     */
    const getRandomNumber = (max: number): number => Math.floor(Math.random() * max);

    /**
     * Generates a random number within a specific range for a column.
     * @param high - Column index to determine range (0-10, 11-20, etc.)
     */
    const getRandomNumberForCol = (high: number): number => {
        const upper = (high === 0 ? 10 : (high + 1) * 10);
        const lower = upper - 9;
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    };

    /**
     * Checks if a value exists in a specific column of the game board.
     */
    const isValueExistsCol = (colIndex: number, value: number): boolean => {
        return game.some(row => row[colIndex] === value);
    };

    /**
     * Validates cell constraints and returns a valid number for placement if possible.
     */
    const validateAndReturnNum = (rowIndex: number, colIndex: number): number | false => {
        if (game[rowIndex][colIndex] !== 0) return false;

        // Check if the column already has two numbers
        const columnCount = game.reduce((count, row) => count + (row[colIndex] !== 0 ? 1 : 0), 0);
        if (columnCount >= 2) return false;

        // Check if the row already has five numbers
        const rowCount = game[rowIndex].filter(num => num !== 0).length;
        if (rowCount >= 5) return false;

        // Generate and validate a unique number for the column
        let number: number;
        do {
            number = getRandomNumberForCol(colIndex);
        } while (isValueExistsCol(colIndex, number));

        return number;
    };

    // Fill the game board with random numbers
    let remainingSpots = occupancyLimit;
    while (remainingSpots > 0) {
        const rowIndex = getRandomNumber(rowsLength);
        const colIndex = getRandomNumber(columnsLength);

        const number = validateAndReturnNum(rowIndex, colIndex);
        if (number) {
            game[rowIndex][colIndex] = number;
            remainingSpots--;
        }
    }

    /**
     * Sorts the columns of the game board while preserving zeros.
     */
    const sortColumnsPreservingZeros = (): void => {
        for (let colIndex = 0; colIndex < columnsLength; colIndex++) {
            const nonZeroValues = game.map(row => row[colIndex]).filter(value => value !== 0).sort((a, b) => a - b);
            let sortedIndex = 0;

            for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
                if (game[rowIndex][colIndex] !== 0) {
                    game[rowIndex][colIndex] = nonZeroValues[sortedIndex++];
                }
            }
        }
    };

    // Sort the columns
    sortColumnsPreservingZeros();

    // Return the final game board
    return game;
};
