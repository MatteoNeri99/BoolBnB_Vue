<script >
import { ref } from 'vue'
import axios from 'axios';

export default  {
    

  data(){
        return{
          nome: '',
          cognome: '',
          data_di_nascita: '',
          email: '',
          password: '',
          responseMessage:'',

        }


      },
      methods: {
    async submitForm() {
      try {
        // Invia i dati del form come corpo della richiesta POST
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          nome: this.nome,
          cognome: this.cognome,
          data_di_nascita: this.data_di_nascita,
          email: this.email,
          password: this.password
        });

        // Gestisci la risposta del server
        this.responseMessage = 'Registrazione avvenuta con successo!';
        console.log(response.data);
      } catch (error) {
        // // Gestisci gli errori
        console.error(error);
        this.responseMessage = 'Errore durante la registrazione.';
      }
    }
},
created() {
    
}

}

const count = ref(0)
</script>

<template>
  <h1 class="text-center my-5">Registrazione</h1>

  <div class="container">
    <form @submit.prevent="submitForm">

      <div class="mb-3">
        <label for="Nome" class="form-label">Nome</label>
        <input type="text" class="form-control" id="Nome" v-model="nome">
      </div>

      <div class="mb-3">
        <label for="Cognome" class="form-label">Cognome</label>
        <input type="text" class="form-control" id="Cognome" v-model="cognome">
      </div>

      <div class="mb-3">
        <label for="data_di_nascita" class="form-label">Data di nascita</label>
        <input type="date" class="form-control" id="data_di_nascita" v-model="data_di_nascita">
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>

      <div class="mb-3">
        <label for="Password" class="form-label">Password</label>
        <input type="password" class="form-control" id="Password" v-model="password">
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
