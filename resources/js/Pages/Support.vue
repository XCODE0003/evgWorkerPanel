<script setup>
import { ref, onMounted, watch } from 'vue';
import MainLayout from '../Layouts/MainLayout.vue';
import Message from '../Components/Chat/Message.vue';
import Tooltip from '../Components/UI/Tooltip.vue';
const isLaptop = ref(false);

onMounted(() => {
    if (window.innerWidth > 768 && window.innerWidth < 1600) {
        isLaptop.value = true;
    }
});
watch(window.innerWidth, () => {
    if (window.innerWidth > 768 && window.innerWidth < 1600) {
        isLaptop.value = true;
    } else {
        isLaptop.value = false;
    }
});
const showChat = ref(false);

</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-10 items-start justify-start container mx-auto">
            <div class="flex flex-col items-start gap-2 ">
                <p class="text-secondary  font-medium">
                    Здравствуйте, Nickname
                </p>
                <p class=" text-2xl font-semibold text-center">
                    Ваши сообщения
                </p>
            </div>
            <div v-if="!isLaptop" class="flex max-xl:flex-col gap-4 items-stretch justify-start w-full">
                <div class="bg-container p-8 flex flex-col gap-6 rounded-xl ">
                    <p class="text-2xl font-semibold">Активные чаты</p>
                    <div class="input-wrapper">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.04632 4.252C2.11597 1.68352 4.62221 0.00752806 7.4045 9.66389e-05C10.4032 -0.0156941 13.0695 1.90504 14.0042 4.75432C14.939 7.6036 13.9286 10.7305 11.5033 12.4941C9.07805 14.2577 5.79194 14.2551 3.3695 12.4876L1.2095 14.6476C0.989892 14.8669 0.634118 14.8669 0.414505 14.6476C0.195165 14.428 0.195165 14.0722 0.414505 13.8526L2.507 11.7601C0.552432 9.77998 -0.0233329 6.82047 1.04632 4.252ZM2.04918 9.1268C2.94729 11.2911 5.06131 12.7006 7.4045 12.6976V12.6676C10.5847 12.6635 13.1664 10.0952 13.187 6.9151C13.19 4.5719 11.7805 2.45788 9.61621 1.55977C7.45195 0.661669 4.95975 1.15656 3.30286 2.81345C1.64597 4.47035 1.15108 6.96255 2.04918 9.1268Z"
                                fill="#5D6880" />
                        </svg>

                        <input type="text" class="input-field" placeholder="exampleuser@gmail.com">
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="text-secondary">Всего: 233</p>
                        <div class="flex flex-col gap-2">
                            <div v-for="i in 10"
                                class="px-4 py-3 leading-none flex gap-2 items-center rounded-xl bg-container_accent">
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="8" height="8" rx="4" fill="#326CF5" />
                                </svg>
                                exampleuser@gmail.com
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
                <div class="bg-container p-6 md:p-9 flex flex-col gap-5 rounded-xl">
                    <div class="flex gap-12 border-b border-blue_dark_stroke/50 pb-4 items-start justify-between">
                        <div class="grid grid-cols-2 flex-wrap gap-2 items-center justify-center">
                            <div
                                class="px-4 py-3 w-fit leading-none flex gap-2 items-center rounded-xl bg-container_accent">
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="8" height="8" rx="4" fill="#326CF5" />
                                </svg>
                                exampleuser@gmail.com
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 7C6.23675 6.99314 6.43968 6.90402 6.62232 6.7189L11.77 1.38492C11.9188 1.22723 12 1.04212 12 0.815867C12 0.356513 11.6483 0 11.195 0C10.9786 0 10.7756 0.0891283 10.6201 0.246817L6 5.04603L1.37993 0.246817C1.22435 0.0891283 1.02818 0 0.80496 0C0.351747 0 0 0.356513 0 0.815867C0 1.03526 0.081172 1.22723 0.229988 1.38492L5.38444 6.7189C5.56032 6.91087 5.76325 7 6 7Z"
                                        fill="#5D6880" />
                                </svg>

                            </div>
                            <div
                                class="px-4 py-3 w-fit leading-none flex gap-2 items-center rounded-xl bg-container_accent text-secondary">
                                $15,503.21
                            </div>
                            <div
                                class="px-4 py-3 md:w-fit w-full flex-1 leading-none flex gap-2 items-center rounded-xl bg-container_accent ">
                                somedomain.com
                            </div>
                        </div>
                        <div
                            class="px-4 py-3 w-fit leading-none flex gap-2 items-center rounded-xl text-secondary bg-container_accent ">
                            Депозит: <span class="text-white">$30.00</span>
                        </div>
                    </div>
                    <div class="flex flex-col max-h-[500px] gap-2 overflow-y-auto">
                        <Message v-for="i in 10" :key="i"
                            :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'"
                            :me="true" />
                        <Message v-for="i in 10" :key="i" :message="'asdasdas'" :me="false" />
                    </div>
                    <div class="flex gap-2 items-center w-full">
                        <div class="input-wrapper flex-1">
                            <input type="text" class="input-field" placeholder="Сообщение">

                        </div>
                        <button class="btn btn-primary">
                            Отправить
                        </button>
                    </div>

                </div>
                <div class="bg-container p-8 flex flex-col gap-6 rounded-xl ">
                    <p class="text-2xl font-semibold">Активные чаты</p>
                    <div class="input-wrapper">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.04632 4.252C2.11597 1.68352 4.62221 0.00752806 7.4045 9.66389e-05C10.4032 -0.0156941 13.0695 1.90504 14.0042 4.75432C14.939 7.6036 13.9286 10.7305 11.5033 12.4941C9.07805 14.2577 5.79194 14.2551 3.3695 12.4876L1.2095 14.6476C0.989892 14.8669 0.634118 14.8669 0.414505 14.6476C0.195165 14.428 0.195165 14.0722 0.414505 13.8526L2.507 11.7601C0.552432 9.77998 -0.0233329 6.82047 1.04632 4.252ZM2.04918 9.1268C2.94729 11.2911 5.06131 12.7006 7.4045 12.6976V12.6676C10.5847 12.6635 13.1664 10.0952 13.187 6.9151C13.19 4.5719 11.7805 2.45788 9.61621 1.55977C7.45195 0.661669 4.95975 1.15656 3.30286 2.81345C1.64597 4.47035 1.15108 6.96255 2.04918 9.1268Z"
                                fill="#5D6880" />
                        </svg>

                        <input type="text" class="input-field" placeholder="exampleuser@gmail.com">
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="text-secondary">Всего: 233</p>
                        <div class="flex flex-col gap-2">
                            <div v-for="i in 10"
                                class="px-4 py-3 leading-none flex justify-between gap-2 items-center rounded-xl bg-container_accent">
                                <div class="">
                                    Preset023...
                                </div>
                                <div class="flex items-center justify-center gap-2">
                                    Выбрать
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.33301 2.66634C5.49084 2.67091 5.62613 2.73033 5.74789 2.85374L9.17968 6.40973C9.27889 6.51486 9.33301 6.63826 9.33301 6.7891C9.33301 7.09533 9.09851 7.33301 8.79637 7.33301C8.65206 7.33301 8.51677 7.27359 8.41305 7.16846L5.33301 3.96899L2.25296 7.16846C2.14924 7.27359 2.01846 7.33301 1.86965 7.33301C1.56751 7.33301 1.33301 7.09533 1.33301 6.7891C1.33301 6.64283 1.38712 6.51486 1.48633 6.40973L4.92264 2.85374C5.03989 2.72576 5.17517 2.66634 5.33301 2.66634Z"
                                            fill="#E6EBF5" />
                                        <path
                                            d="M5.33301 17.3337C5.49084 17.3291 5.62613 17.2697 5.74789 17.1463L9.17968 13.5903C9.27889 13.4851 9.33301 13.3617 9.33301 13.2109C9.33301 12.9047 9.09851 12.667 8.79637 12.667C8.65206 12.667 8.51677 12.7264 8.41305 12.8315L5.33301 16.031L2.25296 12.8315C2.14924 12.7264 2.01846 12.667 1.86965 12.667C1.56751 12.667 1.33301 12.9047 1.33301 13.2109C1.33301 13.3572 1.38712 13.4851 1.48633 13.5903L4.92264 17.1463C5.03989 17.2742 5.17517 17.3337 5.33301 17.3337Z"
                                            fill="#E6EBF5" />
                                    </svg>
                                </div>
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
            <div v-if="isLaptop" class="flex flex-col gap-4 items-stretch justify-start w-full">
                <div class="bg-container p-9 flex flex-col gap-5 rounded-xl">
                    <div
                        class="flex gap-2 max-md:flex-col md:gap-12 border-b border-blue_dark_stroke/50 pb-4 md:items-start md:justify-between">
                        <div class="flex md:grid md:grid-cols-2 gap-2 md:items-center md:justify-center">
                            <div
                                class="px-4 py-3 md:w-fit w-full leading-none flex gap-2 items-center rounded-xl bg-container_accent">
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="8" height="8" rx="4" fill="#326CF5" />
                                </svg>
                                exampleuser@gmail.com
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 7C6.23675 6.99314 6.43968 6.90402 6.62232 6.7189L11.77 1.38492C11.9188 1.22723 12 1.04212 12 0.815867C12 0.356513 11.6483 0 11.195 0C10.9786 0 10.7756 0.0891283 10.6201 0.246817L6 5.04603L1.37993 0.246817C1.22435 0.0891283 1.02818 0 0.80496 0C0.351747 0 0 0.356513 0 0.815867C0 1.03526 0.081172 1.22723 0.229988 1.38492L5.38444 6.7189C5.56032 6.91087 5.76325 7 6 7Z"
                                        fill="#5D6880" />
                                </svg>

                            </div>
                            <div
                                class="px-4 py-3 w-fit leading-none flex gap-2 items-center rounded-xl bg-container_accent text-secondary">
                                $15,503.21
                            </div>
                            <div
                                class="px-4 py-3 md:w-fit w-full flex-1 leading-none flex gap-2 items-center rounded-xl bg-container_accent ">
                                somedomain.com
                            </div>
                        </div>
                        <div
                            class="flex md:flex-col gap-2 max-md:justify-between max-md:items-center justify-end items-end">
                            <div
                                class="px-4 py-3 w-fit leading-none flex gap-2 items-center rounded-xl text-secondary bg-container_accent ">
                                Депозит: <span class="text-white">$30.00</span>
                            </div>
                            <Tooltip :text="showChat ? 'Скрыть чат' : 'Показать чат'" position="bottom">
                                <div @click="showChat = !showChat" :class="{ 'bg-red': !showChat }"
                                    class="w-8 h-8 hover:opacity-80 transition-colors duration-300 leading-none flex gap-2 items-center justify-center cursor-pointer rounded-lg bg-container_accent ">
                                    <svg v-if="showChat" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.86082 9.79928L2.2819 10.2761L2.86082 9.79928ZM15.1429 8.20072L14.564 8.67754L14.564 8.67754L15.1429 8.20072ZM2.86082 8.20072L3.43973 8.67754L3.43973 8.67754L2.86082 8.20072ZM15.1429 9.79929L14.564 9.32246L14.564 9.32246L15.1429 9.79929ZM13.7177 10.262C13.427 10.557 13.4304 11.0319 13.7254 11.3226C14.0204 11.6134 14.4953 11.6099 14.7861 11.3149L13.7177 10.262ZM8.1352 3.81872C7.72603 3.88317 7.44658 4.26711 7.51103 4.67628C7.57547 5.08545 7.95941 5.3649 8.36858 5.30046L8.1352 3.81872ZM9.00184 12.75C7.85749 12.75 6.74145 12.2418 5.74619 11.5258C4.75685 10.814 3.9499 9.94186 3.43973 9.32246L2.2819 10.2761C2.8368 10.9498 3.73697 11.9281 4.87017 12.7434C5.99745 13.5544 7.41939 14.25 9.00184 14.25V12.75ZM9.00184 5.25C10.1462 5.25 11.2622 5.7582 12.2575 6.47425C13.2468 7.18604 14.0538 8.05814 14.564 8.67754L15.7218 7.72389C15.1669 7.05018 14.2667 6.07193 13.1335 5.25663C12.0062 4.4456 10.5843 3.75 9.00184 3.75V5.25ZM3.43973 9.32246C3.28051 9.12915 3.28051 8.87085 3.43973 8.67754L2.2819 7.72389C1.66645 8.47112 1.66645 9.52888 2.2819 10.2761L3.43973 9.32246ZM15.7218 10.2761C16.3372 9.52888 16.3372 8.47112 15.7218 7.72389L14.564 8.67754C14.7232 8.87085 14.7232 9.12915 14.564 9.32246L15.7218 10.2761ZM14.564 9.32246C14.3388 9.59586 14.0534 9.92146 13.7177 10.262L14.7861 11.3149C15.1581 10.9374 15.4733 10.5778 15.7218 10.2761L14.564 9.32246ZM11.8498 11.8025C10.9577 12.3717 9.98962 12.75 9.00184 12.75V14.25C10.3716 14.25 11.6199 13.7285 12.6567 13.067L11.8498 11.8025ZM3.43973 8.67754C3.98264 8.01839 4.85931 7.07596 5.93249 6.34367L5.08703 5.10464C3.85059 5.94832 2.87069 7.00904 2.2819 7.72389L3.43973 8.67754ZM8.36858 5.30046C8.57832 5.26742 8.7895 5.25 9.00184 5.25V3.75C8.7072 3.75 8.41793 3.77419 8.1352 3.81872L8.36858 5.30046Z"
                                            fill="#E6EBF5" />
                                        <path d="M2.25 2.25L15.75 15.75" stroke="#E6EBF5" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8.41912 11.173C8.03762 11.0708 7.68975 10.87 7.41047 10.5907C7.13119 10.3114 6.93035 9.96353 6.82812 9.58203"
                                            stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.482 9.15631C16.8908 9.65271 16.8908 10.3473 16.482 10.8437C15.3577 12.2086 12.8781 14.75 9.99977 14.75C7.12148 14.75 4.64182 12.2086 3.51758 10.8437C3.10872 10.3473 3.10872 9.65271 3.51758 9.15631C4.64182 7.79136 7.12149 5.25 9.99977 5.25C12.8781 5.25 15.3577 7.79136 16.482 9.15631Z"
                                            stroke="#E6EBF5" stroke-width="1.58333" />
                                        <path
                                            d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                            stroke="#E6EBF5" stroke-width="1.58333" />
                                    </svg>


                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <div class="flex flex-col max-h-[500px] gap-2 overflow-y-auto">
                        <Message v-for="i in 10" :key="i"
                            :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'"
                            :me="true" />
                        <Message v-for="i in 10" :key="i" :message="'asdasdas'" :me="false" />
                    </div>
                    <div class="flex gap-2 items-center w-full">
                        <div class="input-wrapper flex-1">
                            <input type="text" class="input-field" placeholder="Сообщение">

                        </div>
                        <button class="btn btn-primary">
                            Отправить
                        </button>
                    </div>

                </div>
                <div class="grid grid-cols-2 gap-4">


                    <div class="bg-container p-8 flex flex-col gap-6 rounded-xl ">
                        <p class="text-2xl font-semibold">Активные чаты</p>
                        <div class="input-wrapper">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.04632 4.252C2.11597 1.68352 4.62221 0.00752806 7.4045 9.66389e-05C10.4032 -0.0156941 13.0695 1.90504 14.0042 4.75432C14.939 7.6036 13.9286 10.7305 11.5033 12.4941C9.07805 14.2577 5.79194 14.2551 3.3695 12.4876L1.2095 14.6476C0.989892 14.8669 0.634118 14.8669 0.414505 14.6476C0.195165 14.428 0.195165 14.0722 0.414505 13.8526L2.507 11.7601C0.552432 9.77998 -0.0233329 6.82047 1.04632 4.252ZM2.04918 9.1268C2.94729 11.2911 5.06131 12.7006 7.4045 12.6976V12.6676C10.5847 12.6635 13.1664 10.0952 13.187 6.9151C13.19 4.5719 11.7805 2.45788 9.61621 1.55977C7.45195 0.661669 4.95975 1.15656 3.30286 2.81345C1.64597 4.47035 1.15108 6.96255 2.04918 9.1268Z"
                                    fill="#5D6880" />
                            </svg>

                            <input type="text" class="input-field" placeholder="exampleuser@gmail.com">
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="text-secondary">Всего: 233</p>
                            <div class="flex flex-col gap-2">
                                <div v-for="i in 10"
                                    class="px-4 py-3 leading-none flex gap-2 items-center rounded-xl bg-container_accent">
                                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="8" height="8" rx="4" fill="#326CF5" />
                                    </svg>
                                    exampleuser@gmail.com
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

                    <div class="bg-container p-8 flex flex-col gap-6 rounded-xl ">
                        <p class="text-2xl font-semibold">Активные чаты</p>
                        <div class="input-wrapper">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.04632 4.252C2.11597 1.68352 4.62221 0.00752806 7.4045 9.66389e-05C10.4032 -0.0156941 13.0695 1.90504 14.0042 4.75432C14.939 7.6036 13.9286 10.7305 11.5033 12.4941C9.07805 14.2577 5.79194 14.2551 3.3695 12.4876L1.2095 14.6476C0.989892 14.8669 0.634118 14.8669 0.414505 14.6476C0.195165 14.428 0.195165 14.0722 0.414505 13.8526L2.507 11.7601C0.552432 9.77998 -0.0233329 6.82047 1.04632 4.252ZM2.04918 9.1268C2.94729 11.2911 5.06131 12.7006 7.4045 12.6976V12.6676C10.5847 12.6635 13.1664 10.0952 13.187 6.9151C13.19 4.5719 11.7805 2.45788 9.61621 1.55977C7.45195 0.661669 4.95975 1.15656 3.30286 2.81345C1.64597 4.47035 1.15108 6.96255 2.04918 9.1268Z"
                                    fill="#5D6880" />
                            </svg>

                            <input type="text" class="input-field" placeholder="exampleuser@gmail.com">
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="text-secondary">Всего: 233</p>
                            <div class="flex flex-col gap-2">
                                <div v-for="i in 10"
                                    class="px-4 py-3 leading-none flex justify-between gap-2 items-center rounded-xl bg-container_accent">
                                    <div class="">
                                        Preset023...
                                    </div>
                                    <div class="flex items-center justify-center gap-2">
                                        Выбрать
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.33301 2.66634C5.49084 2.67091 5.62613 2.73033 5.74789 2.85374L9.17968 6.40973C9.27889 6.51486 9.33301 6.63826 9.33301 6.7891C9.33301 7.09533 9.09851 7.33301 8.79637 7.33301C8.65206 7.33301 8.51677 7.27359 8.41305 7.16846L5.33301 3.96899L2.25296 7.16846C2.14924 7.27359 2.01846 7.33301 1.86965 7.33301C1.56751 7.33301 1.33301 7.09533 1.33301 6.7891C1.33301 6.64283 1.38712 6.51486 1.48633 6.40973L4.92264 2.85374C5.03989 2.72576 5.17517 2.66634 5.33301 2.66634Z"
                                                fill="#E6EBF5" />
                                            <path
                                                d="M5.33301 17.3337C5.49084 17.3291 5.62613 17.2697 5.74789 17.1463L9.17968 13.5903C9.27889 13.4851 9.33301 13.3617 9.33301 13.2109C9.33301 12.9047 9.09851 12.667 8.79637 12.667C8.65206 12.667 8.51677 12.7264 8.41305 12.8315L5.33301 16.031L2.25296 12.8315C2.14924 12.7264 2.01846 12.667 1.86965 12.667C1.56751 12.667 1.33301 12.9047 1.33301 13.2109C1.33301 13.3572 1.38712 13.4851 1.48633 13.5903L4.92264 17.1463C5.03989 17.2742 5.17517 17.3337 5.33301 17.3337Z"
                                                fill="#E6EBF5" />
                                        </svg>
                                    </div>
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
    @apply flex leading-snug bg-container_accent p-4 rounded-xl items-center justify-between;
}

td:first-child {
    @apply pl-4
}

td:last-child {
    @apply pr-4
}

td {
    @apply px-0 bg-container_accent
}
</style>