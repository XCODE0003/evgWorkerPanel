<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import InputAddress from './Settings/InputAddress.vue';
const isScrolledToBottom = ref(false);
const scrollableContent = ref(null);

const checkScroll = () => {
    if (!scrollableContent.value) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollableContent.value;
    isScrolledToBottom.value = Math.abs(scrollHeight - scrollTop - clientHeight) <= 1;
};

onMounted(() => {
    checkScroll();

    window.addEventListener('resize', checkScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScroll);
});



const wallets = ref([
    {
        name: 'Bitcoin',
        label: 'BTC',
        address: 'TUQGHicL35jS739VmksqjFYARHnbLs2kv8',
        icon: '/assets/images/logos/crypto/btc.svg'
    },
    {
        name: 'Ripple',
        label: 'XRP',
        address: '0x4ce6sadasdasdaÍÅ79afaa',
        icon: '/assets/images/logos/crypto/xrp.svg'
    },
    {
        name: 'Ethereum',
        label: 'ETH',
        address: '0x4ce6sadasdasdaÍÅ79afaa',
        icon: '/assets/images/logos/crypto/eth.svg'
    },
    {
        name: 'Binance Smart',
        label: 'BSC',
        address: '0x4ce6asdalsdmalasdmaksd79afaa',
        icon: '/assets/images/logos/crypto/bnb.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },
    {
        name: 'Tron',
        label: 'TRX',
        address: '0x4ce6asdasdasdlamsldmmkzxc79afaa',
        icon: '/assets/images/logos/crypto/trx.svg'
    },

])
</script>


<template>
    <div class="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
        <div class="card flex flex-col gap-6 ">
            <p class="text-2xl font-semibold">
                Кошельки
            </p>
            <div :class="{ 'shadow-bottom': !isScrolledToBottom }" class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">период</span>
                    <span class="text-xs">сумма</span>
                </div>
                <div @scroll="checkScroll" ref="scrollableContent"
                    class="flex max-h-[330px] overflow-y-auto flex-col gap-2">
                    <InputAddress v-for="item in wallets" :key="item" :wallet="item" />
                </div>


            </div>
        </div>
        <div class="flex flex-col h-full w-full gap-4">
            <div class="w-full h-full bg-container p-8 gap-6 rounded-2xl flex flex-col ">
                <p class="text-2xl">Изменение пароля</p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">Старый пароль</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Example">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.482 9.15631C16.8908 9.65271 16.8908 10.3473 16.482 10.8437C15.3577 12.2086 12.8781 14.75 9.99977 14.75C7.12148 14.75 4.64182 12.2086 3.51758 10.8437C3.10872 10.3473 3.10872 9.65271 3.51758 9.15631C4.64182 7.79136 7.12149 5.25 9.99977 5.25C12.8781 5.25 15.3577 7.79136 16.482 9.15631Z"
                                stroke="currentColor" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="currentColor" stroke-width="1.58333" />
                        </svg>

                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">Новый пароль</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Example">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.482 9.15631C16.8908 9.65271 16.8908 10.3473 16.482 10.8437C15.3577 12.2086 12.8781 14.75 9.99977 14.75C7.12148 14.75 4.64182 12.2086 3.51758 10.8437C3.10872 10.3473 3.10872 9.65271 3.51758 9.15631C4.64182 7.79136 7.12149 5.25 9.99977 5.25C12.8781 5.25 15.3577 7.79136 16.482 9.15631Z"
                                stroke="currentColor" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="currentColor" stroke-width="1.58333" />
                        </svg>
                    </div>

                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">повторите Новый пароль</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Example">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.482 9.15631C16.8908 9.65271 16.8908 10.3473 16.482 10.8437C15.3577 12.2086 12.8781 14.75 9.99977 14.75C7.12148 14.75 4.64182 12.2086 3.51758 10.8437C3.10872 10.3473 3.10872 9.65271 3.51758 9.15631C4.64182 7.79136 7.12149 5.25 9.99977 5.25C12.8781 5.25 15.3577 7.79136 16.482 9.15631Z"
                                stroke="currentColor" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="currentColor" stroke-width="1.58333" />
                        </svg>
                    </div>

                </div>
                <button class="btn btn-primary w-fit">
                    <span>
                        Добавить
                    </span>
                </button>
            </div>

        </div>
        <div class="card flex md:col-span-2 flex-col gap-6 ">
            <div class="flex max-md:flex-col-reverse md:justify-between md:items-center justify-start items-start">
                <div class="flex flex-col gap-2">
                    <p class="text-secondary ">
                        Google Authenticator
                    </p>
                    <p class="text-2xl font-semibold">
                        Двухфакторная аутентификация
                    </p>
                </div>
                <div class="tag-small tag-danger">
                    Выключено
                </div>
            </div>
            <div class="flex max-md:flex-col md:flex-row gap-4 ">
                <div class="p-4 rounded-xl bg-white  w-fit h-fit flex-shrink-0">
                    <img src="/assets/images/project/testqr.svg" alt="qr" class="w-[128px] h-[128px]">
                </div>
                <div class="flex max-md:flex-col w-full items-start flex-col gap-6">
                    <div class="flex w-full flex-col gap-2">
                        <label for="code" class="text-xs text-secondary uppercase">секретный ключ</label>
                        <div class="flex w-full px-3 py-2 bg-container_accent rounded-lg justify-between items-center ">
                            <span>ZMczvgVnRqWZNpCz</span>
                            <svg class="cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
                                width="14" height="15" viewBox="0 0 14 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.66675 4.8335H2.00008C1.26475 4.8335 0.666748 5.4315 0.666748 6.16683V12.8335C0.666748 13.5688 1.26475 14.1668 2.00008 14.1668H8.66675C9.40208 14.1668 10.0001 13.5688 10.0001 12.8335V6.16683C10.0001 5.4315 9.40208 4.8335 8.66675 4.8335Z"
                                    fill="#E6EBF5" />
                                <path
                                    d="M12.6667 0.833496H6.00008C5.64646 0.833496 5.30732 0.973972 5.05727 1.22402C4.80722 1.47407 4.66675 1.81321 4.66675 2.16683V3.50016H10.0001C10.3537 3.50016 10.6928 3.64064 10.9429 3.89069C11.1929 4.14074 11.3334 4.47987 11.3334 4.8335V10.1668H12.6667C13.0204 10.1668 13.3595 10.0264 13.6096 9.7763C13.8596 9.52626 14.0001 9.18712 14.0001 8.8335V2.16683C14.0001 1.81321 13.8596 1.47407 13.6096 1.22402C13.3595 0.973972 13.0204 0.833496 12.6667 0.833496Z"
                                    fill="#E6EBF5" />
                            </svg>

                        </div>
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <label for="code" class="text-xs text-secondary uppercase">totp-код</label>
                        <div class="input-wrapper">
                            <input type="text" class="input-field" placeholder="Example">

                        </div>

                    </div>
                    <button class="btn btn-primary w-fit">
                        <span>
                            Сохранить
                        </span>
                    </button>
                </div>
            </div>
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