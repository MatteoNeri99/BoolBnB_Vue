<script>

import ProvaRicerca from '../components/ProvaRicerca.vue';
import { RouterView } from 'vue-router';
import SearchResults from '../components/SearchResults.vue';

export default  {
    components:{
      SearchResults,
      ProvaRicerca
    },

    data(){
            return{

            }
        },
        

}
</script>

<template>



<!-- inserire dati come :contatti,logo,p.iva,img(casa) -->
<ProvaRicerca/> 



</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
