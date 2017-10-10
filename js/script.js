// var defaultLocations = [
//   {name: "Smithsonian National Air and Space Museum" , lat: 38.88816010000001, lng: -77.01986789999999 },
//   {name: "George Washington University", lat: 38.8997145, lng: 77.0485992 },
//   {name: "Dupont Circle" , lat: 38.9096936, lng: -77.043339 },
//   {name: "The White House" , lat: 38.8976763, lng: -77.0365298 },
//   {name: "The Pentagon" , lat: 38.8718568, lng: -77.0562669 }
// ];

// var defaultLocationsxx = [
//   {lat: 38.896945, lng: -77.0236171},
//   {lat: 38.9076089, lng: -77.07225849999999},
//   {lat: 38.8997145, lng: 77.0485992},
//   {lat: 38.9096936, lng: -77.043339},
//   {lat: 38.8976763, lng: -77.0365298},
//   {lat: 38.8718568, lng: -77.0562669}
// ];


var defaultLocations = [
  { name:"Washington National Cathedral",
    location: {lat: 38.9305946, lng: -77.0707807}
  },
  { name:"Georgetown University",
    location: {lat: 38.9076089, lng: -77.072258}
  },
  { name:"George Washington University",
    location: {lat: 38.8997145, lng: -77.0485992}
  },
  { name:"Dupont Circle",
    location: {lat: 38.9096936, lng: -77.043339}
  },
  { name:"The White House",
    location: {lat: 38.8976763, lng: -77.0365298}
  },
  { name:"The Pentagon",
    location: {lat: 38.8718568, lng: -77.0562669}
  },
]

function initMap(){
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 38.8896198, lng: -77.0229772},
    zoom: 13
  }); //-- end of map variable


  // mark defaultLocations on the map
  defaultLocations.forEach(function(site){
    var infoWindow = new google.maps.InfoWindow({
      content: site.name
    });//-- end of infoWindow
    var marker = makeMaker(site, map);
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    }
  );//-- end of addEventListener

  }); //-- end of defaultLocations.forEach

}; //-- end of initMap()


// create markers
function makeMaker(site, map){
  var marker = new google.maps.Marker({
    position: site.location,
    map: map,
    // title: site.name
  });
  return marker;
};//-- end of makeMaker
