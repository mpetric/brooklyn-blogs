var map = L.map('map', {zoomControl: false})
	.setView([40.652, -73.955], 12);

//add zoom control to bottom right of screen
map.addControl( L.control.zoom({position: 'bottomright'}) )

//set up basemap tiles from mapbox
L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', 
	{maxZoom: 15 }).addTo(map);


function popUp(feature, layer) {
    layer.bindPopup
    (
    	feature.properties.NTAName
    	+ "<br/> Blog: "
    	+ "<a href='"
    	+ feature.properties.url
    	+ "'>"
    	+ feature.properties.blog
    	+ "</a>"
    	);
}

//get external geoJSON file
var geojsonLayer = new L.GeoJSON.AJAX("./js/brooklyn_new.json", {onEachFeature: popUp});

geojsonLayer.addTo(map);