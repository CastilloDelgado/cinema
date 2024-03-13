<script setup>
import image1 from "../assets/images/orchestra-1.jpeg"
import image2 from "../assets/images/orchestra-2.jpeg"
import image3 from "../assets/images/orchestra-3.jpeg"
import image4 from "../assets/images/orchestra-4.jpeg"
</script>

<template>
    <div class="bg-sec-500 md:h-[80vh] border-t-8 border-sec-800">
        <div class="h-full max-w-6xl mx-auto bg-white flex flex-col md:flex-row ">
            <div class="flex cols-2 w-full md:w-3/5 gap-1 h-[100vh] md:h-full">
                <div class="flex flex-col h-full gap-1">
                    <img :src="image3" class="w-full h-2/3 object-cover" alt="">
                    <img :src="image1" class="w-full h-1/3 object-cover" alt="">
                </div>
                <div class="flex flex-col h-full gap-1">
                    <img :src="image4" class="w-full h-1/3 object-cover" alt="">
                    <img :src="image2" class="w-full h-2/3 object-cover" alt="">
                </div>
            </div>
            <div class="h-[100vh] md:h-full grid place-content-center px-12 py-12 w-full md:w-2/5">
                <div class="text-center flex flex-col gap-4">
                    <div class="mb-4">
                        <p class="font-bold text-2xl capitalize text-black drop-shadow-lg font-main">Cinema Concert
                        </p>
                        <p class="font-bold text-6xl capitalize text-black drop-shadow-lg font-serif italic">Orchestra
                        </p>
                    </div>
                    <p class="text-xl text-sec-800">Creada en 2022 por la productora Cinema Concert Club,
                        bajo la dirección musical de Laura Reyes. Es la orquesta más importante de su tipo en México y
                        Latinoamérica con músicos profesionales que te deleitarán nota a nota.</p>
                    <!-- <p class="text-lg  text-sec-700">Abriremos las puertas de Cinépolis durante 1 noche
                        para
                        disfrutar de una selección de películas
                        clásicas del cine contemporáneo musicalizadas en vivo a piano y violín.</p> -->
                    <div>
                        <button
                            class="capitalize px-2 py-1 text-lg  bg-sec-400 hover:bg-sec-300 border-2 border-black rounded-sm">Conoce
                            nuestra orquesta</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>