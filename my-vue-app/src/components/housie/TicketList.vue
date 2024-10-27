<template>
    <div>
        <button @click="generateTickets">Generate Tickets</button>
        <div v-for="(ticket, index) in tickets" :key="index">
            <h3>Ticket {{ index + 1 }}</h3>
            <table>
                <tr v-for="row in ticket" :key="row.join(',')">
                    <td v-for="num in row" :key="num" class="number-cell">
                        {{ num !== 0 ? num : '' }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        const tickets = ref<number[][][]>([]);

        const generateTickets = () => {
            tickets.value = [];
            const numberOfTickets = 5;
            const uniqueTickets = new Set<string>();

            while (uniqueTickets.size < numberOfTickets) {
                const ticket = getTickets();
                
                const ticketString = JSON.stringify(ticket);
                if (!uniqueTickets.has(ticketString)) {
                    uniqueTickets.add(ticketString);
                    tickets.value.push(ticket);
                    
                }
            }
            
        };

        const getTickets = (): number[][] => {
            const ticketArray: number[][] = Array.from({ length: 3 }, () => Array(9).fill(0));
            const totalNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
            const totalIndices = Array.from({ length: 27 }, (_, i) => [Math.floor(i / 9), i % 9] as [number, number]);
            const randomIndices: [number, number][] = [];

            const firstRow = randomSample(totalIndices.slice(0, 9), 5);
            const secondRow = randomSample(totalIndices.slice(9, 18), 5);
            const thirdRow = randomSample(totalIndices.slice(18), 5);

            randomIndices.push(...firstRow, ...secondRow, ...thirdRow);

            for (const [row, col] of randomIndices) {
                let number: number;
                switch (col) {
                    case 0: number = randomChoice(totalNumbers.slice(0, 10)); break;
                    case 1: number = randomChoice(totalNumbers.slice(10, 20)); break;
                    case 2: number = randomChoice(totalNumbers.slice(20, 30)); break;
                    case 3: number = randomChoice(totalNumbers.slice(30, 40)); break;
                    case 4: number = randomChoice(totalNumbers.slice(40, 50)); break;
                    case 5: number = randomChoice(totalNumbers.slice(50, 60)); break;
                    case 6: number = randomChoice(totalNumbers.slice(60, 70)); break;
                    case 7: number = randomChoice(totalNumbers.slice(70, 80)); break;
                    case 8: number = randomChoice(totalNumbers.slice(80, 90)); break;
                    default: throw new Error("Column index out of bounds");
                }
                ticketArray[row][col] = number;
                totalNumbers[totalNumbers.indexOf(number)] = 0;
            }


            for (let col = 0; col < 9; col++) {
                ticketArray.forEach(row => {
                    if (row[col] !== 0) {
                        row[col] = Number(row[col]);
                    }
                });
                ticketArray.sort((a, b) => a[col] - b[col]);
            }

            return ticketArray;
        };

        const randomSample = (array: any[], size: number) => {
            const shuffled = array.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, size);
        };

        const randomChoice = (array: number[]) => {
            const filtered = array.filter(num => num !== 0);
            return filtered[Math.floor(Math.random() * filtered.length)];
        };

        return {
            tickets,
            generateTickets,
        };
    },
};
</script>

<style scoped>
.number-cell {
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid #ccc;
}
</style>