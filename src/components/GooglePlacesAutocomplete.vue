<template>
    <div>
      <!-- Input per la ricerca -->
      <input
        id="autocomplete"
        type="text"
        class="form-control"
        placeholder="Inserisci un indirizzo"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'GooglePlacesAutocomplete',
    mounted() {
      this.loadGoogleMapsScript();
    },
    methods: {
      loadGoogleMapsScript() {
        // Verifica se lo script è già stato caricato
        if (window.google && window.google.maps) {
          this.initializeAutocomplete();
        } else {
          // Crea e carica lo script di Google Maps API
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDltqF-8vne8sd6KUee2_G8eWD24UIBYWI&libraries=places&callback=initMap`;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
  
          // Definisci la funzione di callback globale
          window.initMap = this.initializeAutocomplete;
        }
      },
      initializeAutocomplete() {
        const input = document.getElementById('autocomplete');
        const autocomplete = new google.maps.places.Autocomplete(input);
  
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) {
            console.log("Nessun luogo trovato per l'input: '" + place.name + "'");
            return;
          }
          console.log('Luogo selezionato:', place);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Aggiungi qui il tuo CSS se necessario */
  </style>
  