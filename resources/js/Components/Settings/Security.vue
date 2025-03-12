<script setup>
import { shortenAddress } from '../../utils/text';
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
    <div class="grid grid-cols-2  w-full gap-4">
        <div class="card flex flex-col gap-6 ">
            <p class="text-2xl font-semibold">
                Кошельки
            </p>
            <div :class="{ 'shadow-bottom': !isScrolledToBottom }" class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">период</span>
                    <span class="text-xs">сумма</span>
                </div>
                <div @scroll="checkScroll" ref="scrollableContent" class="flex max-h-[330px] overflow-y-auto flex-col gap-2">
                    <div v-for="item in wallets" :key="item"
                        class="p-2 pl-4 bg-container_accent flex items-center justify-between rounded-xl">
                        <div class="flex items-center gap-1.5">
                            <img :src="item.icon" class="w-4 h-4">
                            <span class="">
                                {{ item.name }}
                            </span>
                            <span class="text-secondary ">
                                {{ item.label }}
                            </span>
                        </div>
                        <div class="rounded-lg tag-small  tag-blue ">
                            {{ shortenAddress(item.address) }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"
                                fill="none">
                                <path
                                    d="M13.442 3.14599C13.6956 2.89244 14.0394 2.75 14.398 2.75C14.7566 2.75 15.1005 2.89244 15.354 3.14599C15.6076 3.39954 15.75 3.74342 15.75 4.10199C15.75 4.46056 15.6076 4.80444 15.354 5.05799L9.29934 11.1127L6.75 11.75L7.38733 9.20066L13.442 3.14599Z"
                                    stroke="#5681DB" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 5L13.5 6.5" stroke="#5681DB" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M9.375 2.75H9C5.27208 2.75 2.25 5.77208 2.25 9.5C2.25 13.2279 5.27208 16.25 9 16.25C12.7279 16.25 15.75 13.2279 15.75 9.5V9.125"
                                    stroke="#5681DB" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
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
                                stroke="#5D6880" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="#5D6880" stroke-width="1.58333" />
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
                                stroke="#5D6880" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="#5D6880" stroke-width="1.58333" />
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
                                stroke="#5D6880" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="#5D6880" stroke-width="1.58333" />
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