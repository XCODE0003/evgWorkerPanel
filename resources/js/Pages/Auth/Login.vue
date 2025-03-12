<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="max-w-[400px] w-full mx-auto  bg-container rounded-xl p-8">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center text-center gap-4">
                    <div class="w-10 h-10 bg-primary rounded-lg">

                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-white text-2xl font-semibold">Авторизация</p>
                        <p class="text-secondary ">Здравствуйте! Заполните поля ниже</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label for="name" class="text-secondary text-xs">Имя пользователя</label>
                        <div class="input-wrapper">
                            <input type="text" id="name" class="input " placeholder="Введите имя">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-secondary text-xs">Пароль</label>
                        <div class="input-wrapper">
                            <input type="password" id="password" class="input " placeholder="Введите пароль">
                        </div>
                    </div>
                    <button class="btn btn-primary ">
                        Авторизоваться
                    </button>
                </div>
                <div class="flex items-center gap-2 text-center justify-center text-secondary ">
                    Нет аккаунта?
                    <a href="/register" class="link">Регистрация</a>
                </div>
            </div>
        </div>
    </div>
</template>