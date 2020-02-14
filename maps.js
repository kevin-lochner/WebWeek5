let metroAreaCenterCoordinates = [44.96, -93.2] // Array of latitude and longitude
let zoomLevel = 9 // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2xvY2huZXIiLCJhIjoiY2s2bGd6dzdwMGYwZTNkdTlmcXVqZnp1aCJ9.LMsObgXWY4-37POUFY9Vdg'
}).addTo(map)

// Add markers

let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker