
let mapStyles;
let mapStyleLight1 = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9c9c9c"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7b7b7b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c8d7d4"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#070707"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  }
];

let mapStyleDark1Cobalt = [
  {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
          {
              "invert_lightness": true
          },
          {
              "saturation": 10
          },
          {
              "lightness": 30
          },
          {
              "gamma": 0.5
          },
          {
              "hue": "#435158"
          }
      ]
  }
]

let mapStyleDark2 = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "lightness": "17"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff4700"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
          {
              "invert_lightness": true
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#3b3b3b"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ff4700"
          },
          {
              "lightness": "39"
          },
          {
              "gamma": "0.43"
          },
          {
              "saturation": "-47"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#555555"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  }
]

let mapStyleDark3Snazzy_Maps = [
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#333739"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -7
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -28
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "visibility": "on"
          },
          {
              "lightness": -15
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -18
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2ecc71"
          },
          {
              "lightness": -34
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#333739"
          },
          {
              "weight": 0.8
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "color": "#2ecc71"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#333739"
          },
          {
              "weight": 0.3
          },
          {
              "lightness": 10
          }
      ]
  }
]

let mapStyleDark4 = [
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "gamma": 0.01
          },
          {
              "lightness": 20
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "saturation": -31
          },
          {
              "lightness": -33
          },
          {
              "weight": 2
          },
          {
              "gamma": 0.8
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": "-100"
          },
          {
              "lightness": "30"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#5f5f5f"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "saturation": "20"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#50ff7a"
          },
          {
              "saturation": "-90"
          },
          {
              "lightness": "0"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 10
          },
          {
              "saturation": "-100"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#50ff7a"
          },
          {
              "lightness": "45"
          },
          {
              "saturation": "-30"
          },
          {
              "gamma": "1"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": "-100"
          },
          {
              "lightness": 25
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "lightness": -20
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#50ff7a"
          },
          {
              "saturation": "-80"
          },
          {
              "lightness": "10"
          }
      ]
  }
]

let mapStyleLight2 = [
  {
      "featureType": "landscape",
      "stylers": [
          {
              "hue": "#FFBB00"
          },
          {
              "saturation": 43.400000000000006
          },
          {
              "lightness": 37.599999999999994
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "road.highway",
      "stylers": [
          {
              "hue": "#FFC200"
          },
          {
              "saturation": -61.8
          },
          {
              "lightness": 45.599999999999994
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "stylers": [
          {
              "hue": "#FF0300"
          },
          {
              "saturation": -100
          },
          {
              "lightness": 51.19999999999999
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "road.local",
      "stylers": [
          {
              "hue": "#FF0300"
          },
          {
              "saturation": -100
          },
          {
              "lightness": 52
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "hue": "#0078FF"
          },
          {
              "saturation": -13.200000000000003
          },
          {
              "lightness": 2.4000000000000057
          },
          {
              "gamma": 1
          }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
          {
              "hue": "#00FF6A"
          },
          {
              "saturation": -1.0989010989011234
          },
          {
              "lightness": 11.200000000000017
          },
          {
              "gamma": 1
          }
      ]
  }
]

let mapStyleDark5 = [
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#e5c163"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#c4c4c4"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#e5c163"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 21
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#e5c163"
          },
          {
              "lightness": "0"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#e5c163"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#575757"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#2c2c2c"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#999999"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  }
]

let mapStyleDark7path2 = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#3e606f"
          },
          {
              "weight": 2
          },
          {
              "gamma": 0.84
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "weight": 0.6
          },
          {
              "color": "#3e8584"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2f9591"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#137474"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#226866"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#0d827f"
          },
          {
              "lightness": -37
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#26716b"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#7eb8b3"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  }
]

let mapStyleDark8Purple = [
  {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "hue": "#bc00ff"
          },
          {
              "saturation": "0"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#e8b8f9"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "labels",
      "stylers": [
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#3e114e"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#a02aca"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#2e093b"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "labels.text",
      "stylers": [
          {
              "color": "#9e1010"
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#58176e"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.business",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#a02aca"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#d180ee"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#a02aca"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
          {
              "color": "#a02aca"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#cc81e7"
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "hue": "#bc00ff"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#6d2388"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#c46ce3"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#b7918f"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#280b33"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#a02aca"
          }
      ]
  }
]

let mapStyleMediumShadowAgent = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "landscape.natural",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": "-23"
          },
          {
              "lightness": "27"
          },
          {
              "visibility": "on"
          },
          {
              "gamma": "1"
          },
          {
              "hue": "#ff1800"
          },
          {
              "weight": "0.75"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#e74c3c"
          },
          {
              "saturation": "-59"
          },
          {
              "lightness": "30"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#ff1800"
          },
          {
              "saturation": "2"
          },
          {
              "lightness": "2"
          },
          {
              "weight": "0.75"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "-51"
          },
          {
              "color": "#cbcbcb"
          }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#2c3e50"
          },
          {
              "visibility": "on"
          }
      ]
  }
]

let mapStyleDark9266PRO = [
  {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#adadad"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "all",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "all",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "all",
      "stylers": [
          {
              "color": "#888888"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#10c2d3"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "all",
      "stylers": [
          {
              "color": "#00a8b8"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "landscape.natural.terrain",
      "elementType": "all",
      "stylers": [
          {
              "color": "#007984"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "color": "#027781"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#006977"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "color": "#ababab"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  }
]



mapStyles = mapStyleDark1Cobalt;

export default mapStyles;
