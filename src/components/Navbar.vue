<script setup>
import { ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const isOpen = ref(false)
</script>

<template>
    <div class="w-full bg-black sticky top-0 border-b-4 border-main-400 z-10">
        <div class="max-w-6xl mx-auto min-h-16 grid px-4 grid-cols-2 place-content-around md:py-0">
            <p
                class="text-center text-nowrap self-center md:text-start font-main text-main-400 text-sm  md:text-lg cursor-pointer md:mb-0">
                Cinema Concert Club
            </p>
            <div
                class="capitalize text-sm lg:text-base flex-col md:flex-row text-white justify-end gap-4 text-center md:text-start hidden md:flex">
                <p class="self-center text-main-200 hover:text-white hover:underline cursor-pointer">Orquesta</p>
                <p class="self-center text-main-200 hover:text-white hover:underline cursor-pointer">Cine + Música en
                    Vivo</p>
                <p class="self-center text-main-200 hover:text-white hover:underline cursor-pointer">Próximos eventos
                </p>
                <p class="self-center text-main-200 hover:text-white hover:underline cursor-pointer">Newsletter</p>
            </div>
            <div class="flex md:hidden justify-end">
                <Menu>
                    <MenuButton>
                        <div
                            class="rounded-sm text-xs border-main-500 border-[1px] p-2 hover:bg-main-500 hover:text-black bg-black text-main-500 capitalize">
                            Menu
                        </div>
                    </MenuButton>
                    <MenuItems as="div"
                        class="absolute top-16 bg-black text-main-400  rounded-sm px-2 py-3 gap-2 border-[1px] border-main-500 flex flex-col">
                        <MenuItem v-slot="{ active }">
                        <a :class='{ "text-white": active }' href="#">
                            Orquesta
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a :class='{ "text-white": active }' href="#">
                            Cine + Música en Vivo
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a :class='{ "text-white": active }' href="#">
                            Próximos Eventos
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a :class='{ "text-white": active }' href="#">
                            Newsletter
                        </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    </div>
</template>
