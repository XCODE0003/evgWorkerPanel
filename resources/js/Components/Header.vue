<script setup>
import { ref, markRaw, watch, onMounted, onUnmounted } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';
import MainIcon from '@/Components/Icons/Aside/main.vue';
import DomainIcon from '@/Components/Icons/Aside/domain.vue';
import StatisticIcon from '@/Components/Icons/Aside/statistic.vue';
import UsersIcon from '@/Components/Icons/Aside/user.vue';
import SettingIcon from '@/Components/Icons/Aside/setting.vue';
import WalletIcon from '@/Components/Icons/Aside/wallet.vue';
import PromoIcon from '@/Components/Icons/Aside/promo.vue';
import SupportIcon from '@/Components/Icons/Aside/support.vue';
const page = usePage();
const thisPage = page.url;
const categories = ref([
    {
        name: 'ОБЩЕЕ',
        isOpen: true,
        items: [
            {
                name: 'Главная',
                icon: markRaw(MainIcon),
                href: '/',
                isActive: thisPage === '/'
            },
            {
                name: 'Домены',
                icon: markRaw(DomainIcon),
                href: '/domain',
                isActive: thisPage === '/domain'
            },


        ]
    },
    {
        name: 'Показатели',
        isOpen: true,
        items: [
            {
                name: 'Статистика',
                icon: markRaw(StatisticIcon),
                href: '/statistics',
                isActive: thisPage === '/statistics'
            },
            {
                name: 'Пользователи',
                icon: markRaw(UsersIcon),
                href: '/users',
                isActive: thisPage === '/users'
            }
        ]

    },
    {
        name: 'Средства',
        isOpen: true,
        items: [
            {
                name: 'Кошелек',
                icon: markRaw(WalletIcon),
                href: '/wallet',
                isActive: thisPage === '/wallet'
            },

        ]

    },
    {
        name: 'Прочее',
        isOpen: true,
        items: [
            {
                name: 'Промокоды',
                icon: markRaw(PromoIcon),
                href: '/promocode',
                isActive: thisPage === '/promocode'
            },
            {
                name: 'Тех. поддержка',
                icon: markRaw(SupportIcon),
                href: '/support',
                isActive: thisPage === '/support'
            },
            {
                name: 'Настройки',
                icon: markRaw(SettingIcon),
                href: '/settings',
                isActive: thisPage === '/settings'
            },

        ]

    }

]);

const toggleCategory = (category) => {
    category.isOpen = !category.isOpen;
};

const isOpen = ref(false);

watch(isOpen, (value) => {
    if (value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
onUnmounted(() => {
    document.body.style.overflow = 'auto';
});
</script>

<template>
    <header class="max-md:flex hidden container mx-auto">
        <div class="flex flex-col relative w-full border-b border-container ">
            <div class="flex z-50 justify-between w-full items-center">
                <div class="flex gap-2 items-center  py-8 text-2xl font-semibold">
                    <img src="/assets/images/project/logo.svg" alt="logo" class="w-8 h-8">
                    Acronym
                </div>
                <div @click="isOpen = !isOpen"
                    class="flex gap-2 items-center  py-8 border-y border-container font-semibold">
                    <svg v-show="!isOpen" width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H21M1 11H21M1 21H21" stroke="#E8EDFF" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <svg v-show="isOpen" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.8373 18.8389L9.99872 10M9.99872 10L1.16016 1.16119M9.99872 10L1.16016 18.8389M9.99872 10L18.8373 1.16119"
                            stroke="#E8EDFF" stroke-width="2" stroke-linecap="round" />
                    </svg>

                </div>
            </div>

            <transition name="slide">
                <div v-show="isOpen" class="pt-28 overflow-auto pb-10 z-40 fixed top-0 left-0 w-full h-full bg-black px-6  flex-col gap-6">

                    <div class="flex flex-col gap-6 container mx-auto">
                        <div class="aside-item" v-for="category in categories" :key="category.name">
                            <div class="aside-item-title flex uppercase text-xs text-secondary items-center justify-between"
                                @click="toggleCategory(category)">
                                <span>{{ category.name }}</span>
                                <div class="aside-item-icon-container">
                                    <img src="/assets/images/project/arrow.svg"
                                        :class="['transition-transform duration-300', { 'rotate-180': category.isOpen }]"
                                        alt="arrow">
                                </div>
                            </div>
                            <transition name="slide">
                                <div class="aside-items" v-show="category.isOpen">
                                    <Link :href="item.href" class="aside-item-content" v-for="item in category.items"
                                        :key="item.name" :class="{ 'active': item.isActive }">
                                    <div class="flex items-center gap-2">
                                        <component :is="item.icon" class="w-5 h-5" />
                                        {{ item.name }}
                                    </div>
                                    </Link>
                                </div>
                            </transition>
                        </div>
                    </div>

                </div>
            </transition>

        </div>
    </header>
</template>

<style scoped>

.aside-item {
    @apply flex flex-col gap-4
}

.aside-item-content.active {
    @apply bg-primary text-white
}

.aside-item-content {
    @apply py-3 px-4 text-secondary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 cursor-pointer
}

.aside-items::-webkit-scrollbar {
    width: 6px;
}

.aside-items::-webkit-scrollbar-track {
    background: transparent;
}

.aside-items::-webkit-scrollbar-thumb {
    background-color: rgba(41, 138, 255, 0.5);
    border-radius: 3px;
}

.aside-items {
    @apply flex flex-col gap-2
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
