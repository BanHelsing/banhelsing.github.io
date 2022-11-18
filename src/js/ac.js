function swap() {
    var i = document.getElementById("icono");
    if (i.classList.contains("bi-chevron-double-down")){
        i.classList.replace("bi-chevron-double-down","bi-chevron-double-up")
    }
    else
    i.classList.replace("bi-chevron-double-up","bi-chevron-double-down")
}

function expand() {
    var nav2 = document.getElementById("nav2");
    if (nav2.classList.contains("nav1-expanded")){
        nav2.classList.remove("nav1-expanded")
    }
    else
    nav2.classList.add("nav1-expanded")
}
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -100
}).setView([33,70],12);
var bounds = L.latLngBounds([33.48922752160882,70.61771361583807],[33.49213678092463,70.62073097300139]);
var image = L.imageOverlay("./src/img/gris1.png", bounds).addTo(map);
map.fitBounds(bounds);
L.geoJSON(data).addTo(map);