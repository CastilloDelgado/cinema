<script setup>
import Layout from '../components/Layout.vue';
import MoviesSummary from '../components/MoviesSummary.vue';
import NextEvents from '../components/NextEvents.vue';
import ParallaxBanner from '../components/ParallaxBanner.vue';
import Welcome from '../components/Welcome.vue';
</script>

<template>
    <Layout>
        <Welcome />

        <NextEvents />

        <ParallaxBanner />

        <MoviesSummary />

    </Layout>
</template>