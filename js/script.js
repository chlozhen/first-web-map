mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb3poZW4iLCJhIjoiY2xnNXFlMGkxMDF0YzNobjBzeDZ3dTRodyJ9.aEmIpsNVZeh27U2L1z7j_A"

const NYC_COORDS = [-74.00214, 40.71882]

const map = new mapboxgl.Map({
  container: 'map',                         // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/light-v11', // style URL
  center: NYC_COORDS,                       // starting position [lng, lat]
  zoom: 10                                  // starting zoom
});


// hotspot markers
wifihotspot_data.forEach(function (hotspot_record) {
  const hotspot_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    `${hotspot_record.Type} Wifi!!
      Provider: ${hotspot_record.Provider}
      Location name: ${hotspot_record.Name}
      Location address: ${hotspot_record.Location}, ${hotspot_record.Location_T}
      Borough: ${hotspot_record["Borough Name"]}
      SSID: ${hotspot_record.SSID}
      Notes: ${hotspot_record.Remarks}`
  );

  var hotspot_color = "#62237d"                           // Outdoor locations
  if (hotspot_record.Location_T.includes("Indoor")) {      // Indoor locations
    hotspot_color = "#14B35B"
  }
  if (hotspot_record.Location_T == "Subway Station") {     // Subway locations
    hotspot_color = "#D649B3"
  }
  if (hotspot_record.Location_T == "Library") {            // Library locations
    hotspot_color = "#E6DF27"
  }

  new mapboxgl.Marker({
    color: hotspot_color,
    scale: 0.75
  })
    .setLngLat([hotspot_record.Longitude, hotspot_record.Latitude])
    .setPopup(hotspot_popup)
    .addTo(map)
})

// event listeners
$('#zoom-to-manh').on('click', function () {
  map.flyTo({
    center: [-73.97644389577336,40.769693554938236],
    zoom: 11
  })
})

$('#zoom-to-broo').on('click', function () {
  map.flyTo({
    center: [-73.94557501182818, 40.65851346275907],
    zoom: 11
  })
})

$('#zoom-to-quee').on('click', function () {
  map.flyTo({
    center: [-73.82679395703842, 40.717664079666214],
    zoom: 11
  })
})

$('#zoom-to-bron').on('click', function () {
  map.flyTo({
    center: [-73.86576445927567, 40.85561988236331],
    zoom: 11
  })
})

$('#zoom-to-stat').on('click', function () {
  map.flyTo({
    center: [-74.15062351092497, 40.58676621836946],
    zoom: 11
  })
})