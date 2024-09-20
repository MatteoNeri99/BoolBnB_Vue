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
    methods:{
      goToRegister() {
        window.location.href = 'http://127.0.0.1:8000/register';
      },
      goToLogin() {
        window.location.href = 'http://127.0.0.1:8000/login';
      }
    }
}
</script>

<template class="d-flex justify-content-center align-items-center">
  <header>
    <div class="header text-center"> 
      <img src="/src/img/logo.png" alt="logo" class="logo">
    </div> 
    <button @click="goToRegister" class="btn btn-primary ms-3">
      Registrati
    </button>
    <button @click="goToLogin" class="btn btn-primary ms-3">
      Accedi
    </button>
  </header>
  <main>
    <ProvaRicerca/> 
  </main>
  <footer class="pt-4">
    <div>
      <h2 class="mb-4 text-center">Perché scegliere BoolBnb?</h2> 
    </div>
    <div class="container">
      <div class="d-flex flex-row w-00 text-center">
        <div class="col-md-4"> 
            <img class="img" src="/src/img/customer-service.png" alt="Assistenza 24/7"> 
            <p>Assistenza 24/7</p> 
        </div>
        <div class="col-md-4"> 
            <img class="img" src="/src/img/housepng.png" alt="Alloggi Unici"> 
            <p>Alloggi Unici</p> 
        </div> 
        <div class="col-md-4"> 
            <img class="img" src="/src/img/booking.png" alt="Prenotazione Facile"> 
            <p>Prenotazione Facile</p> 
        </div>
      </div>
    </div>
    <p class="text-center mt-4">
      <u>Contact us at: Boolbnb@gmail.com</u>
    </p>
  </footer>
  <!-- inserire dati come :contatti,,p.iva,img(casa) -->
</template>

<style lang="scss" >
@use '../node_modules/bootstrap/scss/bootstrap.scss';
template{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header{
  background-color: #b19898;
  ;
}
.logo{
  margin-top: 5%;
  width: 50%;
}
img{
  width: 20%;
}
footer{
  background-color: #936f6f;
}

</style>
