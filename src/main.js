


import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router';  // Importa il router
import *as boostrap from 'bootstrap'


const app = createApp(App);

app.use(router);  // Usa il router nell'applicazione
app.mount('#app');
