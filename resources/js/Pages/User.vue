<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { ref } from 'vue';
import General from '../Components/User/General.vue';
import Verification from '../Components/User/Verification.vue';
import Notifications from '../Components/User/Notifications.vue';
import Transactions from '../Components/User/Transactions.vue';
import Wallet from '../Components/User/Wallet.vue';
const active_tab = ref('general')
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
                        Информация о пользователе
                    </p>
                </div>
                <div class="tab-container">
                    <button :class="{ 'active': active_tab === 'general' }" @click="active_tab = 'general'">
                        Данные
                    </button>
                    <button :class="{ 'active': active_tab === 'verification' }" @click="active_tab = 'verification'">
                        Верификация
                    </button>
                    <button :class="{ 'active': active_tab === 'notifications' }" @click="active_tab = 'notifications'">
                        Уведомления
                    </button>
                    <button :class="{ 'active': active_tab === 'transactions' }" @click="active_tab = 'transactions'">
                        Транзакции
                    </button>
                    <button :class="{ 'active': active_tab === 'wallets' }" @click="active_tab = 'wallets'">
                        Кошельки
                    </button>
                  
                </div>
            </div>
            <General v-if="active_tab === 'general'" />
             <Verification v-if="active_tab === 'verification'" />
             <Notifications v-if="active_tab === 'notifications'" />
             <Transactions v-if="active_tab === 'transactions'" />
             <Wallet v-if="active_tab === 'wallets'" />
          
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