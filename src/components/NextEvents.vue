<script setup>
import event1 from '../assets/images/event.png'

</script>

<template>
    <div class="bg-ter-950">
        <div class="max-w-6xl mx-auto py-12 px-4">
            <div class="text-center mb-8">
                <p class="font-bold text-3xl font-main text-ter-50">Próximos Eventos</p>
            </div>
            <div class="flex flex-col md:flex-row col-1 md:col-2 w-full gap-4">
                <div class="w-full hidden md:block">
                    <div class="bg-ter-900 border-l-8 border-ter-800 drop-shadow-md  rounded-sm">
                        <div class="p-2">
                            <p class="font-bold text-4xl text-white mb-2">Ghibli Concert</p>
                            <div class="flex gap-2 mb-1 text-ter-50">
                                <p class="font-bold">Lugar: </p>
                                <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                <p class="font-bold">Fecha: </p>
                                <p>19/Mayo/2024</p>
                            </div>
                            <p class="font-lg text-ter-50 text-justify">Lorem ipsum dolor sit amet consectetur
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
                        class="w-full h-1/2 bg-ter-900 flex border-l-8 border-ter-600 rounded-sm">
                        <div class="flex flex-col md:flex-row gap-0 drop-shadow-sm">
                            <img :src="event1" alt="" class="md:h-full md:w-64 w-full object-cover self-center">
                            <div class="mb-4 p-2">
                                <p class="font-bold text-2xl text-white mb-2">Ghibli Concert</p>
                                <div class="flex flex-col gap-2 mb-2 text-ter-50">
                                    <div class="flex gap-2">
                                        <p class="font-bold">Lugar: </p>
                                        <p>Sala Silvestre Revueltas, Ciudad de México.</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <p class="font-bold">Fecha: </p>
                                        <p>19/Mayo/2024</p>
                                    </div>
                                </div>
                                <p class="font-lg text-ter-200 text-justify">Lorem ipsum dolor sit amet consectetur
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
                    class="px-3 py-1 self-center text-white bg-ter-900 hover:bg-ter-800 rounded-sm border-2 border-ter-white text-lg">Ver
                    más
                    eventos</button>
            </div>
        </div>
    </div>
</template>