<script>
import HomePage from './components/HomePage.vue';
import HeaderApp from './components/HeaderApp.vue';
import ShowPage from './components/ShowPage.vue';
import NavApp from './components/NavApp.vue';
import { RouterView } from 'vue-router';

export default  {
    components:{
      HomePage,
      HeaderApp,
      ShowPage,
      NavApp,
    },

    data(){
            return{

            }
        },
        

}
</script>

<template>

<NavApp/>
<HeaderApp/>
<router-view/>


</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
