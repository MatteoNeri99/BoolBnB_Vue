<script>
import axios from 'axios';

export default {
  props: ['id'], // Riceve l'ID come prop
  data() {
    return {
      apartment: [],
    };
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
  },
  created() {
    this.getApartment(this.id); // Usa l'ID passato come prop
  },
};
</script>




    <template>
    <div class="container">
        <div class="row justify-content-center">
        <article class="col-12 p-3 text-center">
            <div class="card p-3 w-100">
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
            <div class="card-footer">
                <router-link :to="{ name: 'Message', params: { id: apartment.id } }" class="btn btn-primary">
                    Invia un messaggio al proprietario
                </router-link>

            </div>
            </div>
        </article>
        </div>
    </div>

    
    </template>

    <style lang="scss" scoped>

    </style>

