// Funzione per caricare Google Maps API
function loadGoogleMapsScript(callback) {
    // Verifica se lo script è già stato caricato
    if (window.google && window.google.maps) {
      callback();
    } else {
      // Crea e carica lo script di Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDltqF-8vne8sd6KUee2_G8eWD24UIBYWI&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
  
      // Definisci la funzione di callback globale
      window.initMap = callback;
    }
  }
  
  // Funzione per inizializzare l'autocompletamento
  function initializeAutocomplete() {
    const input = document.getElementById('autocomplete');
    if (!input) {
      console.warn('Input element not found for autocomplete.');
      return;
    }
  
    const autocomplete = new google.maps.places.Autocomplete(input);
  
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("Nessun luogo trovato per l'input: '" + place.name + "'");
        return;
      }
      console.log('Luogo selezionato:', place);
    });
  }
  
  // Esportare la funzione per essere utilizzata nei componenti Vue
  export { loadGoogleMapsScript, initializeAutocomplete };
  