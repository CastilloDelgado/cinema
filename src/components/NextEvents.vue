<script setup>
import event1 from '../assets/images/event.png'
</script>

<template>
    <div class="bg-ter-950">
        <div class="max-w-6xl mx-auto py-8 px-4">
            <div class="text-center mb-8">
                <p class="font-bold text-3xl font-main text-ter-50">Próximos Eventos</p>
            </div>
            <div class="flex flex-col md:flex-row col-1 md:col-2 w-full gap-4">
                <div class="w-full hidden md:block">
                    <div class="bg-ter-100 border-l-8 border-ter-800 drop-shadow-md">
                        <div class="mb-4 p-2">
                            <p class="font-bold text-4xl text-black mb-2">Ghibli Concert</p>
                            <div class="flex gap-2 mb-1 text-ter-950">
                                <p class="font-bold">Lugar: </p>
                                <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                <p class="font-bold">Fecha: </p>
                                <p>19/Mayo/2024</p>
                            </div>
                            <p class="font-lg text-ter-900 text-justify">Lorem ipsum dolor sit amet consectetur
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
                <div class="w-full flex flex-col gap-4">
                    <div v-for="element in [1, 2]" class="w-full h-1/2 bg-ter-100 flex border-l-8 border-ter-800">
                        <div class="flex flex-col md:flex-row gap-2 drop-shadow-sm">
                            <img :src="event1" alt="" class="md:h-full md:w-64 w-full object-cover self-center">
                            <div class="mb-4 p-2">
                                <p class="font-bold text-2xl text-black mb-2">Ghibli Concert</p>
                                <div class="flex flex-col gap-2 mb-2 text-ter-950">
                                    <div class="flex gap-2">
                                        <p class="font-bold">Lugar: </p>
                                        <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <p class="font-bold">Fecha: </p>
                                        <p>19/Mayo/2024</p>
                                    </div>
                                </div>
                                <p class="font-lg text-ter-900 text-justify">Lorem ipsum dolor sit amet consectetur
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