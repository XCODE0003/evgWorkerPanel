<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import DefaultTable from '../Components/DefaultTable.vue';
import StaticCard from '../Components/StaticCard.vue';
const countryHeaders = [
    { label: 'Страна', key: 'country' },
    { label: 'Регистраций', key: 'registrations' },
    { label: 'Депозитов', key: 'deposits' },
    { label: 'Конверсия', key: 'conversion' },
];

const countryItems = [
    {
        country: '🇫🇷 Франция',
        registrations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        country: '🇫🇷 Франция',
        registrations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        country: '🇫🇷 Франция',
        registrations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        country: '🇫🇷 Франция',
        registrations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    }
];

const promoHeaders = [
    { label: 'Промокод', key: 'promo' },
    { label: 'Активаций', key: 'activations' },
    { label: 'Депозитов', key: 'deposits' },
    { label: 'Конверсия', key: 'conversion' },
];

const promoItems = [
    {
        promo: 'Promo',
        activations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        promo: 'Verylongpro',
        activations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        promo: 'Gopromocode',
        activations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    },
    {
        promo: 'Xavierso',
        activations: 134,
        deposits: 503,
        conversion: '$3,500.01'
    }
];

const GeneralStats = [
    {
        title: "$11,340.01",
        description: "Депозитов"
    },
    {
        title: "$11,340.01", 
        description: "Конверсия"
    },
    {
        title: "301",
        description: "Активаций промокодов"
    },
    {
        title: "120",
        description: "Верификаций"
    },
    {
        title: "74",
        description: "Повторный депозит"
    },
    {
        title: "74",
        description: "Пользователей"
    },
]
</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-10 items-start justify-start container mx-auto">
            <div class="flex flex-col items-start gap-2 ">
                <p class="text-secondary  font-medium">
                    Здравствуйте, Nickname
                </p>
                <p class=" text-2xl font-semibold text-center">
                    Ваша статистика
                </p>
            </div>
            <div class="flex flex-col w-full gap-4">
                <div class="grid grid-cols-2 gap-4 min-h-[370px] ">
                    <div class="bg-container p-8 rounded-2xl">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col gap-2">
                                <p class="text-secondary font-medium">
                                    Заработок за месяц
                                </p>
                                <h2 class="text-white text-2xl font-bold">
                                    $14,000.01
                                </h2>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center text-secondary gap-2">
                                    Домен
                                    <img src="/assets/images/project/arrow.svg" alt="arrow" class="w-3 h-3">
                                </div>
                                <div class="flex items-center text-secondary gap-2">
                                    Месяц
                                    <img src="/assets/images/project/arrow.svg" alt="arrow" class="w-3 h-3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-container bg_total_profit flex justify-center items-center p-8 rounded-2xl">
                        <div class="flex flex-col items-center justify-center gap-4">
                            <div class="text-5xl font-bold text-white">
                                $14,000.01
                            </div>
                            <div class="text-secondary font-medium">
                                Общий заработок с Highroller
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 min-h-[370px] ">
                    <div class="bg-container p-8 flex flex-col gap-6 rounded-2xl">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col gap-2">
                                <h2 class="text-white text-2xl font-bold">
                                    Топы по странам
                                </h2>
                            </div>
                        </div>
                        <DefaultTable :headers="countryHeaders" :items="countryItems" />
                        <DefaultTable :headers="promoHeaders" :items="promoItems" />
                    </div>
                    <div class="bg-container p-8 h-fit flex flex-col gap-6 rounded-2xl">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col gap-6 w-full">
                                <h2 class="text-white text-2xl font-bold">
                                    Общая статистика
                                </h2>
                                <div class="grid grid-cols-2 gap-2 w-full">
                                    <StaticCard v-for="item in GeneralStats" :key="item.title" :title="item.title" :description="item.description" />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>


<style scoped>

.bg_total_profit{
    background-image: url('/assets/images/statistics/bg_total_profit.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.btn_small {
    @apply w-8 h-8 hover:opacity-80 transition-opacity flex items-center justify-center duration-300 bg-blue_dark_stroke rounded-lg
}

.container_domain_add_domain {
    @apply flex border border-blue_dark_stroke p-2.5 px-4 rounded-xl items-center justify-between
}

.container_domain {
    @apply flex leading-snug bg-container_accent p-4 rounded-xl items-center justify-between;
}

td {
    @apply px-4 bg-container_accent
}
</style>