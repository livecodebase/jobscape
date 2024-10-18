<script setup>
import AppHeader from '~/components/main/AppHeader.vue';
import AppFooter from '~/components/main/AppFooter.vue';
</script>

<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>