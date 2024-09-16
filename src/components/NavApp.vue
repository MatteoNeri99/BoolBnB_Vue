<template>
    <nav class="navbar d-flex justify-content-start navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="px-5">
            <img class="p-2" :src="logoSrc" alt="logo_BoolBnB" width="40px">
            <a class="navbar-brand" :href="homeUrl">
                {{ appName }}
            </a>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            logoSrc: '/src/img/favicon.svg', // sostituisci con il percorso corretto
            appName: 'BoolBnB',
            homeUrl: '/',
        };
    },
    methods: {
        
    },
    mounted() {

    }
};
</script>

<style scoped>

</style>