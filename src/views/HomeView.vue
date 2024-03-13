<script setup>
import Layout from '../components/Layout.vue';
import MoviesSummary from '../components/MoviesSummary.vue';
import NextEvents from '../components/NextEvents.vue';
import OrchestraParallaxBanner from '../components/OrchestraParallaxBanner.vue';
import MoviesParallaxBanner from '../components/MoviesParallaxBanner.vue';
import OrchestraSummary from '../components/OrchestraSummary.vue';
import Welcome from '../components/Welcome.vue';
import NewsletterBanner from '../components/NewsletterBanner.vue';
</script>

<template>
    <Layout>
        <Welcome />

        <NextEvents />

        <OrchestraParallaxBanner />

        <MoviesSummary />

        <MoviesParallaxBanner />

        <OrchestraSummary />

        <NewsletterBanner />
    </Layout>
</template>