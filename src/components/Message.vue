<<<<<<< HEAD
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

<<<<<<< HEAD
<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
=======

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
</template> -->


<script>
export default {
    props: ['results'],
    data() {
        return {
            apartments: this.results || []  // Se i risultati non sono definiti, usa un array vuoto
        };
    }
};
</script>

<template>
    <div class="container">
        <h1 class="text-center my-5">Risultati Ricerca Appartamenti</h1>
        <div class="row flex-column align-items-center w-100">
            <div class="col-md-4 mb-4 w-100" v-for="apartment in apartments" :key="apartment.id">
                <div class="card appartamenti w-100">
                    <img :src="apartment.Img" class="card-img-top" alt="Apartment Image">
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

<style lang="scss">
</style>

  
  
>>>>>>> origin/main
