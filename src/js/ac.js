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

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -50,
    maxZoom: 23,
    zoomSnap: 0.1,
    zoomDelta: 0.01,
    wheelPxPerZoomLevel: 200,
    wheelDebounceTime: 0
});
//var bounds = [[0,0], [1000,1110.2]]
var bounds = [[0,0], [4828,5360]]

// res = 5360 x 4828
var image = L.imageOverlay("./src/img/mapa.jpeg", bounds).addTo(map);
map.fitBounds(bounds);

var edA = L.polygon(
    [[[// Edificio A grande
        [2028,2909], // 1
        [2062,3056], // 2
        [1309,3224], // 3
        [1337,3351], // 4
        [2592,3068], // 5  ---
        [2663,3375], // 6
        [2763,3357], // 7
        [2787,3475], // 8
        [2073,3633], // 9
        [2077,3648], // 10 ---
        [1960,3673], // 11
        [1955,3660], // 12
        [1510,3756], // 13
        [1481,3641], // 14
        [1462,3647], // 15 ---
        [1455,3620], // 16
        [1401,3634], // 17
        [1400,3640], // 18
        [1374,3649], // 19
        [1378,3664], // 20 ---
        [1315,3678], // 21
        [1189,3095]  // 22
    ]],
    [[// Edificio A pequeño
        [2113,3046], // 1
        [2081,2896], // 2
        [2531,2798], // 3
        [2566,2945]  // 4
    ]]], {color: "#b00909"}).addTo(map);
edA.bindTooltip("Edificio A");
    
var edB = L.polygon([
    [3783,843],  // 1
    [4042,2070], // 2
    [3107,2266], // 3
    [2846,1042]  // 4
]).addTo(map);
edB.bindTooltip("Edificio B");

var edC = L.polygon([
    [2248,2498], // 1
    [2301,2740],// 2
    [1795,2852], // 3
    [1764,2723], // 4
    [1989,2672], // 5  ---
    [1979,2625], // 6
    [1856,2653], // 7
    [1847,2614], // 8
    [1970,2586], // 9
    [1966,2560] // 10 ---
], {color: "#b05c09"}).addTo(map);
edC.bindTooltip("Edificio C");

var edE = L.polygon([
    [3464,498],  // 1
    [3517,727],  // 2
    [2772,890],  // 3
    [2762,850],  // 4
    [2690,843],  // 5  ---
    [2711,621],  // 6
    [2845,635]   // 7
], {color: "#09b035"}).addTo(map);
edE.bindTooltip("Edificio E");

var edF = L.polygon(
[[[//Edificio Este
    [2984,2587], // 1
    [3082,3033], // 2
    [3167,3015], // 3
    [3246,3385], // 4
    [2930,3452], // 5  ---
    [2890,3273], // 6
    [2696,3314], // 7
    [2633,3014], // 8
    [2660,3008], // 9
    [2639,2904], // 10 ---
    [2610,2910], // 11
    [2560,2678]  // 12
],
[//Edificio Oeste
    [2816,1384], // 1
    [3025,2353], // 2
    [2705,2423], // 3
    [2686,2310], // 4
    [2575,2334], // 5 ---
    [2501,1990], // 6
    [2417,2005], // 7
    [2307,1493]  // 8
]
]], {color: "#5709b0"}).addTo(map);
edF.bindTooltip("Edificio F", {offset: [150, 30]});


// Array markers
var markers = []

// Plantilla Marker 
//var marker = L.marker(map.getCenter(), riseOnHover = true, interactive = true).addTo(map);

var salaE001 = L.marker([2869, 653], title = "Sala E001", riseOnHover = true, interactive = true).addTo(map);
markers.push(salaE001)

var salaE002 = L.marker([2998, 624], title = "Sala E002", riseOnHover = true, interactive = true).addTo(map);
markers.push(salaE002)

var salaE003 = L.marker([3123, 593], title = "Sala E003", riseOnHover = true, interactive = true).addTo(map);
markers.push(salaE003)

console.log(markers)

for (var i = 0; i < markers.length; i++) {
    var currentMarker = markers[i];
    currentMarker.bindPopup(this.title);
}
    
map.setView(map.getCenter(),-2.2)


//L.geoJSON(data).addTo(map);
var popup = L.popup();

function getlatlng(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

//map.on('click', getlatlng);
