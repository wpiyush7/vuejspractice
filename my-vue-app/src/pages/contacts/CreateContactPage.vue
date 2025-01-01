<script lang="ts" setup>
import { ref, computed } from 'vue';
import PageLayout from '../../layouts/PageLayout.vue';

// Define refs for the form inputs
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

// Computed property to check if the form is valid
const isFormValid = computed(() => {
  return name.value && email.value && message.value && /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value);
});

// Define a method to handle form submission
const handleSubmit = () => {
  if (isFormValid.value) {
    // Handle the form submission logic (e.g., send data to a server)
    alert('Form submitted successfully!');
  } else {
    alert('Please fill in all fields correctly.');
  }
};
</script>

<template>
  <PageLayout>
    <div class="max-w-xl mx-auto py-8">
      <h1 class="text-3xl font-bold mb-6">Create Contact</h1>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            type="text"
            v-model="name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email address"
          />
          <!-- Validation Message for Email -->
          <p v-if="email && !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)" class="text-red-500 text-xs mt-1">
            Please enter a valid email address.
          </p>
        </div>

        <!-- Phone Input -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            id="phone"
            type="tel"
            v-model="phone"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        <!-- Message Input -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="!isFormValid"
            class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </PageLayout>
</template>

<style scoped>
/* Optional custom styles can go here */
</style>
