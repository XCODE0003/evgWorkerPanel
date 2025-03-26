<script setup>
import Aside from '../Components/Aside.vue';
import Header from '../Components/Header.vue';
</script>

<template>
    <div class="md:flex">
        <Header />
        <Aside />
        <div class="flex-1 py-16 ">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
