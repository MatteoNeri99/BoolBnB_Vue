<script>
export default {
  props: {
    apartments: Array, // Riceve i dati degli appartamenti tramite props
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-4" v-for="apartment in apartments" :key="apartment.id">
        <div class="card p-3 w-100 styled-header" style="height:600px">
          <img :src="apartment.Img" class="card-img-top" alt="Apartment Image">
          <div class="card-body">
            <h5 class="card-title text-center pb-3">{{ apartment.Nome }}</h5>
            <ul class="list-unstyled">
              <li class="fw-bold pb-2"><i class="fa-solid fa-euro-sign"></i> Prezzo: <span class="fw-normal">&euro;{{ apartment.Prezzo }}</span></li>
              <!-- <li class="fw-bold pb-2"><i class="fa-solid fa-person-booth"></i> Stanze: <span class="fw-normal">{{ apartment.Stanze }}</span></li>
              <li class="fw-bold pb-2"><i class="fa-solid fa-bed"></i> Letti: <span class="fw-normal">{{ apartment.Letti }}</span></li>
              <li class="fw-bold pb-2"><i class="fa-solid fa-toilet"></i> Bagni: <span class="fw-normal">{{ apartment.Bagni }}</span></li>
              <li class="fw-bold pb-2"><i class="fa-solid fa-ruler"></i> Metri quadrati: <span class="fw-normal">{{ apartment.Metri_quadrati }} m<sup>2</sup></span></li> -->
              <li class="fw-bold pb-2"><i class="fa-solid fa-location-dot"></i> Indirizzo: <span class="fw-normal">{{ apartment.Indirizzo }}</span></li>
              <!-- <li class="fw-bold pb-2"><i class="fa-solid fa-location-dot"></i> Servizi: <span class="fw-normal" v-for="(service, index) in apartment.services">{{ service.Nome }}<span v-if="index < apartment.services.length - 1">, </span></span></li> -->
            </ul>
        </div>
        <div class="card-footer">
          <router-link :to="{ name: 'apartment-details', params: { id: apartment.id } }" class="btn btn-danger btn-submit">
            Mostra dettagli
          </router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style lang="scss" scoped>
  @use '../node_modules/bootstrap/scss/bootstrap.scss';

  .container{
    margin: 0;
    padding: 0;
  }
  .title{
  text-align: center;
  padding-top: 1rem;
  color: #9c191b;
}

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

.card-footer{
  display: flex;
  justify-content: center;
}
  </style>