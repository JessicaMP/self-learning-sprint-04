//Basic
//Practice Laboratoria
var map;
//Inicializar el mapa
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 59.325, lng: 18.070}
  });

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Corner_squad</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Hola</b>, aprendiendo a agregar descripción</b>, mejoraremos ' +
  'hoy es un gran día '+
  '.</p>'+
  '<p>Attribution: Corner_squad, <a href="https://claseslaboratoria.slack.com/messages/C8XPVBD6X/">'+
  'https://claseslaboratoria.slack.com/messages/C8XPVBD6X/</a> '+
  '(last visited February 05, 2018).</p>'+
  '</div>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  //Marcador de bandera
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: 'Hello World!',
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.327, lng: 18.067}
  });
  marker.addListener('click', toggleBounce);
  marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
};
var options = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximunAge: 0
};

navigator.geolocation.getCurrentPosition( success, error, options );

function success(position) {
  var coordenadas = position.coords;

  console.log('Tu posición actual es:');
  console.log('Latitud: ' + coordenadas.latitude);
  console.log('Longitud:' + coordenadas.longitude);
  console.log('Mas o menos ' + coordenadas.accuracy + ' metros.');
};

function error(error) {
  console.warn('ERROR(' + error.code + '):' + error.message);
};
//Muestra de estos datos en console
