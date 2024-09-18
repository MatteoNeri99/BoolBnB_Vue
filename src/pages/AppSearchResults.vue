<script>
import HeaderApp from '../components/HeaderApp.vue';
import { RouterView } from 'vue-router';
import SearchResults from '../components/SearchResults.vue';

export default  {
    components:{
      HeaderApp,
      SearchResults,
    },

    data(){
            return{

            }
        },
        

}
</script>

<template>


<HeaderApp/>
<SearchResults/>



</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
