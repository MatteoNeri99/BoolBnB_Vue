<script>
import axios from 'axios';

export default {
  props: ['id'], // Accetta l'ID dell'appartamento come prop
  data() {
    return {
      Mail: '',
      Testo: '',
      apartment: null, // Per memorizzare i dettagli dell'appartamento
    };
  },
  created() {
    this.getApartment(this.id); // Usa l'ID passato come prop per chiamare l'API
},
methods: {
  getApartment(id) {
      axios.get(`http://127.0.0.1:8000/api/apartments/${id}`)
        .then((response) => {
          console.log(response.data.results); // Verifica la struttura dei dati
          this.apartment = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendMessage() {
        console.log('ID Appartamento:', this.id);
        axios.post('http://127.0.0.1:8000/api/messages', {
            apartment_id: this.id,   // Questo è corretto
            Mail: this.Mail,         // Usa 'Mail' con la maiuscola
            Testo: this.Testo,       // Usa 'Testo' con la maiuscola
        })
        .then(response => {
            alert('Messaggio inviato con successo!');
            this.Mail = '';
            this.Testo = '';
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error.response.data); // Stampa gli errori per diagnosi
            alert('Errore nell\'invio del messaggio.');
        });
    }
}
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
        Invia messaggio al proprietario
      </button>
    </form>
  </div>
</template>



  
  