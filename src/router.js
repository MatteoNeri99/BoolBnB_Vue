
import { createRouter, createWebHistory } from 'vue-router';
import ApartmentsList from './components/ApartmentsList.vue';
import AppHomepage from './pages/AppHomepage.vue';
import AppSearchResults from './pages/AppSearchResults.vue';
import ApartmentShow from './components/ApartmentShow.vue';

const routes = [
  {
    path: '/apartments',
    name: 'homepage',
    component: AppHomepage,
  },
  {
    path: '/apartment-details/:id',
    name: 'apartment-details',
    component: ApartmentShow,
    props: true,  // Passa l'ID come prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
