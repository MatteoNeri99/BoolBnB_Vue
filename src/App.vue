<script>
import ApartmentsList from './components/ApartmentsList.vue';
import HeaderApp from './components/HeaderApp.vue';
import ApartmentShow from './components/ApartmentShow.vue'
import AppHomepage from './pages/AppHomepage.vue';
import { RouterView } from 'vue-router';

export default  {
    components:{
      ApartmentsList,
      HeaderApp,
      ApartmentShow,
      AppHomepage,
      
    },

    data(){
            return{

            }
        },
        

}
</script>

<template>

<router-view>
</router-view>

</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';

</style>
