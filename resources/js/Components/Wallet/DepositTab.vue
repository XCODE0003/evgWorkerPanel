<script setup>
import { ref } from 'vue';
import { shortenAddress } from '../../utils/text';

const static_data = {
    week: {
        period: 'Неделя',
        amount: '$500.54'
    },
    month: {
        period: 'Месяц',
        amount: '$500.54'
    },
    all_time: {
        period: 'Все время',
        amount: '$500.54'
    }
}
</script>

<template>
    <div class="flex flex-col w-full gap-4">

        <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
            <div class="flex flex-col gap-2">
                <p class="text-secondary">
                    Ваш процент с депозитов
                </p>
                <div class="background_blue_shadow text-3xl font-bold py-2 px-4 w-fit rounded-xl">
                    10%
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">период</span>
                    <span class="text-xs">сумма</span>
                </div>
                <div class="flex flex-col gap-2">
                    <div v-for="item in static_data" :key="item"
                        class="p-4 bg-container_accent flex items-center justify-between rounded-xl">
                        <span>
                            {{ item.period }}
                        </span>
                        <span>
                            {{ item.amount }}
                        </span>
                    </div>
                </div>


            </div>

        </div>
        <div class=" w-full bg-container p-8 gap-6 rounded-2xl flex flex-col justify-between">
            <p class="text-2xl">Найти депозит</p>
            <div class="flex flex-col gap-4">
                <div class="flex items-center text-secondary uppercase justify-between">
                    <span class="text-xs">Найти депозит</span>
                    <span class="text-xs">Результатов 26</span>
                </div>
                <div class="input-wrapper">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.04632 6.252C4.11597 3.68352 6.62221 2.00753 9.4045 2.0001C12.4032 1.98431 15.0695 3.90504 16.0042 6.75432C16.939 9.6036 15.9286 12.7305 13.5033 14.4941C11.078 16.2577 7.79194 16.2551 5.3695 14.4876L3.2095 16.6476C2.98989 16.8669 2.63412 16.8669 2.41451 16.6476C2.19516 16.428 2.19516 16.0722 2.41451 15.8526L4.507 13.7601C2.55243 11.78 1.97667 8.82047 3.04632 6.252ZM4.04918 11.1268C4.94729 13.2911 7.06131 14.7006 9.4045 14.6976V14.6676C12.5847 14.6635 15.1664 12.0952 15.187 8.9151C15.19 6.5719 13.7805 4.45788 11.6162 3.55977C9.45195 2.66167 6.95975 3.15656 5.30286 4.81345C3.64597 6.47035 3.15108 8.96255 4.04918 11.1268Z"
                            fill="#5D6880" />
                    </svg>

                    <input type="text" class="input-field" placeholder="Введите почту">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-left text-secondary text-sm  ">
                                <th class="pb-4">Логин</th>
                                <th class="pb-4">Сумма</th>
                                <th class="pb-4">Домен</th>
                                <th class="pb-4">Хеш</th>
                                <th class="pb-4">Дата</th>
                                <th class="pb-4">Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td class="py-4">mailuser@inbox.ru</td>
                                <td class="py-4">
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center gap-2">
                                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.9661 6.8339C13.2362 5.04772 11.8595 4.08751 9.97714 3.44695L10.5878 1.02733L9.09646 0.660277L8.50197 3.01613C8.11046 2.91965 7.70791 2.82862 7.30791 2.73843L7.90664 0.367053L6.41661 0L5.80556 2.41878C5.48114 2.34579 5.16267 2.27363 4.85354 2.19771L4.85524 2.19016L2.79917 1.68299L2.40257 3.25608C2.40257 3.25608 3.50873 3.50651 3.48538 3.52203C4.0892 3.67095 4.19876 4.06569 4.18007 4.37863L3.48453 7.1351C3.52614 7.14559 3.58007 7.16069 3.63952 7.18418L3.4824 7.14559L2.50702 11.007C2.43314 11.1882 2.24588 11.46 1.82379 11.3568C1.83865 11.3782 0.740133 11.0896 0.740133 11.0896L0 12.776L1.94057 13.2538C2.15952 13.308 2.37582 13.3637 2.58975 13.4189L2.59009 13.4189L2.59014 13.419C2.72873 13.4547 2.86632 13.4901 3.00299 13.5248L2.386 15.9725L3.87519 16.3395L4.48666 13.9182C4.89303 14.0273 5.28794 14.128 5.67435 14.2228L5.06543 16.6328L6.55631 16.9998L7.1733 14.5571C9.71557 15.0324 11.6277 14.8407 12.4315 12.5696C13.0799 10.7406 12.3997 9.68559 11.0621 8.99721C12.0362 8.77446 12.7699 8.14145 12.9657 6.8339H12.9661ZM9.55872 11.5527C9.13547 13.2313 6.47517 12.5368 5.25905 12.2193L5.25894 12.2192C5.15008 12.1908 5.0528 12.1654 4.96973 12.145L5.78842 8.90278C5.88998 8.92782 6.01407 8.95533 6.15464 8.98649C7.41278 9.2654 9.99114 9.83697 9.55914 11.5527H9.55872ZM6.40809 7.48198C7.42283 7.74942 9.63469 8.33236 10.02 6.80744C10.4139 5.24739 8.26313 4.77719 7.21271 4.54755C7.09462 4.52173 6.99044 4.49895 6.90534 4.47801L6.16309 7.41863C6.23332 7.43592 6.31575 7.45764 6.40809 7.48198Z"
                                                    fill="#F7931A" />
                                            </svg>
                                            0.000001
                                        </div>
                                        <span class="text-secondary">$300.01</span>
                                    </div>
                                </td>
                                <td class="py-4">somedomainidk.biz</td>
                                <td class="py-4 ">
                                    <div class="flex code items-center gap-2">
                                        {{ shortenAddress('0x2a8a6c4f3ca9b5f0e490412a4a8a42c38') }}
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 4.8335H1.33333C0.598 4.8335 0 5.4315 0 6.16683V12.8335C0 13.5688 0.598 14.1668 1.33333 14.1668H8C8.73533 14.1668 9.33333 13.5688 9.33333 12.8335V6.16683C9.33333 5.4315 8.73533 4.8335 8 4.8335Z"
                                                fill="#E6EBF5" />
                                            <path
                                                d="M12 0.833496H5.33333C4.97971 0.833496 4.64057 0.973972 4.39052 1.22402C4.14048 1.47407 4 1.81321 4 2.16683V3.50016H9.33333C9.68695 3.50016 10.0261 3.64064 10.2761 3.89069C10.5262 4.14074 10.6667 4.47987 10.6667 4.8335V10.1668H12C12.3536 10.1668 12.6928 10.0264 12.9428 9.7763C13.1929 9.52626 13.3333 9.18712 13.3333 8.8335V2.16683C13.3333 1.81321 13.1929 1.47407 12.9428 1.22402C12.6928 0.973972 12.3536 0.833496 12 0.833496Z"
                                                fill="#E6EBF5" />
                                        </svg>
                                    </div>

                                </td>
                                <td class="py-4">23.11.2024 19:32:11</td>
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
</template>