<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import { shortenAddress } from '../../utils/text';
</script>

<template>
    <div class="flex flex-col w-full gap-4">


        <div class="flex flex-col ">

            <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
                <p class="text-2xl">Кошельки пользователя</p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between text-secondary text-xs">
                        <p>Монета</p>
                        <p>Адрес</p>
                    </div>
                    <div v-for="i in 5" class="flex flex-col gap-4 p-4 rounded-xl bg-container_accent">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <div class="flex items-center gap-2">
                                    <img src="/assets/images/logos/crypto/btc.svg" class="w-4 h-4 rounded-full">
                                    <p class="text-white font-medium">Bitcoin</p>
                                </div>
                                <p class="text-secondary">BTC</p>
                            </div>
                            <div class="flex items-center gap-2">
                                {{ shortenAddress('0x2a8asdakkjzn42c38') }}
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.66602 4.83398H1.99935C1.26402 4.83398 0.666016 5.43198 0.666016 6.16732V12.834C0.666016 13.5693 1.26402 14.1673 1.99935 14.1673H8.66602C9.40135 14.1673 9.99935 13.5693 9.99935 12.834V6.16732C9.99935 5.43198 9.40135 4.83398 8.66602 4.83398Z"
                                        fill="#E6EBF5" />
                                    <path
                                        d="M12.666 0.833984H5.99935C5.64573 0.833984 5.30659 0.97446 5.05654 1.22451C4.80649 1.47456 4.66602 1.8137 4.66602 2.16732V3.50065H9.99935C10.353 3.50065 10.6921 3.64113 10.9422 3.89118C11.1922 4.14122 11.3327 4.48036 11.3327 4.83398V10.1673H12.666C13.0196 10.1673 13.3588 10.0268 13.6088 9.77679C13.8589 9.52674 13.9993 9.18761 13.9993 8.83398V2.16732C13.9993 1.8137 13.8589 1.47456 13.6088 1.22451C13.3588 0.97446 13.0196 0.833984 12.666 0.833984Z"
                                        fill="#E6EBF5" />
                                </svg>

                            </div>
                        </div>
                        <p class="text-secondary ">Кошелек мамонта на сети BTC</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>