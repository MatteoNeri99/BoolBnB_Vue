<script>
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


<template>
  <!-- Form per inviare il messaggio -->
  <div>
    <h2>Invia un messaggio al proprietario</h2>
    <form @submit.prevent="sendMessage">
      <div>
        <label for="email">La tua email:</label>
        <input v-model="Mail" type="email" id="email" required maxlength="50">
      </div>
      <div>
        <label for="message">Messaggio:</label>
        <textarea v-model="Testo" id="message" required></textarea>
      </div>
      <!-- Invio fisso al'appartamento ID 1 -->
      <button type="submit">
        Invia Messaggio al proprietario
      </button>
    </form>
  </div>
</template>



  
  