<script setup>
import { ref } from 'vue';

const isOpen = ref(true)
</script>

<template>
    <div class="w-full bg-black sticky top-0 border-b-4 border-main-400 z-10">
        <div
            class="max-w-6xl mx-auto min-h-16 grid grid-cols-1 md:px-4 md:grid-cols-2 place-content-center md:place-content-around py-6 md:py-0">
            <p class="text-center md:text-start font-main text-main-400 cursor-pointer md:mb-0" :class="{
                'mb-3': isOpen
            }">Cinema Concert Club
            </p>
            <div class="flex text-sm lg:text-base flex-col md:flex-row text-white justify-end gap-4 text-center md:text-start"
                v-if="isOpen">
                <p class="text-main-200 hover:text-white hover:underline cursor-pointer">Orquesta</p>
                <p class="text-main-200 hover:text-white hover:underline cursor-pointer">Cine + Música en Vivo</p>
                <p class="text-main-200 hover:text-white hover:underline cursor-pointer">Proximos eventos</p>
                <p class="text-main-200 hover:text-white hover:underline cursor-pointer">Newsletter</p>
            </div>
        </div>
    </div>
</template>