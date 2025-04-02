<script setup>
import { shortenAddress } from '../../utils/text';
import { ref, onMounted, onBeforeUnmount } from 'vue';

</script>


<template>
    <div class="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
        <div class="card flex flex-col gap-6 ">
            <div class="flex justify-between items-center">
                <p class="text-2xl font-semibold">
                    Текста
                </p>
                <div class="tag-small tag-danger">
                    Не сохранено
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">Ошибка верификации</span>
                </div>
                <div class="input-wrapper">
                    <textarea type="text" class="input-field" placeholder="Example"></textarea>

                </div>
                <p class="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequa
                </p>

            </div>
            <div class="h-[1px] bg-container_accent w-full">

            </div>
            <div class="flex h-full flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">Ошибка после верификации</span>
                </div>
                <div class="input-wrapper">
                    <textarea type="text" class="input-field" placeholder="Example"></textarea>

                </div>
                <p class="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequa
                </p>

            </div>
            <button class="btn w-fit btn-primary">
                Сохранить
            </button>
        </div>
        <div class="card flex flex-col gap-6 ">
            <div class="flex justify-between items-center">
                <p class="text-2xl font-semibold">
                    Значения
                </p>
                <div class="tag-small tag-danger">
                    Не сохранено
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">депозит для верификации</span>
                </div>
                <div class="input-wrapper">
                    $
                    <input type="text" class="input-field" placeholder="Example"></input>

                </div>
                <p class="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna
                </p>

            </div>
            <div class="h-[1px] bg-container_accent w-full">

            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">депозит после верификации</span>
                </div>
                <div class="input-wrapper">
                    $
                    <input type="text" class="input-field" placeholder="Example"></input>

                </div>
                <p class="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna
                </p>

            </div>
            <div class="h-[1px] bg-container_accent w-full">

            </div>
            <div class="flex flex-col h-full gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">авто-прохождение верификации</span>
                </div>
                <div class="input-wrapper">
                    <span class="font-semibold text-secondary">
                        СЕК.
                    </span>
                    <input type="text" class="input-field" placeholder="Example"></input>

                </div>
                <p class="text-secondary text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna
                </p>

            </div>
            <button class="btn w-fit btn-primary">
                Сохранить
            </button>
        </div>

    </div>

</template>

<style scoped>
.bg-coingate {
    background: rgba(80, 34, 237, 0.10);
}

.bg-coingate::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #5022ED;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-ramp {
    background: rgba(0, 167, 84, 0.10);
}

.bg-ramp::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #00A754;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-simplex {
    background: rgba(0, 204, 184, 0.10);
}

.bg-simplex::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #00CCB8;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-else {
    background: rgba(50, 108, 245, 0.10);
}

.bg-else::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #326CF5;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-bitpay {
    background: rgba(242, 83, 36, 0.10);
}

.bg-bitpay::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #F25324;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-paybis {
    background: rgba(255, 123, 0, 0.10);
}

.bg-paybis::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #FF7B00;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-simplex1 {
    background: rgba(0, 204, 184, 0.10);
}

.bg-simplex1::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #9cde21;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.bg-transak {
    background: rgba(0, 117, 255, 0.10);
}

.bg-transak::before {
    content: "";
    position: absolute;
    left: 13px;
    bottom: -16px;
    width: 32px;
    height: 32px;
    background: #0075FF;
    @apply rounded-full transition-all duration-300 ease-in-out;
    filter: blur(30px);
}

.shadow-bottom {
    position: relative;
}

.shadow-bottom::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent);
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 10;
}
</style>