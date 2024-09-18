<template>
    <nav class="navbar d-flex justify-content-start navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="px-5">
            <img class="p-2" :src="logoSrc" alt="logo_BoolBnB" width="40px">
            <a class="navbar-brand" :href="homeUrl">
                {{ appName }}
            </a>
            <button @click="goToRegister" class="btn btn-primary ms-3">
                Aggiungi Appartamento
            </button>
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
        goToRegister() {
            // Cambia l'URL a quello corretto per la tua pagina di registrazione di Laravel
            window.location.href = 'http://127.0.0.1:8000/register';
        },
    },
    mounted() {

    }
};
</script>

<style scoped>

</style>