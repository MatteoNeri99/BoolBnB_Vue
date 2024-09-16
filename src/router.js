<<<<<<< messages_vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import ApartmentsIndex from './components/HomePage.vue';
import ApartmentShow from './components/ApartmentShow.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'apartments-index', component: HomePage },
  { path: '/apartments/:id', name: 'apartment-show', component: ApartmentShow, props: true }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
=======
    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from './components/HomePage.vue';
    import ShowPage from './components/ShowPage.vue';

    const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        props: true, // Assicurati che props sia abilitato per passare l'id
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
>>>>>>> main
