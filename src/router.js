
    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from './components/HomePage.vue';
    import ShowPage from './components/ShowPage.vue';

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
    ];

    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

    export default router;

