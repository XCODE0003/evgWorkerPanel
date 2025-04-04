<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import EarningChart from '../Components/Charts/EarningChart.vue';
</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-10 items-start justify-start container mx-auto">
            <div class="flex flex-col gap-2 ">
                <p class="text-secondary  font-medium">
                    Здравствуйте, Nickname
                </p>
                <p class=" text-2xl font-semibold text-center">
                    Ваш личный кабинет
                </p>
            </div>
            <div class="flex flex-col w-full gap-4">
                <div class="min-h-[320px] bmw_bg w-full bg-container p-8  rounded-2xl flex flex-col justify-between">
                    <div class="h-full">
                        <div class="h-full max-w-[350px] leading-10 md:text-[32px] text-[24px] font-bold ">
                            Acronym - твой шанс
                            на настоящую победу
                        </div>
                    </div>
                    <button class="btn btn-secondary w-fit">
                        <span>
                            Приступить
                        </span>
                    </button>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-[30px] ">
                    <div class="bg-container py-8 flex flex-col  rounded-2xl">
                        <div class="flex items-start px-8 justify-between">
                            <div class="flex flex-col gap-2">
                                <p class="text-secondary font-medium">
                                    Заработок за месяц
                                </p>
                                <h2 class="text-white text-2xl font-bold">
                                    $14,000.01
                                </h2>
                            </div>
                            <div class="flex items-center text-secondary gap-2">
                                Месяц
                                <img src="/assets/images/project/arrow.svg" alt="arrow" class="w-3 h-3">
                            </div>
                        </div>
                        <div class="px-2">
                            <EarningChart />
                        </div>
                    </div>
                    <div class="bg-container p-8 flex flex-col gap-4 rounded-2xl">
                        <div class="flex items-start justify-between">
                            <div class="flex flex-col gap-2">
                                <p class="text-secondary font-medium">
                                    Лучшие домены
                                </p>

                            </div>


                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="container_domain">
                                <span>Domain08.com</span>
                                <span>Регистраций 5</span>
                            </div>
                            <div class="container_domain">
                                <span class="">Domain08.com</span>
                                <span class="">Регистраций 5</span>
                            </div>
                            <div v-for="i in 3" :key="i" class="container_domain_add_domain">
                                <span class="">Добавить домен</span>
                                <button class="btn_small">
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.25 9.5C2.25 5.77208 5.27208 2.75 9 2.75C12.7279 2.75 15.75 5.77208 15.75 9.5C15.75 13.2279 12.7279 16.25 9 16.25C5.27208 16.25 2.25 13.2279 2.25 9.5Z"
                                            stroke="#E6EBF5" stroke-width="1.5" />
                                        <path d="M6 9.5H12M9 6.5L9 12.5" stroke="#E6EBF5" stroke-width="1.5"
                                            stroke-linecap="round" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
                    <p class="text-2xl">Последние регистрации</p>
                    <div class="flex  flex-col gap-4">
                        <div class="flex items-center text-secondary uppercase justify-between">
                            <span class="text-xs">Логин</span>
                            <span class="text-xs">ДАТА РЕГИСТРАЦИИ</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div v-for="i in 5" :key="i" class="p-4 bg-container_accent hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-between rounded-xl">
                                <span>
                                    username
                                </span>
                                <span>
                                    05.11.2024 16:30
                                </span>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-secondary">Показано 1 из 5</span>

                        <div class="flex items-center gap-2">
                            <button class="btn_small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M4 8C4 7.76949 4.08948 7.57288 4.27532 7.39661L9.64405 2.22373C9.78859 2.07458 9.98132 2 10.2016 2C10.649 2 11 2.33898 11 2.78644C11 3.00339 10.9105 3.2 10.7591 3.34915L5.92035 8L10.7591 12.6508C10.9105 12.8068 11 13.0034 11 13.2203C11 13.661 10.649 14 10.2016 14C9.98132 14 9.78859 13.9254 9.64405 13.7763L4.27532 8.60339C4.08948 8.42712 4.00688 8.23051 4 8Z"
                                        fill="#6A88CC" />
                                </svg>
                            </button>

                            <button class="btn_small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M12 8C12 7.76949 11.9105 7.57288 11.7247 7.39661L6.35595 2.22373C6.21141 2.07458 6.01868 2 5.79843 2C5.35103 2 5 2.33898 5 2.78644C5 3.00339 5.08948 3.2 5.2409 3.34915L10.0796 8L5.2409 12.6508C5.08948 12.8068 5 13.0034 5 13.2203C5 13.661 5.35103 14 5.79843 14C6.01868 14 6.21141 13.9254 6.35595 13.7763L11.7247 8.60339C11.9105 8.42712 11.9931 8.23051 12 8Z"
                                        fill="#E6EBF5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </MainLayout>
</template>


<style scoped>
.btn_small {
    @apply w-8 h-8 hover:opacity-80 transition-opacity flex items-center justify-center duration-300 bg-blue_dark_stroke rounded-lg
}

.container_domain_add_domain {
    @apply flex border border-blue_dark_stroke p-2.5 px-4 rounded-xl items-center justify-between
}

.container_domain {
    @apply flex leading-snug bg-container_accent hover:opacity-80 transition-opacity cursor-pointer p-4 rounded-xl items-center justify-between;
}

.bmw_bg {
    background-image: url('/assets/images/main/bmw_bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>