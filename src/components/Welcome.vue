<script setup>
import video1 from '../assets/videos/orchestra-video-1.mp4'
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
    <div class="back-view">
        <video autoplay muted loop>
            <source :src="video1" />
        </video>
        <div class="top-view grid grid-cols-2 place-content-center h-full max-w-6xl mx-auto " :style="{ grayscale: 0 }">
            <div class="py-6">
                <p class="font-main text-main-400 text-8xl title-shadow ">Cinema Conert Club</p>
            </div>
            <div></div>
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