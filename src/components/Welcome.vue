<script setup>
import { onMounted } from 'vue';
import video1 from '../assets/videos/orchestra-video-1.mp4'
onMounted(() => {
    document.getElementById('background-video').playbackRate = 0.9
})
</script>

<template>
    <!-- Image as Background -->
    <!-- <div class="back-view">
        <div class="top-view grid grid-cols-2 place-content-center h-full max-w-6xl mx-auto " :style="{ grayscale: 0 }">
            <div class="py-6">
                <p class="font-main text-main-400 text-8xl title-shadow ">Cinema Conert Club</p>
            </div>
            <div></div>
        </div>
    </div> -->

    <!-- Video as Background -->
    <div class="static">
        <video id="background-video" autoplay muted loop class="absolute h-[100vh] md:h-[80vh] w-full object-cover">
            <source :src="video1" />
        </video>
        <div class="relative grid grid-cols-1 md:grid-cols-2 place-content-center max-w-6xl mx-auto px-4 h-[100vh] md:h-[80vh]"
            :style="{ grayscale: 0 }">
            <div class="">
                <p class="font-main text-main-400 text-6xl text-center md:text-start md:text-8xl title-shadow mb-6">
                    Cinema Conert Club
                </p>
            </div>
            <div class="grid place-content-center">
                <div class="px-6 flex flex-col gap-2">
                    <p class="text-white text-center text-3xl font-semibold title-shadow">Disfruta de los clásicos del
                        cine musicalizados en vivo de una manera segura, limitada y exclusiva.
                    </p>
                    <p class="text-center text-xl text-main-50 title-shadow mb-4">Suscribete para recibir nuestras
                        últimas noticias
                    </p>
                    <div class="flex flex-col md:flex-row justify-center w-full gap-1">
                        <input type="text" placeholder="Ingresa tu correo electrónico..."
                            class="text-lg bg-white border-black border-2 rounded-sm px-2 py-1 text-center">
                        <button
                            class="text-lg bg-main-500 hover:bg-main-300 px-2 py-1 border-black border-2">Suscribete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back-view {
    position: relative;
    height: 80vh;
}

.back-view::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/main.jpeg');
    filter: grayscale(40%);
}

.top-view {
    position: relative;
}

.title-shadow {
    text-shadow: -2px 2px 4px black;
}
</style>