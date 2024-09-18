<!-- <script>
import axios from 'axios';

export default {
  props: ['id'], // Accetta l'ID dell'appartamento come prop
  data() {
    return {
      Mail: '',
      Testo: '',
    };
  },
  methods: {
    sendMessage() {
      axios.post('http://127.0.0.1:8000/api/messages', {
        apartment_id: this.id, // Usa l'ID passato
        Mail: this.Mail,
        Testo: this.Testo,
      })
      .then(response => {
        alert('Messaggio inviato con successo!');
        this.Mail = '';
        this.Testo = '';
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Errore nell invio del messaggio.');
      });
    },
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

  
  