<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import Toggle from '../Components/Global/Toggle.vue';
import { ref } from 'vue';

const settings = ref({
    refund: false
})

</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-10 items-start justify-start container mx-auto">
            <div class="flex flex-col items-start gap-2 ">
                <p class="text-secondary  font-medium">
                    Здравствуйте, Nickname
                </p>
                <p class=" text-2xl font-semibold text-center">
                    Ваши промокоды
                </p>
            </div>
            <div class="flex  flex-col w-full gap-4">
                <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
                    <p class="text-2xl">Добавление промокода</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center text-secondary uppercase justify-between">
                            <span class="text-xs">введите промокода</span>
                            <span class="text-xs">0/256</span>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" class="input-field" placeholder="Введите промокод">
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center text-secondary uppercase justify-between">
                            <span class="text-xs">введите сумму</span>
                            <span class="text-xs">до $1,000</span>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" class="input-field" placeholder="Введите сумму">
                        </div>
                        <Toggle v-model="settings.refund" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" label="Отыгрыш" color="primary" />
                    </div>
                    <button class="btn btn-primary w-fit">
                        <span>
                            Добавить
                        </span>
                    </button>
                </div>
                <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
                    <p class="text-2xl">Найти домен</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center text-secondary uppercase justify-between">
                            <span class="text-xs">Найти домен</span>
                            <span class="text-xs">Результатов 26</span>
                        </div>
                        <div class="input-wrapper">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.04632 6.252C4.11597 3.68352 6.62221 2.00753 9.4045 2.0001C12.4032 1.98431 15.0695 3.90504 16.0042 6.75432C16.939 9.6036 15.9286 12.7305 13.5033 14.4941C11.078 16.2577 7.79194 16.2551 5.3695 14.4876L3.2095 16.6476C2.98989 16.8669 2.63412 16.8669 2.41451 16.6476C2.19516 16.428 2.19516 16.0722 2.41451 15.8526L4.507 13.7601C2.55243 11.78 1.97667 8.82047 3.04632 6.252ZM4.04918 11.1268C4.94729 13.2911 7.06131 14.7006 9.4045 14.6976V14.6676C12.5847 14.6635 15.1664 12.0952 15.187 8.9151C15.19 6.5719 13.7805 4.45788 11.6162 3.55977C9.45195 2.66167 6.95975 3.15656 5.30286 4.81345C3.64597 6.47035 3.15108 8.96255 4.04918 11.1268Z"
                                    fill="#5D6880" />
                            </svg>

                            <input type="text" class="input-field" placeholder="Введите домен">
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-left text-secondary text-sm  ">
                                        <th class="pb-4 pl-4">Промокод</th>
                                        <th class="pb-4">Сумма</th>
                                        <th class="pb-4">Депозитов</th>
                                        <th class="pb-4">Активаций</th>
                                        <th class="pb-4 text-right">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <td class="py-4">BONUS100</td>
                                        <td class="py-4">100$</td>
                                        <td class="py-4">150</td>
                                        <td class="py-4">250</td>
                                        <td class="py-4 flex items-center justify-end gap-2">
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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