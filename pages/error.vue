<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <!-- Main heading for the 404 error -->
        <h1 class="text-6xl font-bold text-gray-800">404 Not Found</h1>
        <p class="mt-4 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <nuxt-link to="/" class="mt-6 text-blue-500 hover:underline">Go back to Home</nuxt-link>
    </div>
</template>

<script setup>
// No additional logic is needed for a simple 404 error page.
// The setup is handled by Nuxt.js automatically.
</script>

<style scoped>
/* Additional styling can be added here if desired. */
</style>
