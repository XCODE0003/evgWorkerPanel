<script setup>
import { ref } from 'vue';
import Toggle from '../Global/Toggle.vue';

const settings = ref([
    {
        label: 'Подкрутка',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: false
    },
    {
        label: 'Верифицирован',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: false
    },
    {
        label: 'Абуз промокодов',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: false
    },
    {
        label: 'Фейковый вывод',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: false
    },
    {
        label: 'Мультиаккаунт',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: false
    }
])

const payment_systems = ref([
    {
        label: 'Coingate',
        class: 'bg-coingate',
        image: '/assets/images/project/logos/coingate.svg',
        value: false
    },
    {
        label: 'Ramp',
        class: 'bg-ramp',
        image: '/assets/images/project/logos/ramp.svg',
        value: false
    },
    {
        label: 'Simplex',
        class: 'bg-simplex',
        image: '/assets/images/project/logos/simplex.svg',
        value: false
    },
    {
        label: 'Else',
        class: 'bg-else',
        image: '/assets/images/project/logos/else.svg',
        value: false
    },
    {
        label: 'Bitpay',
        class: 'bg-bitpay',
        image: '/assets/images/project/logos/bitpay.svg',
        value: false
    },
    {
        label: 'Paybis',
        class: 'bg-paybis',
        image: '/assets/images/project/logos/paybis.svg',
        value: false
    },
    {
        label: 'Simplex1',
        class: 'bg-simplex1',
        image: '/assets/images/project/logos/simplex.svg',
        value: false
    },
    {
        label: 'Transak',
        class: 'bg-transak',
        image: '/assets/images/project/logos/transak.svg',
        value: false
    }
])
function togglePaymentSystem(label) {
    payment_systems.value.find(system => system.label === label).value = !payment_systems.value.find(system => system.label === label).value
}
</script>


<template>
    <div class="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
        <div class="flex flex-col gap-8 flex-1">
            <div class="flex justify-between items-start">
                <div class="flex flex-col gap-4 ">
                    <img src="/assets/images/project/test_avatar.png" alt="logo" class="w-12 h-12 rounded-full">
                    <div class="flex flex-col gap-2">
                        <p class="text-white font-semibold text-lg leading-none">Nickname</p>
                        <p class="text-secondary font-medium">Регистрация: 11.12.2021</p>
                    </div>
                </div>
                <div class="tag-small tag-danger">
                    Не сохранено
                </div>

            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>
            <Toggle v-for="setting in settings" v-model="setting.value" :key="setting.label" :label="setting.label"
                :description="setting.description" />
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>


            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                    <p class="text-lg font-semibold">Константы</p>
                    <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1 gap-2">
                    <div class="flex flex-col gap-4 ">
                        <p class="text-xs font-medium uppercase text-secondary">
                            Минимальный депозит
                        </p>
                        <div class="input-wrapper">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" class="flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.78409 15.4545V0.90909H5.71591V15.4545H4.78409ZM7.47159 5.5625C7.41856 5.06629 7.19508 4.67992 6.80114 4.40341C6.41099 4.12689 5.90341 3.98864 5.27841 3.98864C4.83902 3.98864 4.46212 4.05492 4.14773 4.1875C3.83333 4.32008 3.5928 4.5 3.42614 4.72727C3.25947 4.95455 3.17424 5.21402 3.17045 5.50568C3.17045 5.74811 3.22538 5.95833 3.33523 6.13636C3.44886 6.31439 3.60227 6.46591 3.79545 6.59091C3.98864 6.71212 4.20265 6.81439 4.4375 6.89773C4.67235 6.98106 4.90909 7.05114 5.14773 7.10795L6.23864 7.38068C6.67803 7.48295 7.10038 7.62121 7.50568 7.79545C7.91477 7.9697 8.2803 8.18939 8.60227 8.45455C8.92803 8.7197 9.18561 9.03977 9.375 9.41477C9.56439 9.78977 9.65909 10.2292 9.65909 10.733C9.65909 11.4148 9.48485 12.0152 9.13636 12.5341C8.78788 13.0492 8.28409 13.4527 7.625 13.7443C6.9697 14.0322 6.17614 14.1761 5.24432 14.1761C4.33902 14.1761 3.55303 14.036 2.88636 13.7557C2.22348 13.4754 1.70455 13.0663 1.32955 12.5284C0.958333 11.9905 0.757576 11.3352 0.727273 10.5625H2.80114C2.83144 10.9678 2.95644 11.3049 3.17614 11.5739C3.39583 11.8428 3.68182 12.0436 4.03409 12.1761C4.39015 12.3087 4.78788 12.375 5.22727 12.375C5.68561 12.375 6.08712 12.3068 6.43182 12.1705C6.7803 12.0303 7.05303 11.8371 7.25 11.5909C7.44697 11.3409 7.54735 11.0492 7.55114 10.7159C7.54735 10.4129 7.45833 10.1629 7.28409 9.96591C7.10985 9.76515 6.86553 9.59848 6.55114 9.46591C6.24053 9.32955 5.87689 9.20833 5.46023 9.10227L4.13636 8.76136C3.17803 8.51515 2.42045 8.14205 1.86364 7.64205C1.31061 7.13826 1.03409 6.4697 1.03409 5.63636C1.03409 4.95076 1.2197 4.35038 1.59091 3.83523C1.96591 3.32008 2.47538 2.92045 3.11932 2.63636C3.76326 2.34848 4.49242 2.20455 5.30682 2.20455C6.13258 2.20455 6.85606 2.34848 7.47727 2.63636C8.10227 2.92045 8.5928 3.31629 8.94886 3.82386C9.30492 4.32765 9.48864 4.9072 9.5 5.5625H7.47159Z"
                                    fill="#E6EBF5" />
                            </svg>

                            <input type="text" class="input-field" placeholder="0.00">
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 ">
                        <p class="text-xs font-medium uppercase text-secondary">
                            Минимальный депозит
                        </p>
                        <div class="input-wrapper">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" class="flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.78409 15.4545V0.90909H5.71591V15.4545H4.78409ZM7.47159 5.5625C7.41856 5.06629 7.19508 4.67992 6.80114 4.40341C6.41099 4.12689 5.90341 3.98864 5.27841 3.98864C4.83902 3.98864 4.46212 4.05492 4.14773 4.1875C3.83333 4.32008 3.5928 4.5 3.42614 4.72727C3.25947 4.95455 3.17424 5.21402 3.17045 5.50568C3.17045 5.74811 3.22538 5.95833 3.33523 6.13636C3.44886 6.31439 3.60227 6.46591 3.79545 6.59091C3.98864 6.71212 4.20265 6.81439 4.4375 6.89773C4.67235 6.98106 4.90909 7.05114 5.14773 7.10795L6.23864 7.38068C6.67803 7.48295 7.10038 7.62121 7.50568 7.79545C7.91477 7.9697 8.2803 8.18939 8.60227 8.45455C8.92803 8.7197 9.18561 9.03977 9.375 9.41477C9.56439 9.78977 9.65909 10.2292 9.65909 10.733C9.65909 11.4148 9.48485 12.0152 9.13636 12.5341C8.78788 13.0492 8.28409 13.4527 7.625 13.7443C6.9697 14.0322 6.17614 14.1761 5.24432 14.1761C4.33902 14.1761 3.55303 14.036 2.88636 13.7557C2.22348 13.4754 1.70455 13.0663 1.32955 12.5284C0.958333 11.9905 0.757576 11.3352 0.727273 10.5625H2.80114C2.83144 10.9678 2.95644 11.3049 3.17614 11.5739C3.39583 11.8428 3.68182 12.0436 4.03409 12.1761C4.39015 12.3087 4.78788 12.375 5.22727 12.375C5.68561 12.375 6.08712 12.3068 6.43182 12.1705C6.7803 12.0303 7.05303 11.8371 7.25 11.5909C7.44697 11.3409 7.54735 11.0492 7.55114 10.7159C7.54735 10.4129 7.45833 10.1629 7.28409 9.96591C7.10985 9.76515 6.86553 9.59848 6.55114 9.46591C6.24053 9.32955 5.87689 9.20833 5.46023 9.10227L4.13636 8.76136C3.17803 8.51515 2.42045 8.14205 1.86364 7.64205C1.31061 7.13826 1.03409 6.4697 1.03409 5.63636C1.03409 4.95076 1.2197 4.35038 1.59091 3.83523C1.96591 3.32008 2.47538 2.92045 3.11932 2.63636C3.76326 2.34848 4.49242 2.20455 5.30682 2.20455C6.13258 2.20455 6.85606 2.34848 7.47727 2.63636C8.10227 2.92045 8.5928 3.31629 8.94886 3.82386C9.30492 4.32765 9.48864 4.9072 9.5 5.5625H7.47159Z"
                                    fill="#E6EBF5" />
                            </svg>

                            <input type="text" class="input-field" placeholder="0.00">
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 ">
                        <p class="text-xs font-medium uppercase text-secondary">
                            Ключевое слово
                        </p>
                        <div class="input-wrapper">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" class="flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.78409 15.4545V0.90909H5.71591V15.4545H4.78409ZM7.47159 5.5625C7.41856 5.06629 7.19508 4.67992 6.80114 4.40341C6.41099 4.12689 5.90341 3.98864 5.27841 3.98864C4.83902 3.98864 4.46212 4.05492 4.14773 4.1875C3.83333 4.32008 3.5928 4.5 3.42614 4.72727C3.25947 4.95455 3.17424 5.21402 3.17045 5.50568C3.17045 5.74811 3.22538 5.95833 3.33523 6.13636C3.44886 6.31439 3.60227 6.46591 3.79545 6.59091C3.98864 6.71212 4.20265 6.81439 4.4375 6.89773C4.67235 6.98106 4.90909 7.05114 5.14773 7.10795L6.23864 7.38068C6.67803 7.48295 7.10038 7.62121 7.50568 7.79545C7.91477 7.9697 8.2803 8.18939 8.60227 8.45455C8.92803 8.7197 9.18561 9.03977 9.375 9.41477C9.56439 9.78977 9.65909 10.2292 9.65909 10.733C9.65909 11.4148 9.48485 12.0152 9.13636 12.5341C8.78788 13.0492 8.28409 13.4527 7.625 13.7443C6.9697 14.0322 6.17614 14.1761 5.24432 14.1761C4.33902 14.1761 3.55303 14.036 2.88636 13.7557C2.22348 13.4754 1.70455 13.0663 1.32955 12.5284C0.958333 11.9905 0.757576 11.3352 0.727273 10.5625H2.80114C2.83144 10.9678 2.95644 11.3049 3.17614 11.5739C3.39583 11.8428 3.68182 12.0436 4.03409 12.1761C4.39015 12.3087 4.78788 12.375 5.22727 12.375C5.68561 12.375 6.08712 12.3068 6.43182 12.1705C6.7803 12.0303 7.05303 11.8371 7.25 11.5909C7.44697 11.3409 7.54735 11.0492 7.55114 10.7159C7.54735 10.4129 7.45833 10.1629 7.28409 9.96591C7.10985 9.76515 6.86553 9.59848 6.55114 9.46591C6.24053 9.32955 5.87689 9.20833 5.46023 9.10227L4.13636 8.76136C3.17803 8.51515 2.42045 8.14205 1.86364 7.64205C1.31061 7.13826 1.03409 6.4697 1.03409 5.63636C1.03409 4.95076 1.2197 4.35038 1.59091 3.83523C1.96591 3.32008 2.47538 2.92045 3.11932 2.63636C3.76326 2.34848 4.49242 2.20455 5.30682 2.20455C6.13258 2.20455 6.85606 2.34848 7.47727 2.63636C8.10227 2.92045 8.5928 3.31629 8.94886 3.82386C9.30492 4.32765 9.48864 4.9072 9.5 5.5625H7.47159Z"
                                    fill="currentColor" />
                            </svg>

                            <input type="text" class="input-field" placeholder="Example">
                        </div>
                    </div>
                </div>
                <button class="btn w-fit btn-primary">
                    Сохранить
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="card flex h-fit flex-col gap-5">
                <div class="flex justify-between items-center">
                    <p class="text-2xl font-semibold">
                        Платежные системы
                    </p>
                    <div class="tag-small max-md:hidden tag-danger">
                        Не сохранено
                    </div>
                </div>
                <div class="grid md:grid-cols-4 grid-cols-2 gap-2">
                    <div @click="togglePaymentSystem(payment_system.label)" v-for="payment_system in payment_systems"
                        :key="payment_system.label"
                        class="flex items-center px-4 py-3 gap-2 rounded-lg cursor-pointer relative transition-all duration-300 ease-in-out overflow-hidden select-none"
                        :class="payment_system.value ? payment_system.class : 'bg-container_accent'">
                        <img :src="payment_system.image" alt="payment_system" class="w-6 h-6">
                        <p class="font-medium">{{ payment_system.label }}</p>
                    </div>
                </div>

            </div>
            <div class="card flex h-fit flex-col gap-5">
                <div class="flex flex-col overflow-x-hidden gap-4">

                    <div class="flex flex-col overflow-x-auto gap-4">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="text-xs text-secondary uppercase text-left">Переменная</th>
                                    <th class="text-xs text-secondary uppercase text-right">Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in [
                                    { variable: '%domain_name%', action: 'Домен пользователя' },
                                    { variable: '%sum_verif%', action: 'Сумма при ошибке верификации' },
                                    { variable: '%sum_afterverif%', action: 'Сумма при ошибке после верификации' }
                                ]" :key="item.variable">
                                    <td class="bg-container_accent rounded-l-xl text-left">
                                        <div class="text-left gap-2 code justify-start">
                                          
                                            {{ item.variable }}
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 4.83301H1.33333C0.598 4.83301 0 5.43101 0 6.16634V12.833C0 13.5683 0.598 14.1663 1.33333 14.1663H8C8.73533 14.1663 9.33333 13.5683 9.33333 12.833V6.16634C9.33333 5.43101 8.73533 4.83301 8 4.83301Z"
                                                    fill="#E6EBF5" />
                                                <path
                                                    d="M12 0.833008H5.33333C4.97971 0.833008 4.64057 0.973484 4.39052 1.22353C4.14048 1.47358 4 1.81272 4 2.16634V3.49967H9.33333C9.68695 3.49967 10.0261 3.64015 10.2761 3.8902C10.5262 4.14025 10.6667 4.47939 10.6667 4.83301V10.1663H12C12.3536 10.1663 12.6928 10.0259 12.9428 9.77582C13.1929 9.52577 13.3333 9.18663 13.3333 8.83301V2.16634C13.3333 1.81272 13.1929 1.47358 12.9428 1.22353C12.6928 0.973484 12.3536 0.833008 12 0.833008Z"
                                                    fill="#E6EBF5" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="bg-container_accent rounded-r-xl text-left">{{ item.action }}</td>
                                </tr>
                            </tbody>
                        </table>
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
</style>