    <script>
    import axios from 'axios';

    export default {
        props: [id],
    data() {
        return {
        apartment: {}, 

        };
    },
        methods: {
        getApartments(id) {
        axios.get(`http://127.0.0.1:8000/api/apartments/${id}`)
            .then((response) => {
            console.log(response.data.results);
            this.apartments = response.data.results;  // Popola la lista degli appartamenti
            })
            .catch((error) => {
            console.log(error);  // Gestisci l'errore
            });
        },
    },
    created() {
        this.getApartments(this.$route.params.id);  // Chiama l'API al caricamento della pagina
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
            </div>
        </article>
        </div>
    </div>
    </template>

    <style lang="scss" scoped>

    </style>

