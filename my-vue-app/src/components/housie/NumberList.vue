
<script lang="ts" setup>
import { ref } from 'vue';

const numbers = Array.from({ length: 90 }, (_, i) => i + 1);

const rows: any[] = [];
for (let i = 0; i < numbers.length; i += 10) {
  rows.push(numbers.slice(i, i + 10));
}

const calledNumbers = ref(new Set<number>());
const calledNumber = ref<number | null>(null);

const callNumber = () => {
  if (calledNumbers.value.size < numbers.length) {
    let number: number;
    do {
      number = numbers[Math.floor(Math.random() * numbers.length)];
    } while (calledNumbers.value.has(number));
    calledNumbers.value.add(number);
    calledNumber.value = number;
  } else {
    calledNumber.value = null; 
  }
};
</script>



<template>
  <div class="pt-4">
    <h2 style="margin-top: 1rem;">Called Number: {{ calledNumber }}</h2>
<button @click="callNumber" style="margin-top: 1rem; margin-bottom: 1rem; padding: 0.5rem; background-color: #3b82f6; color: white; border-radius: 0.375rem; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#2563eb'" onmouseout="this.style.backgroundColor='#3b82f6'">
  Call Number
</button>
    <div
      v-for="(row, index) in rows"
      :key="index"
      class="flex justify-left mb-1"
    >
      <div
        v-for="number in row"
        :key="number"
        :class="['w-8 h-8 flex items-center justify-center m-1 rounded-lg shadow-lg transition duration-300', { 'bg-green-500 text-white': !calledNumbers.has(number), 'bg-red-500 text-white': calledNumbers.has(number) }]"
      >
        {{ number }}
      </div>
    </div>
    
  </div>
</template>
