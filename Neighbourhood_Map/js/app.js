// Make a data locations in Toronto Neighbourhood.
var locationList = [
  {
    name: 'Yorkdale Shopping Centre',
    location: {lat: 43.725422, lng: -79.452106},
    fsid: '4ad4c062f964a52002f820e3'
},
  {
    name: 'Casa Loma',
    location: {lat: 43.678066, lng: -79.409426},
    fsid: '4bef48fcc80dc9284ec827e3'
},
  {
    name: 'High Park',
    location: {lat:  43.646548, lng: -79.46369},
    fsid: '4ad4c05ef964a5209ff620e3'
},
  {
    name: 'Rooster Coffee House',
    location: {lat: 43.669105, lng: -79.352863},
    fsid: '4b4626fef964a5204a1826e3'
},
  {
    name: 'TIFF Bell Lightbox',
    location: {lat:  43.646622, lng: -79.390332},
    fsid: '4bcf714ab221c9b67f0ad2d0'
},
  {
    name: 'Toronto Islands',
    location: {lat:  43.628947, lng: -79.39442},
    fsid: '4ad4c05ef964a5209af620e3'
},
  {
    name: 'Pizzeria Libretto',
    location: {lat:  43.648945, lng: -79.42037},
    fsid: '4ada6d36f964a520802221e3'
},
  {
    name: 'Ontario Science Centre',
    location: {lat:  43.716407, lng: -79.339184},
    fsid: '4ad4c05ef964a520bcf620e3'
}
];

// Make location class and bindings with data.
var Location = function (item) {
  this.name = ko.observable(item.name);
  this.location = ko.observable(item.location);
  this.marker = ko.observable();
};

// Initialize a google map.
var map;

var initMap = function() {
  //Create a google map object.
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 43.684652, lng: -79.365374},
    zoom: 12,
    styles: styles,
    mapTypeControl: false
  });

  //Bind viewModel to knockout.
  ko.applyBindings(new viewModel());

};

// Google map error handling.
var googlemapError = function() {
  $('#map').append('<h3>SORRY. Could not Load. Refresh again, please.</h3>');
}

// ViewModel
var viewModel = function() {
  var self = this;

  // Put locations in observableArray.
  this.locations = ko.observableArray ();

  // ForEach loop for locationsList.
  locationList.forEach(function (item) {
    // Create a location object.
    var location = new Location (item);

    // Create a marker object.
    var marker = new google.maps.Marker({
      position: item.location,
      map: map,
      name: item.name
    });

    // Infowindow click event for marker.
    marker.addListener('click', function (){
      self.openInfoWindow(this);
    });

    // Create a marker property.
    location.marker = marker;

    // Push created location object into observableArray.
    self.locations.push(location);

  });

  // Create a infowindow object.
  var infoWindow = new google.maps.InfoWindow({});

  this.openInfoWindow = function (marker) {

    // Error handling for ajax request.
    var forsquareRequestTimeOut = setTimeout(function () {
      infoWindow.setContent("<h4>SORRY. Could not Load. Refresh again, please.</h4>");
      infoWindow.open(map, marker);
    },10000); // 10sec

    // Make ajax request to foursquare api endpoint.
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/explore/',
      type: 'GET',
      dataType: 'json',

      // Call foursquare api using my client_id and secret key.
      data: {
        client_id: '1IWMXUIXTP41LS222SE03WYUA5UV2J5UJ24JOYOYZWGIQRDQ',
        client_secret: 'O0YNHGTZBKPFJK3LLGCIQ3EEZ4LJRWPHUKMQCH4DGQLOXWFK',
        v: '20170801',

        limit: 1,
        ll: marker.position.lat() + ',' + marker.position.lng(),
        query: marker.name,
        async: true
      },

      success: function(results) {
        infoWindow.open(map, marker);
        // Make a content for infowindow from FourSquare
        infoWindow.setContent(
          '<div class="infowindow">' +
          '<h2><span>' + marker.name + '</span></h2>' +
          '<ul><li class="info-li">Rating: ' + results.response.groups[0].items[0].venue.rating + '</li>' +
          '<li class="info-li">Phone: ' + results.response.groups[0].items[0].venue.contact.formattedPhone + '</li>' +
          '<li class="info-li">Address: ' + results.response.groups[0].items[0].venue.location.address + '</li>' +
          '<li class="info-li">URL: <a class="info-a" href=' + results.response.groups[0].items[0].venue.url + '>' +
          results.response.groups[0].items[0].venue.url + '</a></ul></div>');
          clearTimeout(forsquareRequestTimeOut);
        },
      error: function () {
        infoWindow.setContent("<h4> SORRY. Could not Load. Refresh again, please.</h4>");
        infoWindow.open(map, marker);
      }
    });

    // When marker is clicked, it bounces for 1 second.
    marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
       marker.setAnimation(null);
      },1000);
  };

  this.places = ko.observableArray(self.locations());
  // Bind input search and observable.
  this.userInput = ko.observable('');

  // FilteredList for listview.
  this.filteredList = ko.computed (function () {
    return ko.utils.arrayFilter(self.places(), function(loc) {
      var filter = self.userInput().toLowerCase();

      if (loc.name().toLowerCase().indexOf(filter) >= 0) {
        loc.marker.setVisible(true);
        return true;
      } else {
        loc.marker.setVisible(false);
        return false;
      }
    });
  });

  // When location is clicked from listview, it shows marker in the map.
  this.locationClicked = function (loc) {
    self.openInfoWindow(loc.marker);
  };

};

// Using the google maps retro theme.
// https://mapstyle.withgoogle.com/
var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];
