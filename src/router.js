
    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from './components/HomePage.vue';
    import ShowPage from './components/ShowPage.vue';
    import SearchResults from './components/SearchResults.vue';


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
    },
    ];

    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

    export default router;

