
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

<template>
  <div class="container">
    <div class="row justify-content-center">
      <article class="col-12 p-3 text-center">
        <div class="card p-3 w-100 styled-header">
          <!-- Dettagli dell'appartamento -->
          <img class="card-img-top w-100" :src="apartment.Img" alt="Immagine Appartamento">
          <div class="card-body">
            <h5 class="card-title">{{ apartment.Nome }}</h5>
            <ul class="list-unstyled">
              <li class="fw-bold"><i class="fa-solid fa-euro-sign"></i> Prezzo: <span class="fw-normal">&euro;{{ apartment.Prezzo }}</span></li>
              <li class="fw-bold"><i class="fa-solid fa-person-booth"></i> Stanze: <span class="fw-normal">{{ apartment.Stanze }}</span></li>
              <li class="fw-bold"><i class="fa-solid fa-bed"></i> Letti: <span class="fw-normal">{{ apartment.Letti }}</span></li>
              <li class="fw-bold"><i class="fa-solid fa-toilet"></i> Bagni: <span class="fw-normal">{{ apartment.Bagni }}</span></li>
              <li class="fw-bold"><i class="fa-solid fa-ruler"></i> Metri quadrati: <span class="fw-normal">{{ apartment.Metri_quadrati }} metri quadrati</span></li>
              <li class="fw-bold"><i class="fa-solid fa-location-dot"></i> Indirizzo: <span class="fw-normal">{{ apartment.Indirizzo }}</span></li>
            </ul>
            <p class="fw-bold" Servizi: v-for="service in apartment.services">{{ service.Nome }}</p>
          </div>
          <div class="card-footer">
            <router-link to="/" class="btn btn-primary submit-btn">Torna alla homepage</router-link>
          </div>

          <!-- Form di invio messaggio -->
          <div class="card-footer styled-footer">
            <h2 class="footer-title">Invia un messaggio al proprietario</h2>
            <form @submit.prevent="sendMessage" class="contact-form">
              <div class="mb-3">
                <label for="emailInput" class="form-label">Indirizzo Email</label>
                <input
                  type="email"
                  class="form-control email-input"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  v-model="Mail"
                  :readonly="isLoggedIn"
                  required
                  maxlength="50"
                  placeholder="Inserisci il tuo indirizzo email"
                >
                <div id="emailHelp" class="form-text">
                  Non condivideremo mai la tua email con nessun altro.
                </div>
              </div>
              <div class="mb-3">
                <label for="messageInput" class="form-label">Messaggio</label>
                <textarea
                  class="form-control message-input"
                  id="messageInput"
                  v-model="Testo"
                  required
                  placeholder="Scrivi qui il tuo messaggio"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary submit-btn">Invia Messaggio</button>
            </form>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}

.styled-footer {
  padding: 30px;
  background-color: #d3b4b4;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
}

.styled-header {
  padding: 30px;
  background-color: #d9c8c8;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
}

.footer-title {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 500;
  color: #555;
}

.email-input, .message-input {
  border: 2px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

.email-input:focus, .message-input:focus {
  border-color: #e84141;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.message-input {
  min-height: 120px;
}

.form-text {
  color: #888;
}

.submit-btn {
  background-color: #e84141;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.submit-btn:hover {
  background-color: #480d0d;
}
</style>