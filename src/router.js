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
