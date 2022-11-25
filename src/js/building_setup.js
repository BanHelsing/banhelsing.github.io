//Aqui se crean los edificios con poligonos del leaflet
//estoy viendo si se puede hacer con un svg pero eso depende del que
//este haciendo el fondo (en parte)

//Polygons
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
        [1510,3760], // 13
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
    
var edB = L.polygon([
    [3783,843],  // 1
    [4042,2070], // 2
    [3107,2266], // 3
    [2846,1042]  // 4
]).addTo(map);

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

var edE = L.polygon([
    [3464,498],  // 1
    [3517,727],  // 2
    [2772,890],  // 3
    [2762,850],  // 4
    [2690,843],  // 5  ---
    [2711,621],  // 6
    [2845,635]   // 7
], {color: "#09b035"}).addTo(map);

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

//Definicaion de los pasilos del edificio A piso 1
var pathAP1S1 = L.polyline([[1402,3633],[1352,3348]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var pathAP1S1_1 = L.polyline([[1444,3549],[1410,3337]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var pathAP1S1_2 = L.polyline([[1956,3659],[1930,3510]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var pathAP1S1_3 = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //Corredor al lado de dfis
//Division por salas PRIMERA MITAD
var pathAP1S1_3Salas1 = L.polyline([[1567,3742],[1541,3601]],{color:"black"}).addTo(map); //ASEM
var pathAP1S1_3Salas2 = L.polyline([[1630,3731],[1606,3587]],{color:"black"}).addTo(map); //DIRECCION AMBIENTAL
var pathAP1S1_3Salas3 = L.polyline([[1683,3716],[1652,3576]],{color:"black"}).addTo(map); //A-025
var pathAP1S1_3Salas4 = L.polyline([[1807,3691],[1785,3542]],{color:"black"}).addTo(map); //A-026
var pathAP1S1_3Salas5 = L.polyline([[1750,3704],[1730,3557]],{color:"black"}).addTo(map); //A-027
var pathAP1S1_3Salas6 = L.polyline([[1864,3675],[1850,3527]],{color:"black"}).addTo(map); //A-028
var pathAP1S1_3Salas7 = L.polyline([[1916,3668],[1894,3517]],{color:"black"}).addTo(map); //130-B
//Division por salas SEGUNDA MITAD
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //A-012
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //A-013
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //A-014
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //A-015
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //ADMINISTRATIVOS
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); // DGIIP/UCP
var pathAP1S1_3Salas = L.polyline([[2072,3633],[2048,3483]],{color:"black"}).addTo(map); //PACE
//SAlas A Interiores
var sepAP1S2 = L.polyline([[1627,3156],[1598,3003]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var sepAP1S3 = L.polyline([[1310,3224],[1282,3074]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var sepAP1S4 = L.polyline([[1615,3085],[1967,3008]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var sepAP1S5 = L.polyline([[1953,2921],[1980,3082]],{color:"black"}).addTo(map); //Corredor al lado de dfis
var sepAP1S6 = L.polyline([[2655,3342],[1460,3619]],{color:"black"}).addTo(map);
var sepAp1S7 = L.polyline([[2636,3275],[1441,3549]],{color:"black"}).addTo(map);
var divSalaA16_1 = L.polyline([[1449,3322],[1490,3537]],{color:"black"}).addTo(map);
var sepAP1S8 = L.polyline([[2705,3368],[2731,3487]],{color:"black"}).addTo(map);
var sepAP1S9 = L.polyline([[2561,3366],[2580,3521]],{color:"black"}).addTo(map);
var sepAP1S10 = L.polyline([[2663,3375],[2688,3496]],{color:"black"}).addTo(map);
var sepAP1S11 = L.polyline([[2673,3435],[2574,3457]],{color:"black"}).addTo(map);
var sepAP1S12 = L.polyline([[2625,3445],[2640,3507]],{color:"black"}).addTo(map);
var sepAP1S13 = L.polyline([[2524,3375],[2544,3530]],{color:"black"}).addTo(map);
var sepAP1S14 = L.polyline([[2346,3573],[2312,3420]],{color:"black"}).addTo(map);
var sepAP1S15 = L.polyline([[2463,3548],[2433,3393]],{color:"black"}).addTo(map);
var sepAP1S16 = L.polyline([[2219,3602],[2191,3450]],{color:"black"}).addTo(map);
var sepAP1S17 = L.polyline([[2450,3282],[2629,3240]],{color:"black"}).addTo(map);
//Separacion de baños parte exterior salas A
var pathBanoI = L.polyline([[1864,3232],[1896,3223]],{color:"black"}).addTo(map);
var pathBanoD = L.polyline([[1977,3203],[2018,3414]],{color:"black"}).addTo(map);

//salas A exteriores
var sepAN1 = L.polyline([[1716,3483],[1679,3267]],{color:"black"}).addTo(map);
var sepAN2 = L.polyline([[1534,3306],[1568,3522]],{color:"black"}).addTo(map);
var sepAN3 = L.polyline([[1864,3230],[1904,3442]],{color:"black"}).addTo(map);
var sepAN4 = L.polyline([[1756,3257],[1795,3464]],{color:"black"}).addTo(map);
var sepAN5 = L.polyline([[2090,3181],[2132,3395]],{color:"black"}).addTo(map);
var sepAN6 = L.polyline([[2203,3155],[2240,3365]],{color:"black"}).addTo(map);
var sepAN7 = L.polyline([[2315,3130],[2350,3339]],{color:"black"}).addTo(map);
var sepAN8 = L.polyline([[2424,3106],[2456,3316]],{color:"black"}).addTo(map);
var sepAN9 = L.polyline([[2286,3008],[2258,2859]],{color:"black"}).addTo(map);
var sepAN10 = L.polyline([[2451,2965],[2430,2819]],{color:"black"}).addTo(map);

//separacion interna DMAT
var sepDmat = L.polyline([[1962,2988],[1611,3067]],{color:"black"}).addTo(map);
//Tooltips

//? buscar alternativa

/* edA.bindTooltip("Edificio A");
edB.bindTooltip("Edificio B");
edC.bindTooltip("Edificio C");
edE.bindTooltip("Edificio E");
edF.bindTooltip("Edificio F", {offset: [150, 30]}); */