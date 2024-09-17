<script >
import axios from 'axios';
import { loadGoogleMapsScript, initializeAutocomplete } from '../googleApi';

    export default  {

        data(){
                return{
                    Letti:'',
                    Stanze:'',
                    Bagni:'',
                    Metri_quadrati:'',
                    Prezzo:'',
                    indirizzo:'',
                    radius:'',
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
                    indirizzo: this.indirizzo,
                    radius:this.radius,
                
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
        },
        mounted() {
        // Carica lo script di Google Maps e inizializza l'autocompletamento
        loadGoogleMapsScript(initializeAutocomplete);
      },

        }

</script >


<template>
    <header class="container">

        <h2>Modulo di Ricerca</h2>
                <form  class="w-100">
                    <div class="form-row w-100">

                        <nav class="navbar navbar-custom bg-body-tertiary bg-primary border-radius" data-bs-theme="dark">
                            <div class="container-fluid">
                                <div class="d-flex w-100">
                                    <input v-model="indirizzo" class="form-control me-2 searchbar border-radius" id="autocomplete" name="indirizzo" type="search" placeholder="Inserisci un indirizzo" aria-label="Search">
                                </div>
                            </div>
                        </nav>

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
                        <!-- Campo per il raggio di ricerca
                        <div class="col-md-2">
                            <label for="radius" class="form-label">Raggio di ricerca (km)</label>
                            <input type="number" class="form-control" name="radius" id="radius" min="1" max="20" value="20" placeholder="20 km" v-model="radius">
                            <small class="form-text text-muted">Il raggio di ricerca può essere modificato solo per ridurre il valore.</small>
                        </div> -->
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class=" col-md-2 d-flex flex-column ">
                                <ul class="list-unstyled d-flex align-items-center  m-3" >
                                    <li    class="p-3"><label><input type="checkbox" v-model="services" name="services[]"  value="1"> WiFi gratuito</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="2"> Colazione inclusa</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="3"> Aria condizionata</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="4"> Parcheggio gratuito</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="5"> Servizio in camera</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="6"> Animali ammessi</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="7"> Piscina</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="8"> Palestra</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="9"> Spa e centro benessere</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="10"> TV satellitare</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="11"> Minibar</label></li>
                                    <li    class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="12"> Cassaforte in camera</label></li>
                                </ul>
                                <ul class="list-unstyled d-flex align-items-center  m-3" >
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="13"> Accesso per disabili</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="14"> Deposito bagagli</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="15"> Servizio navetta</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="16"> Noleggio biciclette</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="17"> Area giochi per bambini</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="18"> Sala conferenze</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="19"> Bar</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="20"> Ristorante</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="21"> Servizio lavanderia</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="22"> Asciugacapelli</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="23"> Ferro da stiro</label></li>
                                    <li class="p-3"><label ><input type="checkbox" v-model="services" name="services[]" value="24"> Reception 24 ore su 24</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                   
                                
                           
                    <button @click.prevent=" apartmentSearch" class="btn btn-primary">Cerca</button>
                </form>

        </header>
    
</template>



<style lang="scss">
</style>


