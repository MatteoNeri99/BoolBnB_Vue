<script>

import HeaderApp from './components/HeaderApp.vue';

import ShowPage from './components/ShowPage.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    HeaderApp,
  },
};

</script>

<template>


  <HeaderApp></HeaderApp>
  <router-view></router-view>


</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
