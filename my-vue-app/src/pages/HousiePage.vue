<script lang="ts" setup>
import { ref } from "vue";
import NumberList from "../components/housie/NumberList.vue";
import TicketList from "../components/housie/TicketList.vue";
import PageLayout from "../layouts/PageLayout.vue";

const calledNumbers = ref(new Set<number>());

// receive updates from NumberList
const updateCalledNumbers = (newSet: Set<number>) => {    
    calledNumbers.value = newSet;
    console.log(calledNumbers.value)
};
</script>

<template>
    <PageLayout>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 p-4">
                <NumberList :calledNumbers="calledNumbers" @update:calledNumbers="updateCalledNumbers" />
            </div>
            <div class="w-full md:w-2/3 p-4">
                <TicketList :calledNumbers="calledNumbers" />
            </div>
        </div>
    </PageLayout>
</template>
