<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col min-h-[140px] w-full flex-1 gap-2 bg-container_accent p-4 rounded-xl">
        <p class="font-semibold text-white text-xl leading-none">{{ title }}</p>
        <p class="text-secondary font-medium">{{ description }}</p>
    </div>
</template>