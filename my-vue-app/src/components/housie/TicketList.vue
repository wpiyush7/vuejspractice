<template>
    <div>
        <button @click="generateTickets">Generate Tickets</button>
        <div v-for="(ticket, index) in tickets" :key="index">
            <h3>Ticket {{ index + 1 }}</h3>
            <table>
                <tr v-for="(row, rowIndex) in ticket" :key="rowIndex">
                    <td v-for="(num, colIndex) in row" :key="colIndex" class="number-cell">
                        {{ num !== 0 ? num : '' }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { generateGameBoard } from './ticket'; 

const tickets = ref<number[][][]>([]);

const generateTickets = () => {
    tickets.value = []; 
    const numberOfTickets = 5; 
    const uniqueTickets = new Set<string>(); 

    while (uniqueTickets.size < numberOfTickets) {
        const ticket = generateGameBoard(); 

        const ticketString = JSON.stringify(ticket); 
        if (!uniqueTickets.has(ticketString)) {
            uniqueTickets.add(ticketString); 
            tickets.value.push(ticket); 
        }
    }
};

</script>

<style scoped>
.number-cell {
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    vertical-align: middle;
    font-size: 16px;
}
</style>
