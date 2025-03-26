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
        label: 'Бан',
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
    <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        <div class="flex flex-col gap-8 flex-1">
            <div class="flex justify-between items-start">
                <div class="flex flex-col gap-4 ">
                    <img src="/assets/images/project/avatar_user.png" alt="logo" class="w-12 h-12 rounded-full">
                    <div class="flex flex-col gap-2">
                        <p class="text-white font-semibold text-lg leading-none">example@gmail.com</p>
                        <p class="text-secondary font-medium">Регистрация: 11.12.2021</p>
                    </div>
                </div>


            </div>

            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>
            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Страна</span>
                <span class="text-white font-semibold">🇫🇷 Франция</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Домен</span>
                <span class="text-white font-semibold">example.com</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Дата регистрации</span>
                <span class="text-white font-semibold">29.11.2024 01:54:10</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Депозитов</span>
                <span class="text-white font-semibold">$0.00</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Отыграно</span>
                <span class="text-white font-semibold">$0.00</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Промокод</span>
                <span class="text-white font-semibold">-</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">Верификация</span>
                <span class="tag-small tag-danger">Без верификации</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">IP последний</span>
                <span class="text-white font-semibold">156.246.152.31</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>

            <div class="flex items-center justify-between">
                <span class="text-secondary font-semibold">IP регистрации</span>
                <span class="text-white font-semibold">156.246.152.31</span>
            </div>
            <div class="w-full bg-container_accent rounded-lg h-[1px]"></div>
        </div>
        <div class="flex flex-col gap-4">

            <div class="card flex h-fit flex-col gap-5">
                <p class="text-2xl font-semibold">
                    Данные
                </p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">Почта</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="example@gmail.com"></input>

                    </div>


                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">пароль</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" class="input-field" placeholder="********"></input>

                    </div>


                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">баланс</span>
                    </div>
                    <div class="input-wrapper">
                        $
                        <input type="text" class="input-field" placeholder="0.00" value="1,300.00"></input>

                    </div>


                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">минимальный вывод</span>
                    </div>
                    <div class="input-wrapper">
                        $
                        <input type="text" class="input-field" placeholder="0.00" value="1,300.00"></input>

                    </div>
                    <div class="text-secondary text-right text-xs font-medium ">
                        пользователь не сможет создать вывод меньше этой суммы
                    </div>


                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">минимальный вывод</span>
                    </div>
                    <div class="input-wrapper">
                        $
                        <input type="text" class="input-field" placeholder="10.00" value="10.00"></input>

                    </div>
                    <div class="text-secondary text-right text-xs font-medium ">
                        эта сумма отображается на странице deposit
                    </div>


                </div>
                <button class="btn w-fit btn-primary">
                    Сохранить
                </button>
            </div>
            <div class="card flex h-fit flex-col gap-5">
                <p class="text-2xl font-semibold">
                    Данные
                </p>
                <Toggle v-for="setting in settings" v-model="setting.value" :key="setting.label" :label="setting.label"
                    :description="setting.description" />
                <button class="btn w-fit btn-primary">
                    Сохранить
                </button>
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