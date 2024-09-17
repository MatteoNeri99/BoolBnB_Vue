<!-- <script >
import axios from 'axios';


    export default  {
        

        data(){
                return{
                    Letti:'',
                    Stanze:'',
                    Bagni:'',
                    Metri_quadrati:'',
                    Prezzo:'',
                    Indirizzo:'',
                    services:[],
                
                }   


            },
            methods: {
                apartmentSearch (){axios.get('http://127.0.0.1:8000/api/apartments/search', {
                params: {
                    Letti: this.Letti,
                    Stanze: this.Stanze,
                    Bagni: this.Bagni,
                    Metri_quadrati: this.Metri_quadrati,
                    Prezzo: this.Prezzo,
                    Indirizzo: this.Indirizzo,
                
                }
                })
                .then((response)=> {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                })
                }   
        }

        }

</script > -->

<!-- DA PROGETTO LARAVEL -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      indirizzo: '',
      selectedServices: [],
      servicesList: [
        { id: 1, name: 'WiFi gratuito' },
        { id: 2, name: 'Colazione inclusa' },
        // ... aggiungi tutti gli altri servizi qui
        { id: 24, name: 'Reception 24 ore su 24' },
      ],
      Stanze: null,
      Letti: null,
      Bagni: null,
      Prezzo: null,
      radius: 20, // Valore di default
    };
  },
  methods: {
    submitForm() {
      // Prepara i dati da inviare
      const formData = {
        indirizzo: this.indirizzo,
        services: this.selectedServices,
        Stanze: this.Stanze,
        Letti: this.Letti,
        Bagni: this.Bagni,
        Prezzo: this.Prezzo,
        radius: this.radius,
      };

      // Invia i dati al server tramite Axios
      axios
        .get('http://127.0.0.1:8000/api/search', {
          params: formData,
        })
        .then((response) => {
          // Gestisci la risposta dal server
          console.log('Risultati della ricerca:', response.data);
          // Puoi salvare i risultati in una proprietà data per visualizzarli
          // this.searchResults = response.data;
        })
        .catch((error) => {
          console.error('Errore durante la ricerca:', error);
        });
    },
    initMap() {
      const input = document.getElementById('autocomplete');
      const autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log("Nessun luogo trovato per l'input: '" + place.name + "'");
          return;
        }
        console.log('Luogo selezionato:', place);
        this.indirizzo = place.formatted_address;
      });
    },
  },
  mounted() {
    // Carica lo script di Google Maps con la callback per inizializzare la mappa
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap';
    script.async = true;
    window.initMap = this.initMap; // Associa la callback al metodo del componente
    document.head.appendChild(script);
  },
};
</script>
<!-- FINO A QUI -->

<!-- <template>
    <header class="container">

        <h2>Modulo di Ricerca</h2>
                <form  class="w-100">
                    <div class="form-row w-100">
                        <div class="form-group ">
                        <label for="letti">Letti</label>
                        <input type="number" class="form-control" id="letti" v-model="Letti" placeholder="Numero di letti">
                        </div>
                        <div class="form-group ">
                        <label for="stanze">Stanze</label>
                        <input type="number" class="form-control" id="stanze" v-model="Stanze" placeholder="Numero di stanze">
                        </div>
                        <div class="form-group ">
                        <label for="bagni">Bagni</label>
                        <input type="number" class="form-control" id="bagni" v-model="Bagni" placeholder="Numero di bagni">
                        </div>
                    </div>

                    <div class="form-row w-100">
                        <div class="form-group ">
                        <label for="metri_quadrati">Metri Quadrati</label>
                        <input type="number" class="form-control" id="metri_quadrati" v-model="Metri_quadrati" placeholder="Metri quadrati">
                        </div>
                        <div class="form-group ">
                        <label for="prezzo">Prezzo (€)</label>
                        <input type="number" class="form-control" id="prezzo" v-model="Prezzo" placeholder="Prezzo massimo">
                        </div>
                        <div class="form-group ">
                        <label for="indirizzo">Indirizzo</label>
                        <input type="text" class="form-control" id="indirizzo" v-model="Indirizzo" placeholder="Inserisci indirizzo">
                        </div>
                    </div>

                    <div class="dropdown my-2">
                        <button class="btn btn-secondary dropdown-toggle w-100 bg-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Seleziona Servizi
                        </button>
                        <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]"  value="1"> WiFi gratuito</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="2"> Colazione inclusa</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="3"> Aria condizionata</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="4"> Parcheggio gratuito</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="5"> Servizio in camera</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="6"> Animali ammessi</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="7"> Piscina</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="8"> Palestra</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="9"> Spa e centro benessere</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="10"> TV satellitare</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="11"> Minibar</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="12"> Cassaforte in camera</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="13"> Accesso per disabili</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="14"> Deposito bagagli</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="15"> Servizio navetta</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="16"> Noleggio biciclette</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="17"> Area giochi per bambini</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="18"> Sala conferenze</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="19"> Bar</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="20"> Ristorante</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="21"> Servizio lavanderia</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="22"> Asciugacapelli</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="23"> Ferro da stiro</label></li>
                            <li><label class="dropdown-item"><input type="checkbox" v-model="services" name="services[]" value="24"> Reception 24 ore su 24</label></li>
                        </ul>
                    </div>


                    <button @click.prevent=" apartmentSearch" class="btn btn-primary">Cerca</button>
                </form>

        </header>

</template> -->

<!-- DA PROGETTO LARAVEL -->
<template>
    <main>
      <div class="container home-background">
        <div class="opaco"></div>
      </div>
  
      <!-- Form di ricerca -->
      <form @submit.prevent="submitForm">
        <div class="container-search">
          <div class="container-searchsection">
            <!-- Barra di ricerca -->
            <nav class="navbar navbar-custom bg-body-tertiary bg-primary border-radius" data-bs-theme="dark">
              <div class="container-fluid">
                <div class="d-flex w-100">
                  <input
                    class="form-control me-2 searchbar border-radius"
                    id="autocomplete"
                    v-model="indirizzo"
                    type="search"
                    placeholder="Inserisci un indirizzo"
                    aria-label="Search"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
  
        <!-- Sezione Filtri sotto la barra di ricerca -->
        <div class="container mt-3">
          <!-- Dropdown Menu per i servizi -->
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle w-100 bg-dark"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seleziona Servizi
            </button>
            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
              <!-- Opzioni dei servizi -->
              <li v-for="service in servicesList" :key="service.id">
                <label class="dropdown-item">
                  <input type="checkbox" v-model="selectedServices" :value="service.id" /> {{ service.name }}
                </label>
              </li>
            </ul>
          </div>
  
          <!-- Campi aggiuntivi per stanze, letti, prezzo e numero di persone -->
          <div class="row mt-3 justify-content-center">
            <div class="col-md-2">
              <label for="Stanze" class="form-label">Numero di stanze</label>
              <input
                type="number"
                class="form-control"
                v-model.number="Stanze"
                id="Stanze"
                placeholder="Inserisci il numero di stanze"
              />
            </div>
            <div class="col-md-2">
              <label for="Letti" class="form-label">Numero di posti letto</label>
              <input
                type="number"
                class="form-control"
                v-model.number="Letti"
                id="Letti"
                placeholder="Inserisci il numero di letti"
              />
            </div>
            <div class="col-md-2">
              <label for="Bagni" class="form-label">Numero di bagni</label>
              <input
                type="number"
                class="form-control"
                v-model.number="Bagni"
                id="Bagni"
                placeholder="Inserisci il numero di bagni"
              />
            </div>
            <div class="col-md-2">
              <label for="Prezzo" class="form-label">Prezzo (max)</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  v-model.number="Prezzo"
                  id="Prezzo"
                  placeholder="Inserisci il prezzo"
                />
              </div>
            </div>
            <!-- Campo per il raggio di ricerca -->
            <div class="col-md-2">
              <label for="radius" class="form-label">Raggio di ricerca (km)</label>
              <input
                type="number"
                class="form-control"
                v-model.number="radius"
                id="radius"
                min="1"
                max="20"
                placeholder="20 km"
              />
              <small class="form-text text-muted">
                Il raggio di ricerca può essere modificato solo per ridurre il valore.
              </small>
            </div>
            <!-- Pulsante con icona SVG -->
            <button
              type="submit"
              class="btn btn-primary btn-custom d-flex align-items-center justify-content-center"
            >
              <!-- Icona SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.742a5.5 5.5 0 1 0-1.415 1.415l3.8 3.8a1 1 0 0 0 1.414-1.414l-3.8-3.8zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              Cerca
            </button>
          </div>
        </div>
      </form>
    </main>
</template>
<!-- FINO QUI -->

    <style lang="scss">

    </style>