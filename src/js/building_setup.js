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
edB2 = L.polygon([
    [4051,2117], // 1
    [3889,2152], // 2
    [4105,3174], // 3
    [4188,3156], // 4
    [4194,3182], // 5
    [4351,3147], // 6
    [4231,2578], // 7
    [4177,2589], // 8
    [4119,2329], // 9
    [4094,2321]  // 10
]).addTo(map);

//Polyline (divisiones)
//Edificio A piso 1
edAP1_div = []
edAP1_1 = L.polyline([[1403,3633],[1337,3350]],{color:"black"});
edAP1_div.push(edAP1_1);
edAP1_2 = L.polyline([[1476,3540],[1429,3328]],{color:"black"});
edAP1_div.push(edAP1_2);
edAP1_3 = L.polyline([[2115,3594],[2052,3610]],{color:"black"});
edAP1_div.push(edAP1_3);
edAP1_4 = L.polyline([[2022,3618],[2001,3523]],{color:"black"});
edAP1_div.push(edAP1_4);
edAP1_5 = L.polyline([[2121,3622],[2096,3502]],{color:"black"});
edAP1_div.push(edAP1_5);
edAP1_6 = L.polyline([[2103,3534],[2038,3549]],{color:"black"});
edAP1_div.push(edAP1_6);
edAP1_7 = L.polyline([[2662,3374],[1480,3641]],{color:"black"});
edAP1_div.push(edAP1_7);
edAP1_8 = L.polyline([[2639,3275],[1476,3540]],{color:"black"});
edAP1_div.push(edAP1_8);
edAP1_9 = L.polyline([[1557,3654],[1549,3625]],{color:"black"});
edAP1_div.push(edAP1_9);
edAP1_10 = L.polyline([[1488,3670],[2009,3556]],{color:"black"});
edAP1_div.push(edAP1_10);
edAP1_11 = L.polyline([[1706,3590],[1712,3619]],{color:"black"});
edAP1_div.push(edAP1_11);
edAP1_12 = L.polyline([[1623,3640],[1617,3610]],{color:"black"});
edAP1_div.push(edAP1_12);
edAP1_13 = L.polyline([[1853,3555],[1860,3588]],{color:"black"});
edAP1_div.push(edAP1_13);
edAP1_14 = L.polyline([[1777,3573],[1784,3604]],{color:"black"});
edAP1_div.push(edAP1_14);
edAP1_15 = L.polyline([[1928,3539],[1935,3571]],{color:"black"});
edAP1_div.push(edAP1_15);
edAP1_16 = L.polyline([[2031,3516],[2052,3610]],{color:"black"});
edAP1_div.push(edAP1_16);
edAP1_17 = L.polyline([[1518,3309],[1563,3520]],{color:"black"});
edAP1_div.push(edAP1_17);
edAP1_18 = L.polyline([[2705,3368],[2731,3487]],{color:"black"});
edAP1_div.push(edAP1_18);
edAP1_19 = L.polyline([[2600,3516],[2576,3393]],{color:"black"});
edAP1_div.push(edAP1_19);
edAP1_20 = L.polyline([[2663,3375],[2688,3496]],{color:"black"});
edAP1_div.push(edAP1_20);
edAP1_21 = L.polyline([[2676,3435],[2588,3456]],{color:"black"});
edAP1_div.push(edAP1_21);
edAP1_22 = L.polyline([[2625,3445],[2640,3507]],{color:"black"});
edAP1_div.push(edAP1_22);
edAP1_23 = L.polyline([[2546,3400],[2573,3522]],{color:"black"});
edAP1_div.push(edAP1_23);
edAP1_24 = L.polyline([[2346,3573],[2318,3451]],{color:"black"});
edAP1_div.push(edAP1_24);
edAP1_25 = L.polyline([[2463,3548],[2433,3425]],{color:"black"});
edAP1_div.push(edAP1_25);
edAP1_26 = L.polyline([[2235,3597],[2208,3476]],{color:"black"});
edAP1_div.push(edAP1_26);
edAP1_27 = L.polyline([[2559,3195],[2620,3182]],{color:"black"});
edAP1_div.push(edAP1_27);
edAP1_28 = L.polyline([[1968,3207],[2015,3417]],{color:"black"});
edAP1_div.push(edAP1_28);
edAP1_29 = L.polyline([[2090,3181],[2136,3389]],{color:"black"});
edAP1_div.push(edAP1_29);
edAP1_30 = L.polyline([[1792,3467],[1742,3258]],{color:"black"});
edAP1_div.push(edAP1_30);
edAP1_31 = L.polyline([[1633,3282],[1679,3493]],{color:"black"});
edAP1_div.push(edAP1_31);
edAP1_32 = L.polyline([[1856,3234],[1904,3442]],{color:"black"});
edAP1_div.push(edAP1_32);
edAP1_33 = L.polyline([[2199,3156],[2240,3365]],{color:"black"});
edAP1_div.push(edAP1_33);
edAP1_34 = L.polyline([[2323,3131],[2368,3337]],{color:"black"});
edAP1_div.push(edAP1_34);
edAP1_35 = L.polyline([[2429,3106],[2475,3312]],{color:"black"});
edAP1_div.push(edAP1_35);
edAP1_36 = L.polyline([[2533,3081],[2581,3288]],{color:"black"});
edAP1_div.push(edAP1_36);
edAP1_37 = L.polyline([[2277,3009],[2244,2860]],{color:"black"});
edAP1_div.push(edAP1_37);
edAP1_38 = L.polyline([[2446,2971],[2413,2823]],{color:"black"});
edAP1_div.push(edAP1_38);
edAP1_39 = L.polyline([[1925,2996],[1618,3065]],{color:"black"});
edAP1_div.push(edAP1_39);
edAP1_40 = L.polyline([[1622,3083],[1929,3016]],{color:"black"});
edAP1_div.push(edAP1_40);
edAP1_41 = L.polyline([[1622,3083],[1638,3150]],{color:"black"});
edAP1_div.push(edAP1_41);
edAP1_42 = L.polyline([[1604,3002],[1618,3065]],{color:"black"});
edAP1_div.push(edAP1_42);
edAP1_43 = L.polyline([[1912,2934],[1943,3082]],{color:"black"});
edAP1_div.push(edAP1_43);
edAP1_44 = L.polyline([[1308,3224],[1278,3075]],{color:"black"});
edAP1_div.push(edAP1_44);
edAP1_45 = L.polyline([[1592,3159],[1559,3013]],{color:"black"});
edAP1_div.push(edAP1_45);

edAP1_layer = L.layerGroup(edAP1_div);
edAP1_layer.addTo(map);

//Edificio B2 piso 1
edB2P1_div = []
edB2P1_1 = L.polyline([[4177,2588],[3990,2631]],{color:"black"});
edB2P1_div.push(edB2P1_1);
edB2P1_2 = L.polyline([[4156,2496],[3970,2538]],{color:"black"});
edB2P1_div.push(edB2P1_2);
edB2P1_3 = L.polyline([[4137,2408],[3952,2450]],{color:"black"});
edB2P1_div.push(edB2P1_3);
edB2P1_4 = L.polyline([[4082,2269],[3921,2305]],{color:"black"});
edB2P1_div.push(edB2P1_4);
edB2P1_5 = L.polyline([[4068,2197],[3905,2230]],{color:"black"});
edB2P1_div.push(edB2P1_5);

edB2P1_layer = L.layerGroup(edB2P1_div);
edB2P1_layer.addTo(map);

//Edificio B1 Piso 1
edB1P1_div = []
edB1P1_1 = L.polyline([[3802,2122],[3696,1614]],{color:"black"});
edB1P1_div.push(edB1P1_1);
edB1P1_2 = L.polyline([[3001,1764],[3696,1614]],{color:"black"});
edB1P1_div.push(edB1P1_2);
edB1P1_3 = L.polyline([[3533,895],[3679,1541]],{color:"black"});
edB1P1_div.push(edB1P1_3);
edB1P1_4 = L.polyline([[2992,1696],[3679,1541]],{color:"black"});
edB1P1_div.push(edB1P1_4);
edB1P1_5 = L.polyline([[3860,2104],[3606,881]],{color:"black"});
edB1P1_div.push(edB1P1_5);
edB1P1_6 = L.polyline([[3030,1904],[3724,1751]],{color:"black"});
edB1P1_div.push(edB1P1_6);
edB1P1_7 = L.polyline([[3533,1650],[3562,1788]],{color:"black"});
edB1P1_div.push(edB1P1_7);
edB1P1_8 = L.polyline([[3400,1677],[3430,1816]],{color:"black"});
edB1P1_div.push(edB1P1_8);
edB1P1_9 = L.polyline([[3320,1695],[3346,1834]],{color:"black"});
edB1P1_div.push(edB1P1_9);
edB1P1_10 = L.polyline([[3200,1719],[3233,1860]],{color:"black"});
edB1P1_div.push(edB1P1_10);
edB1P1_11 = L.polyline([[3479,1660],[3510,1799]],{color:"black"});
edB1P1_div.push(edB1P1_11);
edB1P1_12 = L.polyline([[2956,1556],[3649,1405]],{color:"black"});
edB1P1_div.push(edB1P1_12);
edB1P1_13 = L.polyline([[3489,1439],[3518,1578]],{color:"black"});
edB1P1_div.push(edB1P1_13);
edB1P1_14 = L.polyline([[3435,1450],[3466,1589]],{color:"black"});
edB1P1_div.push(edB1P1_14);
edB1P1_15 = L.polyline([[3195,1504],[3225,1643]],{color:"black"});
edB1P1_div.push(edB1P1_15);
edB1P1_16 = L.polyline([[3119,1520],[3147,1660]],{color:"black"});
edB1P1_div.push(edB1P1_16);
edB1P1_17 = L.polyline([[3031,1540],[3062,1679]],{color:"black"});
edB1P1_div.push(edB1P1_17);
edB1P1_18 = L.polyline([[3276,1486],[3305,1624]],{color:"black"});
edB1P1_div.push(edB1P1_18);
edB1P1_19 = L.polyline([[2901,1301],[3529,1163]],{color:"black"});
edB1P1_div.push(edB1P1_19);
edB1P1_20 = L.polyline([[3529,1163],[3471,910]],{color:"black"});
edB1P1_div.push(edB1P1_20);
edB1P1_21 = L.polyline([[3300,1217],[3244,957]],{color:"black"});
edB1P1_div.push(edB1P1_21);
edB1P1_22 = L.polyline([[3277,1485],[3223,1232]],{color:"black"});
edB1P1_div.push(edB1P1_22);
edB1P1_23 = L.polyline([[3619,1282],[3308,1348]],{color:"black"});
edB1P1_div.push(edB1P1_23);
edB1P1_24 = L.polyline([[3319,1400],[3631,1331]],{color:"black"});
edB1P1_div.push(edB1P1_24);
edB1P1_25 = L.polyline([[3280,1223],[3333,1473]],{color:"black"});
edB1P1_div.push(edB1P1_25);
edB1P1_26 = L.polyline([[3561,1424],[3542,1352]],{color:"black"});
edB1P1_div.push(edB1P1_26);
edB1P1_27 = L.polyline([[3537,1297],[3506,1173]],{color:"black"});
edB1P1_div.push(edB1P1_27);
edB1P1_28 = L.polyline([[3637,1037],[3815,997]],{color:"black"});
edB1P1_div.push(edB1P1_28);
edB1P1_29 = L.polyline([[3666,1173],[3844,1133]],{color:"black"});
edB1P1_div.push(edB1P1_29);
edB1P1_30 = L.polyline([[3689,1280],[3867,1242]],{color:"black"});
edB1P1_div.push(edB1P1_30);
edB1P1_31 = L.polyline([[3713,1392],[3891,1355]],{color:"black"});
edB1P1_div.push(edB1P1_31);
edB1P1_32 = L.polyline([[3721,1432],[3900,1394]],{color:"black"});
edB1P1_div.push(edB1P1_32);
edB1P1_33 = L.polyline([[3744,1544],[3922,1504]],{color:"black"});
edB1P1_div.push(edB1P1_33);
edB1P1_34 = L.polyline([[3766,1651],[3945,1613]],{color:"black"});
edB1P1_div.push(edB1P1_34);
edB1P1_35 = L.polyline([[3789,1762],[3968,1722]],{color:"black"});
edB1P1_div.push(edB1P1_35);
edB1P1_36 = L.polyline([[3812,1870],[3992,1831]],{color:"black"});
edB1P1_div.push(edB1P1_36);
edB1P1_37 = L.polyline([[3835,1981],[4014,1939]],{color:"black"});
edB1P1_div.push(edB1P1_37);
edB1P1_38 = L.polyline([[3490,1803],[3573,2167]],{color:"black"});
edB1P1_div.push(edB1P1_38);
edB1P1_39 = L.polyline([[3378,1825],[3460,2192]],{color:"black"});
edB1P1_div.push(edB1P1_39);

edB1P1_layer = L.layerGroup(edB1P1_div);
edB1P1_layer.addTo(map);

//? buscar alternativa

/* edA.bindTooltip("Edificio A");
edB.bindTooltip("Edificio B");
edC.bindTooltip("Edificio C");
edE.bindTooltip("Edificio E");
edF.bindTooltip("Edificio F", {offset: [150, 30]}); */