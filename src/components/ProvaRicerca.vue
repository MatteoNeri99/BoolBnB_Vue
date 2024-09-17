<template>
    <div class="search-apartments">
      <h2>Ricerca Appartamenti</h2>
  
      <!-- Form di ricerca -->
      <form @submit.prevent="searchApartments">
        <div>
          <label for="indirizzo">Indirizzo:</label>
          <input v-model="searchForm.indirizzo" type="text" id="autocomplete" required />
        </div>
  
        <div>
          <label for="radius">Raggio (km):</label>
          <input v-model.number="searchForm.radius" type="number" id="radius" min="1" max="20" />
        </div>
  
        <div>
          <label for="stanze">Stanze:</label>
          <input v-model.number="searchForm.Stanze" type="number" id="stanze" />
        </div>
  
        <div>
          <label for="letti">Letti:</label>
          <input v-model.number="searchForm.Letti" type="number" id="letti" />
        </div>
  
        <div>
          <label for="bagni">Bagni:</label>
          <input v-model.number="searchForm.Bagni" type="number" id="bagni" />
        </div>
  
        <div>
          <label for="prezzo">Prezzo massimo:</label>
          <input v-model.number="searchForm.Prezzo" type="number" id="prezzo" />
        </div>
  
        <div>
          <label for="services">Servizi:</label>
          <select v-model="searchForm.services" id="services" multiple>
            <option value="1">Wi-Fi</option>
            <option value="2">Aria condizionata</option>
            <option value="3">Parcheggio</option>
            <!-- Aggiungi altri servizi disponibili -->
          </select>
        </div>
  
        <button type="submit">Cerca</button>
      </form>
  
      <!-- Risultati della ricerca -->
      <div v-if="apartments.length > 0">
        <h3>Risultati della ricerca:</h3>
        <ul>
          <li v-for="apartment in apartments" :key="apartment.id">
            {{ apartment.nome }} - {{ apartment.prezzo }}€
          </li>
        </ul>
      </div>
  
      <div v-if="error" class="error-message">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { loadGoogleMapsScript, initializeAutocomplete } from '../googleApi';
  
  export default {
    data() {
      return {
        searchForm: {
          indirizzo: '',
          radius: 20, // valore predefinito
          Stanze: null,
          Letti: null,
          Bagni: null,
          Prezzo: null,
          services: []
        },
        apartments: [],  // Risultati degli appartamenti
        error: null      // Messaggio di errore
      };
    },
    methods: {
      async searchApartments() {
        try {
          // Resetta i risultati e gli errori precedenti
          this.apartments = [];
          this.error = null;
  
          // Effettua la chiamata API
          const response = await axios.get('/api/apartments/search', {
            params: this.searchForm
          });
  
          if (response.data.success) {
            // Se la risposta è positiva, aggiorna i risultati degli appartamenti
            this.apartments = response.data.apartments;
          } else {
            // Altrimenti, mostra un errore
            this.error = response.data.message;
          }
        } catch (error) {
          // Gestisci errori
          this.error = error.response ? error.response.data.message : 'Errore nella ricerca degli appartamenti.';
        }
      }
    },
    mounted() {
        // Carica lo script di Google Maps e inizializza l'autocompletamento
        loadGoogleMapsScript(initializeAutocomplete);
  }};
  </script>
  
  <style scoped>
  /* Stili semplici per il form */
  .search-apartments {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .search-apartments form {
    display: grid;
    grid-gap: 10px;
    margin-bottom: 20px;
  }
  
  .search-apartments form div {
    display: flex;
    flex-direction: column;
  }
  
  .search-apartments button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .search-apartments button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }
  </style>
  