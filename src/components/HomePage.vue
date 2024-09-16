<script>
import axios from 'axios';

export default {
  props: '',
  data() {
    return {
      apartments: [],  // Dati vuoti inizialmente, verranno popolati tramite API
    };
  },
  methods: {
    getApartments() {
      axios.get('http://127.0.0.1:8000/api/apartments')
        .then((response) => {
          console.log(response.data.results);
          this.apartments = response.data.results;  // Popola la lista degli appartamenti

<<<<<<< messages_vue
  data(){
        return{
            apartments:[],
          
        }


      },
      methods: {
        getApartments (){axios.get('http://127.0.0.1:8000/api/apartments', {
        params: {
        
        }
        })
        .then((response)=> {
            console.log(response.data);
            this.apartments  = response.data.results;
        })
        .catch(function (error) {
            console.log(error);
=======
>>>>>>> main
        })
        .catch((error) => {
          console.log(error);  // Gestisci l'errore
        });
    },
  },
  created() {
    this.getApartments();  // Chiama l'API al caricamento della pagina
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-5">Lista Appartamenti</h1>
    <div class="row flex-column align-items-center w-100">
      <div class="col-md-4 mb-4 w-100" v-for="apartment in apartments" :key="apartment.id">
        <div class="card appartamenti w-100">
          <img :src="apartment.Img" class="card-img-top " alt="Apartment Image">
          <div class="card-body">
            <h5 class="card-title">{{ apartment.Nome }}</h5>
            <p class="card-text">
              <strong>Letti:</strong> {{ apartment.Letti }}<br>
              <strong>Bagni:</strong> {{ apartment.Bagni }}<br>
              <strong>Stanze:</strong> {{ apartment.Stanze }}<br>
              <strong>Indirizzo:</strong> {{ apartment.Indirizzo }}<br>
              <strong>Metri Quadri:</strong> {{ apartment.Metri_quadrati }} m²<br>
              <strong>Prezzo:</strong> €{{ apartment.Prezzo }}
            </p>
            <router-link :to="{ name: 'apartment-details', params: { id: apartment.id } }" class="btn btn-primary">
              Mostra dettagli
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>





</style>
