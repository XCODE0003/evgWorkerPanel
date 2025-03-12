<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
</script>

<template>
    <div class="flex flex-col gap-4 ">
        <img src="/assets/images/project/avatar_user.png" alt="logo" class="w-12 h-12 rounded-full">
        <div class="flex flex-col gap-2">
            <p class="text-white font-semibold text-lg leading-none">example@gmail.com</p>
            <p class="text-secondary font-medium">Регистрация: 11.12.2021</p>
        </div>
    </div>
    <div class="flex flex-col w-full gap-4">
        <div class="w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
            <p class="text-2xl">Отправить уведомление</p>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">заголовок</span>
                        <span class="text-xs">14/25</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Заголовок уведомления">
                    </div>
                    <p class="text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">ссылка</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Ссылка уведомления">
                    </div>
                    <p class="text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">текст</span>
                    </div>
                    <div class="input-wrapper">
                        <textarea type="text" class="input-field" placeholder="Текст уведомления"></textarea>
                    </div>
                    <p class="text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>


                <button class="btn btn-primary w-fit">
                    Сохранить
                </button>
            </div>
        </div>


    </div>
</template>