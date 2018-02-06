function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.86, lng: 151.209},
    zoom: 13, //Nota el mapa cambia de acuerdo al zoom desde el 56 el mas general y 15 el mas especifico
    mapTypeControl: false
  });

  // Add controls to the map, allowing users to hide/show features.
  var styleControl = document.getElementById('style-selector-control');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // Apply new JSON when the user chooses to hide/show features.
  document.getElementById('hide-poi').addEventListener('click', function() {
    map.setOptions({styles: styles['hide']});
  });
  document.getElementById('show-poi').addEventListener('click', function() {
    map.setOptions({styles: styles['default']});
  });


  var infoWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  };

  var styles = {
    default: null,
    hide: [
      {
        featureType: 'poi.business',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      }
    ]
  };
