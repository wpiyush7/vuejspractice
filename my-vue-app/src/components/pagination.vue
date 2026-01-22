<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;        // <- add this
    itemsPerPageOptions?: number[]; // optional
}>();

const emit = defineEmits<{
    (e: "change", page: number): void;
    (e: "update:itemsPerPage", value: number): void; // <- for v-model update
}>();

// Generate page numbers
const pages = computed(() => {
    const range: number[] = [];
    for (let i = 1; i <= props.totalPages; i++) {
        range.push(i);
    }
    return range;
});

// Go to specific page
const goTo = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit("change", page);
    }
};

// Handle items per page change
const onItemsPerPageChange = (event: Event) => {
    const value = Number((event.target as HTMLSelectElement).value);
    emit("update:itemsPerPage", value);
};

</script>

<template>
    <div class="flex items-center justify-between gap-4 w-full">
        <!-- Items per page selector -->
        <div class="flex items-center gap-2">
            <span class="text-gray-700">Items per page:</span>
            <select :value="itemsPerPage" @change="onItemsPerPageChange"
                class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option v-for="option in itemsPerPageOptions || [5, 10, 15, 20]" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
        </div>

        <!-- Page numbers -->
        <div class="flex items-center gap-2">
            <button @click="goTo(currentPage - 1)" :disabled="currentPage === 1"
                class="px-3 py-2 rounded bg-gray-200 disabled:opacity-50">
                Prev
            </button>

            <button v-for="page in pages" :key="page" @click="goTo(page)" class="px-3 py-2 rounded"
                :class="page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'">
                {{ page }}
            </button>

            <button @click="goTo(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-3 py-2 rounded bg-gray-200 disabled:opacity-50">
                Next
            </button>
        </div>
    </div>
</template>
