
<script>
import axios from 'axios';
import SearchResults from './SearchResults.vue';

export default {
  data() {
    return {
      address: '',
      radius: 20,
      autocompleteResults: [],
      services:[],
      selectedCoordinates: null,
      isValidAddress: false,
      filters: {
        Stanze: null,
        Letti: null,
        Bagni: null,
      },
      apartments: [],
    };
  },
  components:{
    SearchResults,

  },
  methods: {
    // Metodo per ottenere i suggerimenti di autocomplete dall'API di TomTom
    async fetchAutocomplete() {
  if (this.address.length > 1) {
    try {
      const response = await axios.get(
        `https://api.tomtom.com/search/2/search/${this.address}.json`,
        {
          params: {
            key: "WGEuiGWlvZ3XQQpGnoIQ3AlN70tGNmLb", // Correct way to reference the API key
            typeahead: true,
            limit: 5,
          },
        }
      );
      this.autocompleteResults = response.data.results;
      this.isValidAddress = false; // Reset validity until an address is selected
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    }
  } else {
    this.autocompleteResults = [];
  }
},

    // Metodo chiamato quando l'utente seleziona un indirizzo
    selectAddress(result) {
      this.address = result.address.freeformAddress;
      this.selectedCoordinates = result.position;
      this.isValidAddress = true; // Set as valid once an address is selected
      this.autocompleteResults = [];
    },

    // Metodo per cercare appartamenti usando le API
    async searchApartments() {
      console.log(this.address)
      console.log(this.selectedCoordinates)
      if (!this.selectedCoordinates) {
        alert('Please select a valid address from the list.');
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/apartments/search', {
          params: {
            Stanze: this.filters.Stanze,
            Letti: this.filters.Letti,
            Bagni: this.filters.Bagni,
            services:this.services,
            Latitudine: this.selectedCoordinates.lat,
            Longitudine: this.selectedCoordinates.lon,
            radius: this.radius,
          }
        });
        
        this.apartments = response.data;
        console.log(this.apartments)
      } catch (error) {
        console.error('Error searching apartments:', error);
      }
    },
  },
};
</script>
<template>
    <div class="apartment-search">
      <h3>Search Apartments</h3>
    <form >  
      <div class="form-group">
        <label for="indirizzo">Enter Address</label>
        <input 
          type="text" 
          v-model="address" 
          @input="fetchAutocomplete" 
          class="form-control me-2 searchbar border-radius" 
          id="Indirizzo" name="Indirizzo"  
          placeholder="Inserisci un indirizzo" 
          aria-label="Search">
        <ul v-if="autocompleteResults.length" class="autocomplete-results">
          <li v-for="result in autocompleteResults" :key="result.id" @click="selectAddress(result)">
            {{ result.address.freeformAddress }}
          </li>
        </ul>
        <p v-if="!isValidAddress && address.length > 0" class="text-danger">Please select a valid address from the list.</p>
      </div>

      <div class="row mt-3 justify-content-center">
        <div class="col-md-2">
            <label for="numStanze" class="form-label">Numero di stanze</label>
            <input v-model="filters.Stanze" type="number" class="form-control" name="Stanze" id="Stanze" placeholder="Inserisci il numero di stanze">
        </div>
        <div class="col-md-2">
            <label for="numLetti" class="form-label">Numero di posti letto</label>
            <input v-model="filters.Letti" type="number" class="form-control" name="Letti" id="Letti" placeholder="Inserisci il numero di letti">
        </div>
        <div class="col-md-2">
            <label for="numBagni" class="form-label">Numero di bagni</label>
            <input v-model="filters.Bagni" type="number" class="form-control" name="Bagni" id="Bagni" placeholder="Inserisci il numero di bagni ">
        </div>
        <!-- Campo per il raggio di ricerca -->
        <div class="col-md-2">
          <label for="radius" class="form-label">Raggio di ricerca (km)</label>
          <input v-model="radius" type="number" class="form-control" name="radius" id="radius" min="1" max="20" value="20" placeholder="20 km">
          <small class="form-text text-muted">Il raggio di ricerca può essere modificato solo per ridurre il valore.</small>
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="searchApartments" :disabled="!isValidAddress">Search</button>
      <div class="container">
        <div class="row">
          <div class=" col-md-2 d-flex flex-column ">
            <ul class="list-unstyled d-flex align-items-center  m-3" >
              <li    class="p-3"><label><input type="checkbox" v-model="services" name="services[]"  value="1"> WiFi gratuito</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="2"> Colazione inclusa</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="3"> Aria condizionata</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="4"> Parcheggio gratuito</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="5"> Servizio in camera</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="6"> Animali ammessi</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="7"> Piscina</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="8"> Palestra</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="9"> Spa e centro benessere</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="10"> TV satellitare</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="11"> Minibar</label></li>
              <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="12"> Cassaforte in camera</label></li>
            </ul>
            <ul class="list-unstyled d-flex align-items-center  m-3" >
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="13"> Accesso per disabili</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="14"> Deposito bagagli</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="15"> Servizio navetta</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="16"> Noleggio biciclette</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="17"> Area giochi per bambini</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="18"> Sala conferenze</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="19"> Bar</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="20"> Ristorante</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="21"> Servizio lavanderia</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="22"> Asciugacapelli</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="23"> Ferro da stiro</label></li>
              <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="24"> Reception 24 ore su 24</label></li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
  <SearchResults :apartments="apartments"/>
</template>

<style scoped>
.autocomplete-results {
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  list-style: none;
}
.autocomplete-results li {
  padding: 10px;
  cursor: pointer;
}
.autocomplete-results li:hover {
  background-color: #f0f0f0;
}
</style>
