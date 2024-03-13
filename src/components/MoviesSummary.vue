<script setup>
import image1 from "../assets/images/cinema-1.jpeg"
import image2 from "../assets/images/cinema-2.jpeg"
import image3 from "../assets/images/cinema-3.jpeg"
import image4 from "../assets/images/cinema-4.jpeg"
</script>

<template>
    <div class="bg-main-500 md:h-[80vh]">
        <div class="max-w-6xl mx-auto bg-white h-full flex flex-col md:flex-row ">
            <div class="h-full grid place-content-center px-12 py-12 w-full md:w-2/5">
                <div class="text-center flex flex-col gap-4">
                    <p class="font-bold text-4xl capitalize text-black drop-shadow-lg mb-4 font-main">Cine + Música en
                        vivo</p>
                    <p class="text-2xl font-medium  text-main-800">Disfruta de los clásicos del cine
                        musicalizados en vivo de una manera segura, limitada y exclusiva.</p>
                    <!-- <p class="text-lg  text-main-700">Abriremos las puertas de Cinépolis durante 1 noche
                        para
                        disfrutar de una selección de películas
                        clásicas del cine contemporáneo musicalizadas en vivo a piano y violín.</p> -->
                    <div>
                        <button
                            class="capitalize px-2 py-1 text-lg  bg-main-400 hover:bg-main-300 border-2 border-black rounded-sm">Ver
                            más
                            sobre cine en vivo</button>
                    </div>
                </div>
            </div>
            <div class="flex cols-2 w-full md:w-3/5 gap-1 h-[80vh] md:h-full">
                <div class="flex flex-col h-full gap-1">
                    <img :src="image2" class="w-full h-2/3 object-cover" alt="">
                    <img :src="image1" class="w-full h-1/3 object-cover" alt="">
                </div>
                <div class="flex flex-col h-full gap-1">
                    <img :src="image4" class="w-full h-1/3 object-cover" alt="">
                    <img :src="image3" class="w-full h-2/3 object-cover" alt="">
                </div>
            </div>
        </div>
    </div>
</template>