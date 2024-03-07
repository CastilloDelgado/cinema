<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

<template>
    <Navbar />
    <div class="min-h-[80vh] ">
        <slot />
    </div>
    <Footer />
</template>