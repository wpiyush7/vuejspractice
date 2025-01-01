<script lang="ts" setup>
import { ref, computed } from 'vue';
import PageLayout from '../../layouts/PageLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample data
const people = ref([
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]);

// Search query
const searchQuery = ref('');
const itemsPerPage = ref(5);
const currentPage = ref(1);

// Sorting
const sortColumn = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc'>('asc');

// Filtered and sorted people
const filteredPeople = computed(() => {
    return people.value.filter((person) => {
        return (
            person.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            person.email.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});

const sortedPeople = computed(() => {
    const sortedList = [...filteredPeople.value];
    if (sortColumn.value) {
        sortedList.sort((a, b) => {
            const valueA = a[sortColumn.value as keyof typeof a];
            const valueB = b[sortColumn.value as keyof typeof b];
            if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return sortedList;
});

// Paginated people
const totalPages = computed(() => {
    return Math.ceil(sortedPeople.value.length / itemsPerPage.value);
});

const paginatedPeople = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return sortedPeople.value.slice(start, end);
});

// Pagination controls
const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Handle sorting
const handleSort = (column: string) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn.value = column;
        sortDirection.value = 'asc';
    }
};

// Create Person Action
const createPerson = () => {
    router.push('/contacts/create');
};
</script>

<template>
    <PageLayout>
        <div class="">

            <!-- Search Input -->
            <div class="mb-6 flex justify-between items-center">
                <input v-model="searchQuery" type="text" placeholder="Search..."
                    class="border border-gray-300 rounded-md p-3 w-full lg:w-1/3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button @click="createPerson"
                    class="ml-4 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Create Person
                </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
                <table class="min-w-full table-auto">
                    <thead class="bg-gray-100">
                        <tr class="text-left text-gray-600">
                            <th @click="handleSort('name')"
                                class="cursor-pointer px-6 py-3 font-semibold text-sm hover:bg-gray-200">
                                Name
                            </th>
                            <th @click="handleSort('email')"
                                class="cursor-pointer px-6 py-3 font-semibold text-sm hover:bg-gray-200">
                                Email
                            </th>
                            <th @click="handleSort('role')"
                                class="cursor-pointer px-6 py-3 font-semibold text-sm hover:bg-gray-200">
                                Role
                            </th>
                            <th @click="handleSort('lastSeen')"
                                class="cursor-pointer px-6 py-3 font-semibold text-sm hover:bg-gray-200">
                                Last Seen
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="person in paginatedPeople" :key="person.email"
                            class="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
                            <td class="px-6 py-3 text-gray-700">{{ person.name }}</td>
                            <td class="px-6 py-3 text-gray-700">{{ person.email }}</td>
                            <td class="px-6 py-3 text-gray-700">{{ person.role }}</td>
                            <td class="px-6 py-3 text-gray-700">{{ person.lastSeen || 'Online' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="mt-6 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-gray-700">Items per page:</span>
                    <select v-model="itemsPerPage"
                        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div class="flex items-center gap-4">
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1"
                        class="bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Previous
                    </button>
                    <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages"
                        class="bg-gray-300 text-gray-600 p-2 rounded-md hover:bg-gray-400 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Next
                    </button>
                </div>
            </div>

        </div>

    </PageLayout>
</template>
