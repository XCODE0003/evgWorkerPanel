<script setup>
import { ref } from 'vue';

const categories = ref([
    {
        name: 'Casino',
        isOpen: false,
        items: [
            {
                name: 'Originals',
                icon: 'casino.svg',
                href: '/casino/originals',
            },
            {
                name: 'Live',
                icon: 'casino.svg',
                href: '/casino/live',
            },
            {
                name: 'Table',
                icon: 'casino.svg',
                href: '/casino/table',
            },
            {
                name: 'Table',
                icon: 'casino.svg',
                href: '/casino/table',
            },

        ]
    },
    {
        name: 'Profile',
        isOpen: false,
        items: [
            {
                name: 'Account',
                icon: 'profile.svg',
                href: '/profile/account',
            },
            {
                name: 'VIP Club',
                icon: 'vip.svg',
                href: '/profile/vip',
            }
        ]

    },
    {
        name: 'More',
        isOpen: false,
        items: [
            {
                name: 'About us',
                icon: 'profile.svg',
                href: '/profile/account',
            },
            {
                name: 'Promotions',
                icon: 'vip.svg',
                href: '/profile/vip',
            },
            {
                name: 'Sponsorships',
                icon: 'sponsor.svg',
                href: '/more/sponsorships',
            },
            {
                name: 'Feedback',
                icon: 'feedback.svg',
                href: '/more/feedback',
            },
            {
                name: 'Licenses & Security',
                icon: 'licenses.svg',
                href: '/more/licenses',
            }
        ]

    }

]);

const toggleCategory = (category) => {
    category.isOpen = !category.isOpen;
};
</script>

<template>
    <aside>
        <div class="aside-content">
            <div class="flex gap-2 items-center px-6 py-8 text-2xl font-semibold">
                <img src="/assets/images/project/logo.svg" alt="logo" class="w-8 h-8">
                Acronym
            </div>
            <div class="flex gap-2 items-center px-6 py-8 border-y border-container font-semibold">
                <img src="/assets/images/project/test_avatar.png" alt="logo" class="w-12 h-12 rounded-full">
                <div class="flex flex-col gap-2">
                    <p class="text-white font-semibold leading-none">Nickname</p>
                    <div class="px-2 py-1 bg-blue_dark rounded-lg w-fit text-primary text-sm">
                        60%
                    </div>
                </div>
            </div>
            <div class="pt-8 px-6 flex flex-col gap-6">

                <div class="aside-item" v-for="category in categories" :key="category.name">
                    <div class="aside-item-title flex items-center justify-between" @click="toggleCategory(category)">
                        <span>{{ category.name }}</span>
                        <div class="aside-item-icon-container">
                            <img src="/assets/images/project/arrow.svg"
                                :class="['transition-transform duration-300', { 'rotate-180': category.isOpen }]"
                                alt="arrow">
                        </div>
                    </div>
                    <transition name="slide">
                        <div class="aside-items" v-show="category.isOpen">
                            <div class="aside-item-content" v-for="item in category.items" :key="item.name">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.88235 11.5692V13.5385C5.17647 13.5385 4.70588 14.0308 4.70588 14.7692C4.70588 15.5077 5.17647 16 5.88235 16H8.23529C8.94118 16 9.41177 15.5077 9.41177 14.7692C9.41177 14.0308 8.94118 13.5385 8.23529 13.5385V11.5692C8.82353 12.0615 9.64706 12.3077 10.3529 12.3077C11.2941 12.3077 12.2353 11.9385 12.9412 11.2C13.6471 10.4615 14 9.47692 14 8.49231C14 7.50769 13.6471 6.52308 12.9412 5.78462L7.88235 0.369231C7.41176 -0.123077 6.70588 -0.123077 6.23529 0.369231L1.05882 5.66154C0.352941 6.4 0 7.38462 0 8.36923C0 9.35385 0.352941 10.3385 1.05882 11.0769C2.35294 12.5538 4.47059 12.6769 5.88235 11.5692Z"
                                            fill="currentColor" />
                                    </svg>
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

            </div>

        </div>
    </aside>
</template>

<style scoped>



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
</style>
