
<script>
import axios from 'axios';

export default {
  data() {
    return {
      Mail: '',       // Email dell'utente
      Testo: '',      // Messaggio dell'utente
    };
  },
  methods: {
    // Funzione per inviare il messaggio
    sendMessage() {
      // Effettua la richiesta POST per inviare il messaggio all'appartamento con ID 1
      axios.post('http://127.0.0.1:8000/api/messages', {
        apartment_id: 1, // ID fisso dell'appartamento
        Mail: this.Mail,
        Testo: this.Testo,
      })
      .then(response => {
        alert('Messaggio inviato con successo!');
        // Reset dei campi dopo l'invio del messaggio
        this.Mail = '';
        this.Testo = '';
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Errore nell\'invio del messaggio.');
      });
    }
  }
}
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
        Invia Messaggio per Appartamento ID: 1
      </button>
    </form>
  </div>
</template>



  
  