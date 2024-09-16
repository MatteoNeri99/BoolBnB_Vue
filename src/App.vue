<script>
import HomePage from './components/HomePage.vue';
import HeaderApp from './components/HeaderApp.vue';
import ShowPage from './components/ShowPage.vue';


export default  {
    components:{
      HomePage,
      HeaderApp,
      ShowPage,

    },

    data(){
            return{

            }
        },
        

}
</script>

<template>

<HomePage> </HomePage>
<ShowPage></ShowPage>
<HeaderApp> </HeaderApp>


</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';


</style>
