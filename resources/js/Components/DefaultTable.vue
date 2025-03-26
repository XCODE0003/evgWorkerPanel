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
                    <td v-for="(header, colIndex) in headers" :key="colIndex" class="py-4  font-medium bg-container_accent">
                        <span v-if="header.key === 'status'" :class="item[header.key] === 'Выключен' ? 'text-red-500' : ''">
                            {{ item[header.key] }}
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
td:first-child, th:first-child {
}
td:last-child, th:last-child {
    @apply pl-4 text-right
}
</style>