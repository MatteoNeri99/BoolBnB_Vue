
    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from './components/ApartmentsList.vue';
    import ShowPage from './components/ApartmentCard.vue';
    import AppHomepage from './pages/AppHomepage.vue';
    import SearchResults from './components/SearchResults.vue';

    

    const routes = [
    {
        path: '/homepage',
        name: 'homepage',
        component: AppHomepage,
        
       
    },
    {
        path: '/risultati-ricerca',
        name: 'RisultatiRicerca',
        component: AppSearchResults,
        props: true, 
    },
    
    ];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;

