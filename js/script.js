// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

const pizzaData = [
    {
      "first-name": "Chris",
      "pizza-shop-name": "Ben's Pizza",
      "place": "the Village",
      "longitude": -74.000288,
      "latitude": 40.730412,
      "program": "MUP"
    },
    {
      "first-name": "Max",
      "pizza-shop-name": "Lou Malnati's Pizzeria",
      "place": "Chicago",
      "longitude": -87.63368899,
      "latitude": 41.89067478,
      "program": "MSDS"
    },
    {
      "first-name": "Christina",
      "pizza-shop-name": "Pie-Eyed Pizzeria",
      "place": "Chicago",
      "longitude": -87.65571,
      "latitude": 41.89619,
      "program": "MUP"
    },
    {
      "first-name": "Nate",
      "pizza-shop-name": "Pizza Suprema",
      "place": "Midtown",
      "longitude": -73.995163,
      "latitude": 40.75063,
      "program": "MSPP"
    },
    {
      "first-name": "Patrick",
      "pizza-shop-name": "Patsy's",
      "place": "East Harlem",
      "longitude": -73.93486712,
      "latitude": 40.797137,
      "program": "MUP"
    },
    {
      "first-name": "Evan",
      "pizza-shop-name": "Rosa's",
      "place": "Ridgewood",
      "longitude": -73.900092,
      "latitude": 40.712197,
      "program": "MUP"
    },
    {
      "first-name": "Aisha",
      "pizza-shop-name": "Christian's Pizza",
      "place": "Charlottesville",
      "longitude": -78.48223019,
      "latitude": 38.0310708,
      "program": "MUP"
    },
    {
      "first-name": "Luke",
      "pizza-shop-name": "Pica's ",
      "place": "Philadelphia",
      "longitude": -75.27540655,
      "latitude": 39.96583696,
      "program": "MUP"
    },
    {
      "first-name": "Ritwick",
      "pizza-shop-name": "Percy's",
      "place": "Greenwich Village",
      "longitude": -74.00138792,
      "latitude": 40.72933278,
      "program": "MUP"
    },
    {
      "first-name": "Whitney",
      "pizza-shop-name": "Piz-zetta ",
      "place": "Downtown Brooklyn",
      "longitude": -73.9907819,
      "latitude": 40.69243875,
      "program": "EMPA"
    },
    {
      "first-name": "Becky",
      "pizza-shop-name": "Prince Street Pizza",
      "place": "SOHO",
      "longitude": -73.99454946,
      "latitude": 40.72388084,
      "program": "ITP"
    },
    {
      "first-name": "Yu Ze",
      "pizza-shop-name": "Mama's TOO!",
      "place": "Upper West Side",
      "longitude": -73.96760083,
      "latitude": 40.80101105,
      "program": "CUSP"
    },
    {
      "first-name": "Anna",
      "pizza-shop-name": "John's of Bleecker ",
      "place": "Greenwich Village ",
      "longitude": -74.00337035,
      "latitude": 40.73170071,
      "program": "CUSP"
    },
    {
      "first-name": "Camille ",
      "pizza-shop-name": "John's of Bleecker ",
      "place": "Greenwich Village ",
      "longitude": -74.00337035,
      "latitude": 40.73170071,
      "program": "MUP"
    },
    {
      "first-name": "Bria",
      "pizza-shop-name": "San Matteo",
      "place": "Upper East Side",
      "longitude": -73.95487,
      "latitude": 40.77398,
      "program": "MPA"
    },
    {
      "first-name": "Chloe",
      "pizza-shop-name": "Village Square Pizza",
      "place": "East Village",
      "longitude": -73.98279206,
      "latitude": 40.72768156,
      "program": "MSDS"
    },
    {
      "first-name": "Karen",
      "pizza-shop-name": "Annie's Italian restaurant",
      "place": "Beijing",
      "longitude": 116.43731,
      "latitude": 39.91891,
      "program": "MUP"
    }
   ]

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


// pizza markers
pizzaData.forEach(function(pizzaRecord){
    const pizza_popup = new mapboxgl.Popup({ offset: 25 }).setText(
        pizzaRecord["pizza-shop-name"] + "located in" + pizzaRecord.place
    );
    new mapboxgl.Marker()
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(pizza_popup)
        .addTo(map)
})