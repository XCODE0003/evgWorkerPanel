<script setup>
import { ref } from 'vue';
import { shortenAddress } from '../../../utils/text';
const props = defineProps({
    wallet: {
        type: Object,
        required: true
    },
})
const editWallet = ref(false);

const handleKeydown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        editWallet.value = false;
        // Убираем фокус с текущего инпута
        event.target.blur();
    }
}
</script>

<template>
    <div class="p-2 pl-4 bg-container_accent gap-5 flex items-center justify-between rounded-xl">
        <div class="flex flex-shrink-0 items-center gap-1.5">
            <img :src="wallet.icon" class="w-4 h-4">
            <span class="">
                {{ wallet.name }}
            </span>
            <span class="text-secondary ">
                {{ wallet.label }}
            </span>
        </div>
        
        <transition name="fade" mode="out-in">
            <div @click="editWallet = true" v-if="!editWallet" key="view" 
                class="rounded-lg tag-small cursor-pointer tag-blue">
                {{ shortenAddress(wallet.address) }}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path
                        d="M13.442 3.14599C13.6956 2.89244 14.0394 2.75 14.398 2.75C14.7566 2.75 15.1005 2.89244 15.354 3.14599C15.6076 3.39954 15.75 3.74342 15.75 4.10199C15.75 4.46056 15.6076 4.80444 15.354 5.05799L9.29934 11.1127L6.75 11.75L7.38733 9.20066L13.442 3.14599Z"
                        stroke="#5681DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L13.5 6.5" stroke="#5681DB" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M9.375 2.75H9C5.27208 2.75 2.25 5.77208 2.25 9.5C2.25 13.2279 5.27208 16.25 9 16.25C12.7279 16.25 15.75 13.2279 15.75 9.5V9.125"
                        stroke="#5681DB" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            </div>
            <div v-else key="edit" class="bg-black_1 w-full rounded-xl p-2 flex flex-col gap-2 justify-between items-center">
                <div class="w-full justify-start items-start">
                    <input class="input-field w-full leading-none scroll-none" 
                           rows="1" 
                           placeholder="Адрес кошелька" 
                           v-model="wallet.address"
                           @blur="editWallet = false"
                           @keydown="handleKeydown">
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>