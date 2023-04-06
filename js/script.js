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
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 10 // starting zoom

});


// map center
const center_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Welcome to New York!'
);
new mapboxgl.Marker()
    .setLngLat(NYC_COORDS)
    .setPopup(center_popup)
    .addTo(map)

// bronx zoo
const brx_zoo_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'This is the Bronx Zoo.'
);
new mapboxgl.Marker()
    .setLngLat(BRX_ZOO_COORDS)
    .setPopup(brx_zoo_popup)
    .addTo(map)
