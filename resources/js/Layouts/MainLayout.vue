<script setup>
import Aside from '../Components/Aside.vue';
</script>

<template>
    <div class="flex">
        <Aside />
        <div class="flex-1 py-16 ">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
