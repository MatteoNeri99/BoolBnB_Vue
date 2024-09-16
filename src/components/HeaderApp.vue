<script >
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

</script >
<template>
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

</template>



    <style lang="scss">

    </style>