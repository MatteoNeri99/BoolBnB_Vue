
    import { createRouter, createWebHistory } from 'vue-router';
    import ApartmentsList from './components/ApartmentsList.vue';
    import AppHomepage from './pages/AppHomepage.vue';
    import AppSearchResults from './pages/AppSearchResults.vue';
    import ProvaRicerca from './components/ProvaRicerca.vue';


    

    const routes = [
    {
        path: '/apartments',
        name: 'homepage',
        component: AppHomepage,
        
       
    },
    ];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;