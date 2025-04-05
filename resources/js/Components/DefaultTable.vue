<script setup>
defineProps({
    headers: {
        type: Array,
        required: true
    },
    items: {
        type: Array,
        required: true
    },

});

const emit = defineEmits(['select-item']);

</script>

<template>
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead>
                <tr class="text-left text-secondary text-sm">
                    <th v-for="(header, index) in headers" :key="index" class="pb-4">
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, rowIndex) in items" :key="rowIndex" class="">
                    <td v-for="(header, colIndex) in headers" :key="colIndex"
                        class="py-4  font-medium bg-container_accent">
                        <span v-if="header.key === 'status'"
                            :class="item[header.key] === 'Выключен' ? 'text-red-500' : ''">
                            {{ item[header.key] }}
                        </span>
                        <span v-else-if="header?.key === 'promo'" class="flex code items-center gap-2">
                            <div class="max-w-[100px] truncate overflow-hidden">
                                {{ item[header.key] }}
                            </div>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 4.8335H1.33333C0.598 4.8335 0 5.4315 0 6.16683V12.8335C0 13.5688 0.598 14.1668 1.33333 14.1668H8C8.73533 14.1668 9.33333 13.5688 9.33333 12.8335V6.16683C9.33333 5.4315 8.73533 4.8335 8 4.8335Z"
                                    fill="#E6EBF5" />
                                <path
                                    d="M12 0.833496H5.33333C4.97971 0.833496 4.64057 0.973972 4.39052 1.22402C4.14048 1.47407 4 1.81321 4 2.16683V3.50016H9.33333C9.68695 3.50016 10.0261 3.64064 10.2761 3.89069C10.5262 4.14074 10.6667 4.47987 10.6667 4.8335V10.1668H12C12.3536 10.1668 12.6928 10.0264 12.9428 9.7763C13.1929 9.52626 13.3333 9.18712 13.3333 8.8335V2.16683C13.3333 1.81321 13.1929 1.47407 12.9428 1.22402C12.6928 0.973972 12.3536 0.833496 12 0.833496Z"
                                    fill="#E6EBF5" />
                            </svg>

                        </span>
                        <template v-else>
                            {{ item[header.key] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
td:first-child,
th:first-child {}

td:last-child,
th:last-child {
    @apply pl-4 text-right
}
</style>