<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
import Tooltip from '../../Components/UI/Tooltip.vue';
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
                        <div class="flex items-center gap-2">
                            <span class="text-xs  uppercase">заголовок</span>
                            <Tooltip :text="'Lorem ipsum'">
                                <div
                                    class="h-6 w-6 cursor-pointer bg-container_accent rounded-lg flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.17773 14C11.4914 14 14.1777 11.3137 14.1777 8C14.1777 4.68629 11.4914 2 8.17773 2C4.86403 2 2.17773 4.68629 2.17773 8C2.17773 11.3137 4.86403 14 8.17773 14Z"
                                            stroke="#E6EBF5" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8.17773 10.6667V8" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.17773 5.33301H8.1844" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </Tooltip>
                        </div>
                        <span class="text-xs text-white">14/25</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Заголовок уведомления">
                    </div>
                    <p class="text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-xs  uppercase">ссылка</span>
                            <Tooltip :text="'Lorem ipsum'">
                                <div
                                    class="h-6 w-6 cursor-pointer bg-container_accent rounded-lg flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.17773 14C11.4914 14 14.1777 11.3137 14.1777 8C14.1777 4.68629 11.4914 2 8.17773 2C4.86403 2 2.17773 4.68629 2.17773 8C2.17773 11.3137 4.86403 14 8.17773 14Z"
                                            stroke="#E6EBF5" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8.17773 10.6667V8" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.17773 5.33301H8.1844" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Ссылка уведомления">
                    </div>
                    <p class="text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <div class="flex items-center gap-2">
                            <span class="text-xs  uppercase">текст</span>
                            <Tooltip :text="'Lorem ipsum'">
                                <div
                                    class="h-6 w-6 cursor-pointer bg-container_accent rounded-lg flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.17773 14C11.4914 14 14.1777 11.3137 14.1777 8C14.1777 4.68629 11.4914 2 8.17773 2C4.86403 2 2.17773 4.68629 2.17773 8C2.17773 11.3137 4.86403 14 8.17773 14Z"
                                            stroke="#E6EBF5" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8.17773 10.6667V8" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.17773 5.33301H8.1844" stroke="#E6EBF5" stroke-width="1.33333"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </Tooltip>
                        </div>
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