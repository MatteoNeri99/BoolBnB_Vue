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
    <div class="d-flex justify-content-center pb-4">
      <button @click="goToRegister" class="btn btn-danger submit-btn ms-3">
        Registrati
      </button>
      <button @click="goToLogin" class="btn btn-danger submit-btn ms-3">
        Accedi
      </button>
    </div>
  </header>
  <main>
    <ProvaRicerca/> 
  </main>
  <footer class="pt-4">
    <div class="white-color">
      <h2 class="mb-4 text-center">Perché scegliere BoolBnb?</h2> 
    </div>
    <div class="container white-color">
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
            <img class="img" src="/src/img/sheet_8861435.png" alt="Prenotazione Facile"> 
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
  padding-bottom: 4rem;
}

.white-color{
color: white;
}

img{
  width: 20%;
  filter: brightness(0) invert(1);
}
footer{
  background-color: #936f6f;
}
.submit-btn {
  background-color: #e84141;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  width: 25%;
}
</style>
