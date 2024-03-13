<script setup>
import event1 from '../assets/images/event.png'

</script>

<template>
    <div class="bg-main-500">
        <div class="max-w-6xl mx-auto py-12 px-4">
            <div class="text-center mb-8">
                <p class="font-bold text-3xl font-main text-main-50">Próximos Eventos</p>
            </div>
            <div class="flex flex-col md:flex-row col-1 md:col-2 w-full gap-4">
                <div class="w-full hidden md:block">
                    <div class="bg-main-700 border-l-8 border-main-600 drop-shadow-md  rounded-sm">
                        <div class="p-2">
                            <p class="font-bold text-4xl text-white mb-2">Ghibli Concert</p>
                            <div class="flex gap-2 mb-1 text-main-50">
                                <p class="font-bold">Lugar: </p>
                                <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                <p class="font-bold">Fecha: </p>
                                <p>19/Mayo/2024</p>
                            </div>
                            <p class="font-lg text-main-50">Lorem ipsum dolor sit amet consectetur
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
                    <div v-for="element in [1, 2]"
                        class="w-full h-1/2 bg-main-700 flex border-l-8 border-main-600 rounded-sm">
                        <div class="flex flex-col md:flex-row gap-0 drop-shadow-sm">
                            <img :src="event1" alt="" class="md:h-full md:w-64 w-full object-cover self-center">
                            <div class="mb-4 p-2">
                                <p class="font-bold text-2xl text-white mb-2">Ghibli Concert</p>
                                <div class="flex flex-col gap-2 mb-2 text-main-50">
                                    <div class="flex gap-2">
                                        <p class="font-bold">Lugar: </p>
                                        <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <p class="font-bold">Fecha: </p>
                                        <p>19/Mayo/2024</p>
                                    </div>
                                </div>
                                <p class="font-lg text-main-200 ">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Dignissimos recusandae odio vero, omnis labore, voluptates officia ad provident quam
                                    veniam in cupiditate tempore animi, amet minus odit expedita iure. Excepturi?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-6">
                <button
                    class="px-3 py-2 self-center text-white bg-main-800 hover:bg-main-600 rounded-sm border-2 border-main-300 text-lg">Ver
                    todos los eventos</button>
            </div>
        </div>
    </div>
</template>