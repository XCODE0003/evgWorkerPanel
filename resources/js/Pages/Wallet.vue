<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { ref } from 'vue';
import { shortenAddress } from '../utils/text';
import DepositTab from '../Components/Wallet/DepositTab.vue';
import WithdrawTab from '../Components/Wallet/WithdrawTab.vue';
const active_tab = ref('deposit')

</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-14 items-start justify-start container mx-auto">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col items-start gap-2 ">
                    <p class="text-secondary  font-medium">
                        Здравствуйте, Nickname
                    </p>
                    <p class=" text-2xl font-semibold text-center">
                        Ваши {{ active_tab === 'deposit' ? 'депозиты' : 'выводы' }}
                    </p>
                </div>
                <div class="tab-container">
                    <button :class="{ 'active': active_tab === 'deposit' }" @click="active_tab = 'deposit'">
                        Депозиты
                    </button>
                    <button :class="{ 'active': active_tab === 'withdraw' }" @click="active_tab = 'withdraw'">
                        Выводы
                    </button>
                </div>
            </div>
            <DepositTab v-if="active_tab === 'deposit'" />
            <WithdrawTab v-if="active_tab === 'withdraw'" />
          
        </div>
    </MainLayout>
</template>


<style >
.btn_small {
    @apply w-8 h-8 hover:opacity-80 transition-opacity flex items-center justify-center duration-300 bg-blue_dark_stroke rounded-lg
}

.container_domain_add_domain {
    @apply flex border border-blue_dark_stroke p-2.5 px-4 rounded-xl items-center justify-between
}

.container_domain {
    @apply flex leading-snug bg-container_accent p-4 rounded-xl items-center justify-between;
}

td:first-child {
    @apply pl-4
}

td:last-child {
    @apply pr-4
}

td {
    @apply px-0 bg-container_accent font-medium
}
</style>