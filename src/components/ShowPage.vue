<template>
    <div class="container">
      <div class="row justify-content-center">
        <article class="col-12 p-3 text-center">
          <div class="card p-3 w-100">
            <!-- Dettagli dell'appartamento -->
            <img class="card-img-top w-100" :src="apartment.Img" alt="Immagine Appartamento">
            <div class="card-body">
              <h5 class="card-title">{{ apartment.Nome }}</h5>
              <p class="card-text">Nome: {{ apartment.Nome }}</p>
            </div>
            <ul class="list-unstyled">
              <li>Prezzo: &euro;{{ apartment.Prezzo }}</li>
              <li>Stanze: {{ apartment.Stanze }}</li>
              <li>Letti: {{ apartment.Letti }}</li>
              <li>Bagni: {{ apartment.Bagni }}</li>
              <li>Metri quadrati: {{ apartment.Metri_quadrati }} mq</li>
              <li>Indirizzo: {{ apartment.Indirizzo }}</li>
            </ul>
            <div class="card-footer">
              <router-link to="/" class="btn btn-primary">Torna alla lista appartamenti</router-link>
            </div>
            <!-- Form di invio messaggio -->
            <div class="card-footer">
              <h2>Invia un messaggio al proprietario</h2>
              <form @submit.prevent="sendMessage">
                <div>
                  <label for="email">La tua email:</label>
                  <input v-model="Mail" type="email" id="email" required maxlength="50" :readonly="isLoggedIn">
                </div>
                <div>
                  <label for="message">Messaggio:</label>
                  <textarea v-model="Testo" id="message" required></textarea>
                </div>
                <button type="submit">
                  Invia messaggio al proprietario
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        apartment: {},
        Mail: '',
        Testo: '',
        isLoggedIn: false,
      };
    },
    methods: {
      getApartment() {
        axios.get(`http://127.0.0.1:8000/api/apartments/${this.id}`)
          .then((response) => {
            this.apartment = response.data.results || response.data;
          })
          .catch((error) => {
            console.error('Errore nel caricamento dell\'appartamento:', error);
          });
      },
      getUserEmail() {
        axios.get('http://127.0.0.1:8000/api/user')
          .then(response => {
            this.Mail = response.data.email;
            this.isLoggedIn = true;
          })
          .catch(error => {
            console.error('Utente non autenticato:', error);
            this.isLoggedIn = false;
          });
      },
      sendMessage() {
        axios.post('http://127.0.0.1:8000/api/messages', {
          apartment_id: this.id,
          Mail: this.Mail,
          Testo: this.Testo,
        })
        .then(response => {
          alert('Messaggio inviato con successo!');
          this.Testo = '';
        })
        .catch(error => {
          console.error('Errore nell\'invio del messaggio:', error.response.data);
          alert('Errore nell\'invio del messaggio.');
        });
      },
    },
    created() {
      this.getApartment();
      this.getUserEmail();
    },
  };
  </script>
  