<script setup>
import { ref } from 'vue';
const props = defineProps({
    message: {
        type: Object,
        required: true
    },
    me: {
        type: Boolean,
        required: true
    }
})
const is_hover = ref(false)
const is_edit = ref(false)
</script>

<template>
    <div v-if="me" @mouseenter="is_hover = true" @mouseleave="is_hover = false" class="message-wrapper justify-end">
        <transition name="fade">
            <div v-if="is_hover && !is_edit" class="h-full flex justify-end items-end">
                <div class="flex items-center rounded-lg bg-container_accent overflow-hidden ">
                    <div class="p-2 hover:bg-blue_dark_stroke cursor-pointer rounded-lg transition-all duration-300 ">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 3.75H14.25" stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M6 3.75L6.08333 3.75C6.77369 3.75 7.33333 3.19036 7.33333 2.5C7.33333 2.36193 7.44526 2.25 7.58333 2.25L10.4167 2.25C10.5547 2.25 10.6667 2.36193 10.6667 2.5C10.6667 3.19036 11.2263 3.75 11.9167 3.75H12"
                                stroke="#E6EBF5" stroke-width="1.5" />
                            <path
                                d="M13.5 6.75L12.9219 13.6869C12.8247 14.853 11.8499 15.75 10.6797 15.75H7.3203C6.1501 15.75 5.17525 14.853 5.07807 13.6869L4.5 6.75"
                                stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                    </div>
                    <div @click="is_edit = true" class="p-2 hover:bg-blue_dark_stroke cursor-pointer rounded-lg transition-all duration-300 ">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.442 2.64599C13.6956 2.39244 14.0394 2.25 14.398 2.25C14.7566 2.25 15.1005 2.39244 15.354 2.64599C15.6076 2.89954 15.75 3.24342 15.75 3.60199C15.75 3.96056 15.6076 4.30444 15.354 4.55799L9.29934 10.6127L6.75 11.25L7.38733 8.70066L13.442 2.64599Z"
                                stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 4.5L13.5 6" stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M9.375 2.25H9C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9V8.625"
                                stroke="#E6EBF5" stroke-width="1.5" stroke-linecap="round" />
                        </svg>


                    </div>
                </div>
            </div>
        </transition>
        <div class="flex flex-col gap-2 w-full justify-end items-end ">
            <p class="text-sm text-secondary">
                24.11.2024 10:11:27
            </p>
            <div v-if="!is_edit" class="message-wrapper-content bg-primary ">
                {{ message }}
            </div>
            <div v-else class="bg-black_1 w-full rounded-xl p-3 flex flex-col gap-2 justify-between items-center ">
                <div class="w-full justify-start items-start">
                    <textarea class="input-field w-full " placeholder="Сообщение">
                        {{ message }}
                    </textarea>
                </div>
                <div class="flex gap-2 items-center justify-end w-full">
                    <button @click="is_edit = false" class="btn py-2 btn-primary">
                        Отмена
                    </button>
                    <button class="btn py-2 btn-secondary text-blue_dark">
                        Подтвердить
                    </button>

                </div>
            </div>

        </div>
        <img src="/assets/images/project/avatar_user.png" alt="" class="w-10 h-10 rounded-full">


    </div>
    <div v-else class="message-wrapper justify-start">
        <img src="/assets/images/project/avatar_user.png" alt="" class="w-10 h-10 rounded-full">
        <div class="flex flex-col gap-2">
            <p class="text-sm text-secondary">
                24.11.2024 10:11:27
            </p>
            <div class="message-wrapper-content bg-container_accent">
                {{ message }}
            </div>
        </div>
    </div>
</template>



<style scoped>
.message-wrapper {
    @apply flex gap-2 items-start justify-start;
}

.message-wrapper-content {
    @apply p-3 rounded-xl w-fit max-w-[320px];
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>