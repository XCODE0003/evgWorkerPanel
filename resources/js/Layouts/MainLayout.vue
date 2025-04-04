<script setup>
import Aside from '../Components/Aside.vue';
import Header from '../Components/Header.vue';
</script>

<template>
    <div class="md:flex">
        <Header />
        <Aside />
        <div class="flex-1 py-12 md:px-10">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
