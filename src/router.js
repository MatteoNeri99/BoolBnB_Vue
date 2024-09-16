
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ShowPage from './components/ShowPage.vue';
import LoginApp from './components/LoginApp.vue';
import RegisterApp from './components/RegisterApp.vue';
import NavApp from './components/NavApp.vue';
const routes = [
{
    path: '/',
    name: 'home',
    component: HomePage,
    
},
{
    path: '/apartment/:id',
    name: 'apartment-details',
    component: ShowPage,
    props: true, // Assicurati che props sia abilitato per passare l'id
},

{
    path: '/login',
    name: 'login',
    component: [LoginApp, NavApp],
    props: true,
},

{
    path: '/register',
    name: 'register',
    component: [RegisterApp, NavApp],
    props: true,
},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;

