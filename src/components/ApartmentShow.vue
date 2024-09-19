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
              <div class="mb-3">
                <label for="emailInput" class="form-label">Indirizzo Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  v-model="Mail"
                  :readonly="isLoggedIn"
                  required
                  maxlength="50"
                >
                <div id="emailHelp" class="form-text">
                  Non condivideremo mai la tua email con nessun altro.
                </div>
              </div>
              <div class="mb-3">
                <label for="messageInput" class="form-label">Messaggio</label>
                <textarea
                  class="form-control"
                  id="messageInput"
                  v-model="Testo"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Invia Messaggio</button>
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
  props: ['id'],  // Riceve l'ID come prop dalla route
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
          this.apartment = response.data.results || response.data;  // Assicura che il formato dei dati sia corretto
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
        this.Testo = ''; // Resetta il campo del messaggio dopo l'invio
      })
      .catch(error => {
        console.error('Errore nell\'invio del messaggio:', error.response.data);
        alert('Errore nell\'invio del messaggio.');
      });
    },
  },
  created() {
    this.getApartment();  // Carica i dettagli dell'appartamento all'apertura della pagina
    this.getUserEmail();  // Recupera l'email se l'utente è loggato
  },
};
</script>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
