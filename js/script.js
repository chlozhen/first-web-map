// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com


mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb3poZW4iLCJhIjoiY2xnNXFlMGkxMDF0YzNobjBzeDZ3dTRodyJ9.aEmIpsNVZeh27U2L1z7j_A"

const NYC_COORDS = [-74.00214, 40.71882]
const BRX_ZOO_COORDS = [-73.87708, 40.85999]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: NYC_COORDS, // starting position [lng, lat]
    zoom: 10 // starting zoom

});


// pizza markers
wifihotspot_data.forEach(function(hotspot_record){
    const hotspot_popup = new mapboxgl.Popup({ offset: 25 }).setText(
      `${hotspot_record.Type} Wifi!!
      Provider: ${hotspot_record.Provider}
      Name: ${hotspot_record.Name}
      Location: ${hotspot_record.Location}, ${hotspot_record.Location_T}
      Borough: ${hotspot_record["Borough Name"]}
      SSID: ${hotspot_record.SSID}
      Notes: ${hotspot_record.Remarks}`
    );
    
    var hotspot_color = "#62237d"                           // Outdoor locations
    if (hotspot_record.Location_T.includes("Indoor")){      // Indoor locations
      hotspot_color = "#14B35B"
    }
    if (hotspot_record.Location_T == "Subway Station"){     // Subway locations
      hotspot_color = "#D649B3"
    }
    if (hotspot_record.Location_T == "Library"){            // Library locations
      hotspot_color = "#E6DF27"
    }

    new mapboxgl.Marker({
        color: hotspot_color
    })
        .setLngLat([hotspot_record.Longitude, hotspot_record.Latitude])
        .setPopup(hotspot_popup)
        .addTo(map)
})