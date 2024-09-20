
  <script>
  import axios from 'axios';

  export default{
    data(){
          return{
              apartments:[],
            
          }


        },
        methods: {
          getApartments (){axios.get('http://127.0.0.1:8000/api/apartments', {
          params: {
          
          }
          })
          .then((response) => {
              console.log(response.data);
              this.apartments = response.data.results;
          })
          .catch(function (error) {
              console.log(error);
          })
        },
        
        
    },
    created(){
        this.getApartments();

      } 
  }
  </script>


  <template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4 w-100" v-for="apartment in apartments" :key="apartment.id">
          <article class="col-12 p-3 text-center">  
            <div class="card p-3 w-100 styled-header">
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
              </div>
              <div class="card-footer">
                <router-link :to="{ name: 'apartment-details', params: { id: apartment.id } }" class="btn btn-danger submit-btn">
                  Mostra dettagli
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>


  <style lang="scss" scoped>
  .card-img-top {
  height: 300px;
  object-fit: cover;
}

.styled-header {
  padding: 30px;
  background-color: #d9c8c8;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
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