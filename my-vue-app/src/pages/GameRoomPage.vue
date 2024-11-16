<script lang="ts" setup>
import { ref } from 'vue';
import PageLayout from '../layouts/PageLayout.vue';
import axios from 'axios';

const room = ref<string | null>(null);
const isGameStarted = ref(false);


const generateRoom = async () => {
    try {
        const response = await axios.post('http://localhost:5001/rooms');
        console.log('Room created:', response.data.room);
    } catch (error) {
        console.error('Error creating room:', error);
    }
};
</script>

<template>
    <PageLayout>
        <div class="game-container">
            
            <div v-if="!isGameStarted">
                <button @click="generateRoom" class="start-button">Start Game</button>
            </div>

            <div v-else>
                <h2>Game Started!</h2>
                <p>Welcome to <strong>{{ room }}</strong></p>
            </div>
        </div>
    </PageLayout>
</template>
