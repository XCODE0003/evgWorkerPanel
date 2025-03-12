<script setup>
defineProps({
    progress: {
        type: Number,
        required: true
    },
    background: {
        type: String,
        required: false,
        default: 'bg-container_accent'
    }
})
</script>

<template>
    <div :class="background" class="rounded-full  h-4 w-full ">
        <div class="rounded-full progress-bar bg-primary h-full" :style="{ width: `${progress}%` }"></div>
    </div>
    
</template>

<style scoped>
.progress-bar {
    background-image: url('/assets/images/project/progressBar_bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
}
</style>