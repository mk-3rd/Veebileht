// position we will use later
var lat = 58.945660;
var lon = 23.537860;
// initialize map
map = L.map('mapDiv').setView([lat, lon], 16);
// set map tiles source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
// add marker to the map
marker = L.marker([lat, lon]).addTo(map);
// add popup to the marker
marker.bindPopup("<b>SILVESTRE OÜ</b><br />Karja 27<br />Haapsalu 90502").openPopup();