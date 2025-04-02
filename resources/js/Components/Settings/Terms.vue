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
    <div class="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
        <div class="card flex h-fit flex-col gap-6 ">
            <p class="text-2xl font-semibold">
                Редактирование термсов
            </p>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">название</span>
                    <span class="text-xs">действия</span>
                </div>
                <div class="flex  overflow-y-auto flex-col gap-4">
                    <div v-for="item in 5" :key="item" class="flex bg-container_accent py-2 px-2 rounded-xl gap-6">
                        <div class="input-wrapper bg-black_1 border-none py-2 text-white flex-1">
                            <input type="text" class="input-field code hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out" placeholder="Example" value="%domain_capsed%">
                        </div>
                        <div class="flex items-center gap-2">
                            Выбрать
                            <svg width="10" height="21" viewBox="0 0 10 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.33398 3.16683C5.49182 3.1714 5.62711 3.23082 5.74887 3.35423L9.18066 6.91022C9.27987 7.01534 9.33398 7.13875 9.33398 7.28958C9.33398 7.59582 9.09949 7.8335 8.79734 7.8335C8.65304 7.8335 8.51775 7.77408 8.41403 7.66895L5.33398 4.46947L2.25394 7.66895C2.15022 7.77408 2.01944 7.8335 1.87063 7.8335C1.56848 7.8335 1.33398 7.59582 1.33398 7.28958C1.33398 7.14332 1.3881 7.01534 1.48731 6.91022L4.92361 3.35423C5.04086 3.22625 5.17615 3.16683 5.33398 3.16683Z"
                                    fill="#E6EBF5" />
                                <path
                                    d="M5.33398 17.8332C5.49182 17.8286 5.62711 17.7692 5.74887 17.6458L9.18066 14.0898C9.27987 13.9847 9.33398 13.8612 9.33398 13.7104C9.33398 13.4042 9.09949 13.1665 8.79734 13.1665C8.65304 13.1665 8.51775 13.2259 8.41403 13.331L5.33398 16.5305L2.25394 13.331C2.15022 13.2259 2.01944 13.1665 1.87063 13.1665C1.56848 13.1665 1.33398 13.4042 1.33398 13.7104C1.33398 13.8567 1.3881 13.9847 1.48731 14.0898L4.92361 17.6458C5.04086 17.7738 5.17615 17.8332 5.33398 17.8332Z"
                                    fill="#E6EBF5" />
                            </svg>

                        </div>
                    </div>
                    <div class="flex items-center justify-start gap-2">
                        <button class="btn py-2.5 px-4 btn-default">
                            Сбросить
                        </button>
                        <button class="btn py-2.5 px-4 btn-primary">
                            Сохранить
                        </button>
                    </div>
                </div>


            </div>
        </div>
        <div class="flex flex-col h-full w-full gap-4">
            <div class="card flex flex-col gap-6">
                <p class="text-2xl font-semibold">
                    Добавить термс
                </p>

                <div class="flex flex-col gap-2">
                    <div v-for="item in 8" :key="item" class="p-4 bg-container_accent rounded-xl flex flex-col gap-2">
                        <p class="text-white ">
                            %domain_capsed%
                        </p>
                        <p class="text-secondary">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos
                        </p>


                    </div>
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