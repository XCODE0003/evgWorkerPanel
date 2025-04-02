<script setup>
import MainLayout from '../../Layouts/MainLayout.vue';
</script>

<template>
    <div class="flex flex-col w-full gap-4">
        <div class="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div class="flex flex-col gap-6 card">
                <p class="text-2xl">Добавить пресет</p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">название</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Введите название">
                    </div>
                </div>
                <div class="flex h-full flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">название</span>
                    </div>
                    <div class="input-wrapper">
                        <textarea rows="4" class="input-field" placeholder="Введите описание"></textarea>
                    </div>
                </div>
                <button class="btn btn-primary">
                    Добавить
                </button>
            </div>
            <div class="flex flex-col gap-6 card">
                <p class="text-2xl">Пресеты</p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">Название</span>
                        <span class="text-xs">Действие</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div v-for="item in 3" :key="item"
                            class="p-4 bg-container_accent flex items-center justify-between rounded-xl">
                            <span class="max-w-[100px] truncate">
                                Preset023
                            </span>
                            <span class="flex items-center gap-2">
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
                            </span>
                        </div>
                    </div>


                </div>

            </div>
            <div class="flex flex-col gap-6 card">
                <p class="text-2xl">Добавить саппорта</p>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">логин</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" class="input-field" placeholder="Введите логин">
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">Пароль</span>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" class="input-field" placeholder="Введите пароль">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.482 9.15631C16.8908 9.65271 16.8908 10.3473 16.482 10.8437C15.3577 12.2086 12.8781 14.75 9.99977 14.75C7.12148 14.75 4.64182 12.2086 3.51758 10.8437C3.10872 10.3473 3.10872 9.65271 3.51758 9.15631C4.64182 7.79136 7.12149 5.25 9.99977 5.25C12.8781 5.25 15.3577 7.79136 16.482 9.15631Z"
                                stroke="#5D6880" stroke-width="1.58333" />
                            <path
                                d="M12.375 10C12.375 11.3117 11.3117 12.375 10 12.375C8.68832 12.375 7.625 11.3117 7.625 10C7.625 8.68832 8.68832 7.625 10 7.625C11.3117 7.625 12.375 8.68832 12.375 10Z"
                                stroke="#5D6880" stroke-width="1.58333" />
                        </svg>

                    </div>
                </div>
                <p class="text-secondary h-full text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <button class="btn btn-primary">
                    Добавить
                </button>
            </div>
            <div class="flex flex-col gap-6 card">
                <p class="text-2xl">Лайв-чат</p>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center text-secondary uppercase justify-between">
                        <span class="text-xs">приветственное сообщение</span>
                    </div>
                    <div class="input-wrapper">
                        <textarea rows="4" class="input-field" placeholder="Введите описание"></textarea>
                    </div>
                </div>
                <p class="text-secondary h-full text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <button class="btn btn-primary">
                    Сохранить
                </button>
            </div>


        </div>

        <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
            <p class="text-2xl">Саппорты</p>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">поиск</span>
                    <span class="text-xs">Результатов 26</span>
                </div>
                <div class="input-wrapper">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.04632 6.252C4.11597 3.68352 6.62221 2.00753 9.4045 2.0001C12.4032 1.98431 15.0695 3.90504 16.0042 6.75432C16.939 9.6036 15.9286 12.7305 13.5033 14.4941C11.078 16.2577 7.79194 16.2551 5.3695 14.4876L3.2095 16.6476C2.98989 16.8669 2.63412 16.8669 2.41451 16.6476C2.19516 16.428 2.19516 16.0722 2.41451 15.8526L4.507 13.7601C2.55243 11.78 1.97667 8.82047 3.04632 6.252ZM4.04918 11.1268C4.94729 13.2911 7.06131 14.7006 9.4045 14.6976V14.6676C12.5847 14.6635 15.1664 12.0952 15.187 8.9151C15.19 6.5719 13.7805 4.45788 11.6162 3.55977C9.45195 2.66167 6.95975 3.15656 5.30286 4.81345C3.64597 6.47035 3.15108 8.96255 4.04918 11.1268Z"
                            fill="#5D6880" />
                    </svg>
                    <input type="text" class="input-field" placeholder="@exampleuser@gmail.com">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-left text-secondary text-sm">
                                <th class="pb-4">почта</th>
                                <th class="pb-4">пароль</th>
                                <th class="pb-4">действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 5" :key="i"
                                class="hover:opacity-80 cursor-pointer transition-opacity duration-300">
                                <td class="py-4">mailuser@inbox.ru</td>
                                <td class="py-4">VKfdRNVx</td>
                                <td class="py-4  flex items-end justify-end gap-2">
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
                                    fill="#6A88CC" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>