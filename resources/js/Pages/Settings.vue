<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { ref } from 'vue';
import General from '../Components/Settings/General.vue';
import Security from '../Components/Settings/Security.vue';
import Blacklist from '../Components/Settings/BlackList.vue';
import Support from '../Components/Settings/Support.vue';
import Verification from '../Components/Settings/Verification.vue';
import Terms from '../Components/Settings/Terms.vue';
const active_tab = ref('general')
function get_title(){
    if(active_tab.value === 'general'){
        return 'Ваши настройки'
    }
    if(active_tab.value === 'security'){
        return 'Безопасность'
    }
    if(active_tab.value === 'blacklist'){
        return 'Черный список'
    }
    if(active_tab.value === 'support'){
        return 'Тех.поддержка'
    }
    if(active_tab.value === 'verification'){
        return 'Верификация'
    }
    if(active_tab.value === 'terms'){
        return 'Ваши термсы'
    }
    
    
    return active_tab.value
}
</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-14 items-start justify-start container mx-auto">
            <div class="flex flex-col gap-6 w-full">
                <div class="flex flex-col items-start gap-2 ">
                    <p class="text-secondary  font-medium">
                        Здравствуйте, Nickname
                    </p>
                    <p class=" text-2xl font-semibold text-center">
                        {{ get_title() }}
                    </p>
                </div>
                <div class="tab-container w-full">
                    <button :class="{ 'active': active_tab === 'general' }" @click="active_tab = 'general'">
                        Общие
                    </button>
                    <button :class="{ 'active': active_tab === 'security' }" @click="active_tab = 'security'">
                        Безопасность
                    </button>
                    <button :class="{ 'active': active_tab === 'blacklist' }" @click="active_tab = 'blacklist'">
                        Черный список
                    </button>
                    <button :class="{ 'active': active_tab === 'support' }" @click="active_tab = 'support'">
                        Тех. поддержка
                    </button>
                    <button :class="{ 'active': active_tab === 'verification' }" @click="active_tab = 'verification'">
                        Верификация
                    </button>
                    <button :class="{ 'active': active_tab === 'terms' }" @click="active_tab = 'terms'">
                        Термсы
                    </button>
                </div>
            </div>
            <General v-if="active_tab === 'general'" />
            <Security v-if="active_tab === 'security'" />
            <Blacklist v-if="active_tab === 'blacklist'" />
            <Support v-if="active_tab === 'support'" />
            <Verification v-if="active_tab === 'verification'" />
            <Terms v-if="active_tab === 'terms'" />
          
        </div>
    </MainLayout>
</template>


<style >
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
    @apply px-0 bg-container_accent font-medium
}
</style>