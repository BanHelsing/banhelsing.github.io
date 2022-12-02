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

var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
};

// constructor del mapa
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1.8,
    maxZoom: 23,
    zoomSnap: 0.1,
    zoomDelta: 0.01,
    wheelPxPerZoomLevel: 200,
    wheelDebounceTime: 0,
    zoomControl: false
});

//var bounds = [[0,0], [1000,1110.2]]
var bounds = [[0,0], [4828,5360]];

// res = 5360 x 4828
var image = L.imageOverlay("./src/img/mapa.jpeg", bounds).addTo(map);
map.fitBounds(bounds);

map.setView([2200, 2680],-1.8);
