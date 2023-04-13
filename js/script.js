mapboxgl.accessToken = "pk.eyJ1IjoiY2hsb3poZW4iLCJhIjoiY2xnNXFlMGkxMDF0YzNobjBzeDZ3dTRodyJ9.aEmIpsNVZeh27U2L1z7j_A"

const NYC_COORDS = [-74.00214, 40.71882]

const map = new mapboxgl.Map({
  container: 'map',                         // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/light-v11', // style URL
  center: NYC_COORDS,                       // starting position [lng, lat]
  zoom: 10                                  // starting zoom
});



// set all hotspot markers
var outdoor_markers = []
var indoor_markers = []
var subway_markers = []
var library_markers = []

wifihotspot_data.forEach(function (hotspot_record) {
  const hotspot_popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "<html>" + hotspot_record.Type + ' Wifi!!'
    + ' Provider: ' + hotspot_record.Provider
    + ' SSID: ' + hotspot_record.SSID
    + ' Location Type: ' + hotspot_record.Location_T
    + ' Location Name: ' + hotspot_record.Name
    + ' Location Address: ' + hotspot_record.Location
    + ' Borough: ' + hotspot_record["Borough Name"]
    + ' Notes: ' + hotspot_record.Remarks
    + "</html>"
  );

  var hotspot_color = "#875AAF"                            // Outdoor locations
  if (hotspot_record.Location_T.includes("Indoor")) {      // Indoor locations
    hotspot_color = "#26C7BD"
  }
  if (hotspot_record.Location_T == "Subway Station") {     // Subway locations
    hotspot_color = "#586DD5"
  }
  if (hotspot_record.Location_T == "Library") {            // Library locations
    hotspot_color = "#D649B3"
  }

  hotspot_marker = new mapboxgl.Marker({
    color: hotspot_color,
    scale: 0.75
  })
    .setLngLat([hotspot_record.Longitude, hotspot_record.Latitude])
    .setPopup(hotspot_popup)
    .addTo(map)

  if (hotspot_record.Location_T.includes("Outdoor")) {      // Outdoor locations
    outdoor_markers.push(hotspot_marker)
  }
  if (hotspot_record.Location_T.includes("Indoor")) {      // Indoor locations
    indoor_markers.push(hotspot_marker)
  }
  if (hotspot_record.Location_T == "Subway Station") {     // Subway locations
    subway_markers.push(hotspot_marker)
  }
  if (hotspot_record.Location_T == "Library") {            // Library locations
    library_markers.push(hotspot_marker)
  }

})



// functions for filtering markers
function remove_marker(marker_list) {
  for (var i = 0; i < marker_list.length; i++) {
    marker_list[i].remove()
  }
}

function add_marker(marker_list) {
  for (var i = 0; i < marker_list.length; i++) {
    marker_list[i].addTo(map)
  }
}

function filter_markers(markerID, marker_list, buttonClass, activeClass) {
  $('#' + markerID).on('click', function () {
    var ele = document.getElementById(markerID)
    if (ele.className.includes(activeClass)) {
      ele.className = buttonClass
      add_marker(marker_list)
    }
    else {
      ele.className = buttonClass + " " + activeClass
      remove_marker(marker_list)
    }
  })
}

const markerIDs = ["outdoor", "indoor", "subway", "library"]
var marker_lists = [outdoor_markers, indoor_markers, subway_markers, library_markers]
var filterbtnClass = "filterbtn"
var filteractiveClass = "filter_active"
for (var i = 0; i < markerIDs.length; i++) {
  filter_markers(markerIDs[i], marker_lists[i], filterbtnClass, filteractiveClass)
}



// flying event listeners
$('#zoom-to-manh').on('click', function () {
  map.flyTo({
    center: [-73.97644389577336, 40.769693554938236],
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