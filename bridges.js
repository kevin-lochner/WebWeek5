let centerCoordinates = [43, -98]  // Array of latitude and longitude roughly in the middle of the bridges
let zoomLevel = 4  // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map
let map = L.map('bridge-map').setView(centerCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)


// array full of bridge data

bridges = [
    {'name': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span' : '1298.4',
        'coordinates': [40.6066, -74.0447] },
    {'name': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span' : '1280.2',
        'coordinates': [37.8199, -122.4783] },
    {'name': 'Mackinac Bridge', 'cityState': 'Mackinac and St Ignace, MI', 'span' : '1158.0',
        'coordinates': [45.8174, -84.7278] },
    {'name': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span' : '1067.0',
        'coordinates': [40.8517, -73.9527] },
    {'name': 'Tacoma Narrows Bridge', 'cityState': 'Tacoma and Kitsap, WA', 'span' : '853.44',
        'coordinates': [47.2690, -122.5517] },
]


// loop each bridge in the array, create popup string with relevant data, set marker, add to map

bridges.forEach(function (bridge) {
    let popup = `${bridge.name}<br>${bridge.cityState}<br>Span: ${bridge.span} meters`
    let bridgeMarker = L.marker(bridge.coordinates)
        .bindPopup(popup)
        .addTo(map)
})


