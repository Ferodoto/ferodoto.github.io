const x = document.getElementById("GPS");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success, error);
  } else { 
    x.innerHTML = "La geolocalización no es soportada por este navegador.";
  }
}
    
function success(position) {
    x.innerHTML="Latitud: " + position.coords.latitude + 
    "<br>Longitud: " + position.coords.longitude;
}

function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Rechazo el permiso para la geolocalización."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Localización no disponible."
      break;
    case error.TIMEOUT:
      x.innerHTML = "Tiempo de espera agotado."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Error desconocido."
      break;
  }
}