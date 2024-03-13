<script setup>

import image from '../assets/images/main-3.jpeg'

</script>

<template>
    <!-- Image as Background -->
    <div class="back-view h-[100vh] lg:h-[80vh] py-12">
        <div class="top-view grid place-content-center h-full max-w-6xl mx-auto">
            <div class="bg-main-500 w-[90vw] lg:w-[50vw] self-center rounded-sm py-12 px-4 lg:px-24 text-center">
                <p class="font-main text-2xl lg:text-4xl text-white mb-2">¡Suscribete!</p>
                <p class="text-black font-medium text-medium lg:text-xl mb-6">Suscribete a nuestro newsletter para
                    mantenerte
                    atento
                    de
                    nuestros siguientes
                    conciertos de orquesta
                    y proyecciones de peliculas con música en vivo.</p>
                <div class="flex flex-col justify-center w-full gap-1 px-4 lg:px-24">
                    <input type="text" placeholder="Ingresa tu correo electrónico..."
                        class="text-lg bg-white border-black border-2 rounded-sm px-2 py-1 text-center">
                    <button
                        class="text-lg bg-main-200 hover:bg-main-100 px-2 py-1 border-black border-2">Suscribete</button>
                </div>

            </div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.back-view {
    position: relative;
}

.back-view::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    background-image: url('../assets/images/main-3.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

.top-view {
    position: relative;
}

.title-shadow {
    text-shadow: -2px 2px 4px black;
}
</style>