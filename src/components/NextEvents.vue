<script setup>
import event1 from '../assets/images/event.png'
</script>

<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto py-8 ">
            <div class="text-center mb-8">
                <p class="font-bold text-xl font-main">Siguientes Eventos</p>
            </div>
            <div class="flex col-2 w-full gap-2">
                <div class="w-full">
                    <div class="bg-main-50 border-l-8 border-main-400 p-2">
                        <div class="mb-4">
                            <p class="font-bold text-4xl text-black mb-2">Ghibli Concert</p>
                            <div class="flex gap-2 mb-1 text-main-950">
                                <p class="font-bold">Lugar: </p>
                                <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                <p class="font-bold">Fecha: </p>
                                <p>19/Mayo/2024</p>
                            </div>
                            <p class="font-lg text-main-900 text-justify">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                                Dignissimos recusandae odio vero, omnis labore, voluptates officia ad provident quam
                                veniam in cupiditate tempore animi, amet minus odit expedita iure. Excepturi?
                            </p>
                        </div>
                        <div class="flex justify-center">
                            <img :src="event1" alt="" class="w-full self-center">
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <div v-for="element in [1, 2]" class="w-full h-1/2 bg-main-50 flex p-2 border-l-8 border-main-400">
                        <div class="flex gap-2">
                            <img :src="event1" alt="" class="h-full w-64 object-cover self-center">
                            <div class="mb-4">
                                <p class="font-bold text-2xl text-black mb-2">Ghibli Concert</p>
                                <div class="flex flex-col gap-2 mb-2 text-main-950">
                                    <div class="flex gap-2">
                                        <p class="font-bold">Lugar: </p>
                                        <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <p class="font-bold">Fecha: </p>
                                        <p>19/Mayo/2024</p>
                                    </div>
                                </div>
                                <p class="font-lg text-main-900 text-justify">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Dignissimos recusandae odio vero, omnis labore, voluptates officia ad provident quam
                                    veniam in cupiditate tempore animi, amet minus odit expedita iure. Excepturi?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>