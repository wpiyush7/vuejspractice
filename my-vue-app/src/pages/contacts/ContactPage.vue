<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PageLayout from "../../layouts/PageLayout.vue";
import { useTable } from "../../composables/useTable";
import { peopleMock, Person } from "../../mocks/people.mock";
import Pagination from "../../components/pagination.vue";

const router = useRouter();
const people = ref<Person[]>(peopleMock);

const {
    searchQuery,
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedItems,
    handleSort,
    goToPage,
} = useTable(() => people.value, {
    searchableFields: ["name", "email"],
    itemsPerPage: 5,
});

const createPerson = () => {
    router.push("/contacts/create");
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
                        <tr v-for="person in paginatedItems" :key="person.email"
                            class="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
                            <td class="px-6 py-3 text-gray-700">{{ person.name }}</td>
                            <td class="px-6 py-3 text-gray-700">{{ person.email }}</td>
                            <td class="px-6 py-3 text-gray-700">{{ person.role }}</td>
                            <td class="px-6 py-3 text-gray-700">
                                {{ person.lastSeen || "Online" }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="mt-6 flex justify-between items-center">


                <Pagination :current-page="currentPage" :total-pages="totalPages" v-model:itemsPerPage="itemsPerPage"
                    @change="goToPage" />
            </div>
        </div>
    </PageLayout>
</template>
