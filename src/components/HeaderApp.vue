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
          
        }


      },
      methods: {
        apartmentSearch (){axios.post('http://127.0.0.1:8000/api/apartments/search', {
        params: {
            
        
        }
        })
        .then((response)=> {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        })
        }
    
},
created() {

    this.getApartments();
    
}

}

</script >
<template>





 
</template>

<style lang="scss" scoped>
@use '../node_modules/bootstrap/scss/bootstrap.scss';




</style>
