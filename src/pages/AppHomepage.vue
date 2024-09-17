<script>
import HeaderApp from '../components/HeaderApp.vue';
import ProvaRicerca from '../components/ProvaRicerca.vue';
import { RouterView } from 'vue-router';

export default  {
    components:{
      HeaderApp,
      ProvaRicerca
    },

    data(){
            return{

            }
        },
        

}
</script>

<template>


<!-- <HeaderApp/> -->
<!-- inserire dati come :contatti,logo,p.iva,img(casa) -->
<ProvaRicerca/>
<H1>AppHomepage</H1> 



</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
