
    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from './components/HomePage.vue';
    import ShowPage from './components/ShowPage.vue';
    import SearchResults from './components/SearchResults.vue';
    import LoginApp from './components/LoginApp.vue';
    import RegisterApp from './components/RegisterApp.vue';
    import NavApp from './components/NavApp.vue';
    import Message from './components/Message.vue';
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
        props: true, 
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
    {
        path: '/message',
        name: 'Message',
        component: Message,
      },
    ];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;

