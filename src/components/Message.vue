<template>
  <!-- Bootstrap-styled form -->
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
    <!-- Opzionale: aggiungi una checkbox se necessario -->
    <!--
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    -->
    <button type="submit" class="btn btn-primary">Invia Messaggio</button>
  </form>
</template>

<script>
=======
<!-- <script>
>>>>>>> origin/main
import axios from 'axios';

export default {
  props: ['id'], // Riceve l'ID dell'appartamento come prop
  data() {
    return {
      Mail: '',
      Testo: '',
      isLoggedIn: false, // Indica se l'utente è loggato
    };
  },
  methods: {
    getUserEmail() {
      // Tenta di ottenere l'email dell'utente loggato
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
      console.log('ID Appartamento:', this.id);
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
    this.getUserEmail();
  },
};
</script>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
