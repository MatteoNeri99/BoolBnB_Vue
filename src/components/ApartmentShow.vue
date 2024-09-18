<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 p-3 text-center">
          <div class="card p-3" style="width: 100%;">
            <img class="card-img-top w-100" :src="apartment.Img" alt="Apartment Image">
            <div class="card-body">
              <h5 class="card-title">{{ apartment.Nome }}</h5>
              <ul class="list-unstyled">
                <li><strong>Prezzo:</strong> €{{ apartment.Prezzo }}</li>
                <li><strong>Stanze:</strong> {{ apartment.Stanze }}</li>
                <li><strong>Letti:</strong> {{ apartment.Letti }}</li>
                <li><strong>Bagni:</strong> {{ apartment.Bagni }}</li>
                <li><strong>Metri quadrati:</strong> {{ apartment.Metri_quadrati }} m²</li>
                <li><strong>Indirizzo:</strong> {{ apartment.Indirizzo }}</li>
                <li><strong>Città:</strong> {{ apartment.citta }}</li>
                <li>
                  <strong>Servizi:</strong>
                  <span v-for="service in apartment.services" :key="service.id" class="badge bg-primary m-1">
                    {{ service.Nome }}
                  </span>
                </li>
              </ul>
              <button class="btn btn-primary mt-3" @click="toggleMessageForm">
                Invia un messaggio
              </button>
  
              <!-- Form per inviare il messaggio -->
              <div v-if="showMessageForm" class="mt-3">
                <form @submit.prevent="sendMessage">
                  <div class="mb-3">
                    <label for="email" class="form-label">La tua email:</label>
                    <input v-model="email" type="email" class="form-control" id="email" required>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Il tuo messaggio:</label>
                    <textarea v-model="message" class="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-success">Invia Messaggio</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        apartment: {}, // Dati dell'appartamento
        email: '',     // Email dell'utente
        message: '',   // Messaggio dell'utente
        showMessageForm: false, // Mostrare o nascondere il form del messaggio
      };
    },
    created() {
      this.fetchApartment(); // Caricare i dettagli dell'appartamento
    },
    methods: {
      // Metodo per ottenere i dettagli dell'appartamento dal backend
      fetchApartment() {
        const apartmentId = this.$route.params.id; // Ottenere l'ID dell'appartamento dalla rotta
        axios.get(`/api/apartments/${apartmentId}`)
          .then((response) => {
            this.apartment = response.data; // Assegnare i dati dell'appartamento
          })
          .catch((error) => {
            console.error('Errore durante il recupero dell\'appartamento:', error);
          });
      },
      // Metodo per mostrare o nascondere il form del messaggio
      toggleMessageForm() {
        this.showMessageForm = !this.showMessageForm;
      },
      // Metodo per inviare il messaggio
      sendMessage() {
        axios.post('/api/messages', {
          apartment_id: this.apartment.id, // Collegare il messaggio all'ID dell'appartamento
          Mail: this.email,                // Email dell'utente
          Testo: this.message,             // Messaggio dell'utente
        })
          .then(() => {
            alert('Messaggio inviato con successo!');
            this.email = '';     // Ripristinare il campo email
            this.message = '';   // Ripristinare il campo messaggio
            this.showMessageForm = false; // Nascondere il form
          })
          .catch((error) => {
            console.error('Errore nell\'invio del messaggio:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    height: 300px;
    object-fit: cover;
  }
  </style>
  