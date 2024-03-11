<script setup>
import Layout from '../components/Layout.vue';
import MoviesSummary from '../components/MoviesSummary.vue';
import NextEvents from '../components/NextEvents.vue';
import Welcome from '../components/Welcome.vue';
</script>

<template>
    <Layout>
        <Welcome />

        <NextEvents />

        <MoviesSummary />
    </Layout>
</template>