<script>
import HomePage from './components/HomePage.vue';
import HeaderApp from './components/HeaderApp.vue';


export default  {
    components:{
      HomePage,
      HeaderApp,

    },

    data(){
            return{

            }
        },
        

}
</script>

<template>

<HomePage> </HomePage>
<HeaderApp> </HeaderApp>
 
</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
