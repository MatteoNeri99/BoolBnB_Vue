<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <img class="p-2" :src="logoSrc" alt="logo_BoolBnB" width="40px">
            <a class="navbar-brand" :href="homeUrl">
                {{ appName }}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                    <li>
                        <a class="nav-link" :href="apartmentsIndexUrl" aria-current="page">
                            Lista appartamenti
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" :href="apartmentsCreateUrl" aria-current="page">
                            Aggiungi appartamento
                        </a>
                    </li>
                    <li>
                        <a class="nav-link active mx-2" :href="adminApartmentsDeleteUrl" aria-current="page">
                            <i class="fa-solid fa-trash-can"></i>
                        </a>
                    </li>
                </ul>

                <ul class="navbar-nav ms-auto">
                    <template v-if="!isAuthenticated">
                        <li v-if="showLogin">
                            <a class="nav-link" :href="loginUrl" aria-current="page" @click="showLoginForm">{{ loginText }}</a>
                        </li>
                        <li v-if="showRegister">
                            <a class="nav-link" :href="registerUrl" aria-current="page" @click="showRegisterForm">{{ registerText }}</a>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ userName }} {{ userSurname }}
                            </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/home">
                                    Pagina utente
                                </a>
                                <a class="dropdown-item" href="/logout" @click.prevent="logout">
                                    {{ logoutText }}
                                </a>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
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
            apartmentsIndexUrl: '/apartments', // sostituisci con la rotta corretta
            apartmentsCreateUrl: '/apartments/create', // sostituisci con la rotta corretta
            adminApartmentsDeleteUrl: '/admin/apartments/deleteindex', // sostituisci con la rotta corretta
            loginUrl: '/login', // sostituisci con la rotta corretta
            registerUrl: '/register', // sostituisci con la rotta corretta
            isAuthenticated: false, // questo dovrebbe essere determinato dinamicamente
            userName: 'NomeUtente', // sostituisci con il nome dell'utente autenticato
            userSurname: 'CognomeUtente', // sostituisci con il cognome dell'utente autenticato
            showLogin: true,
            showRegister: true,
            loginText: 'Login',
            registerText: 'Registrati',
            logoutText: 'Esci',
            showLoginModal: false,
            showRegisterModal: false,
            loginEmail: '',
            loginPassword: '',
            registerName: '',
            registerEmail: '',
            registerPassword: '',
            registerPasswordConfirmation: ''
        };
    },
    methods: {
        showLoginForm() {
            this.showLoginModal = true;
        },
        closeLoginForm() {
            this.showLoginModal = false;
        },
        showRegisterForm() {
            this.showRegisterModal = true;
        },
        closeRegisterForm() {
            this.showRegisterModal = false;
        },
        login() {
            axios.post('/api/login', {
                email: this.loginEmail,
                password: this.loginPassword
            }).then(response => {
                localStorage.setItem('token', response.data.token);
                this.isAuthenticated = true;
                this.getUser();
                this.closeLoginForm();
            }).catch(error => {
                console.error(error);
            });
        },
        register() {
            axios.post('/api/register', {
                name: this.registerName,
                email: this.registerEmail,
                password: this.registerPassword,
                password_confirmation: this.registerPasswordConfirmation
            }).then(response => {
                localStorage.setItem('token', response.data.token);
                this.isAuthenticated = true;
                this.getUser();
                this.closeRegisterForm();
            }).catch(error => {
                console.error(error);
            });
        },
        logout() {
            axios.post('/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
                localStorage.removeItem('token');
                this.isAuthenticated = false;
                this.userName = '';
                this.userSurname = '';
            }).catch(error => {
                console.error(error);
            });
        },
        getUser() {
            axios.get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
                this.userName = response.data.name;
                this.userSurname = response.data.surname;
            }).catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            this.isAuthenticated = true;
            this.getUser();
        }
    }
};
</script>

<style scoped>

</style>