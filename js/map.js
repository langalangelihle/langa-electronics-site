// map.js - interactive Leaflet map with two locations

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map");

  // OpenStreetMap tiles (attribution is required)
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Approximate coordinates - adjust to your exact spots
  const locations = [
    { name: "Main Branch - Scottburgh", coords: [-30.2869, 30.7536] },
    { name: "Drop-Off Point - Park Rynie", coords: [-30.3297, 30.7214] }
  ];

  const points = [];
  locations.forEach(function (loc) {
    L.marker(loc.coords).addTo(map).bindPopup("<strong>" + loc.name + "</strong>");
    points.push(loc.coords);
  });

  // Zoom so both markers are visible
  map.fitBounds(points, { padding: [40, 40] });
});
