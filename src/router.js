
    import { createRouter, createWebHistory } from 'vue-router';
    import ApartmentsList from './components/ApartmentsList.vue';
    import ApartmentCard from './components/ApartmentCard.vue';
    import AppHomepage from './pages/AppHomepage.vue';
    import AppSearchResults from './pages/AppSearchResults.vue';
    import ProvaRicerca from './components/ProvaRicerca.vue';


    

    const routes = [
    {
        path: '/apartments',
        name: 'homepage',
        component: AppHomepage,
        
       
    },
    {
        path: '/risultati-ricerca',
        name: 'RisultatiRicerca',
        component: AppSearchResults,
        props: true, 
    },
    
<<<<<<< HEAD
    {
        path: '/register',
        name: 'register',
        component: [RegisterApp, NavApp],
        props: true,
    },
    {
        path: '/message/:id',
        name: 'Message',
        component: Message,
        props: true,
      },      
=======
>>>>>>> origin/main
    ];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;