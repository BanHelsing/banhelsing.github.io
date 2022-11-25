// Array markers
var markers = []

// Plantilla Marker 
var VAR_MARCADOR = L.marker([2427,1605], riseOnHover = true, interactive = true);
markers.push([ VAR_MARCADOR , "NOMBRE MARCADOR", "piso 1"]) // ver el resto para usar de referencia

salas_list = []

//Se crean manualmente los marcadores (no hay otra forma de hacer esto)
//luego se agregan junto con un string que representa su nombre real a una lista de listas
var salaE001 = L.marker([2869, 653], riseOnHover = true, interactive = true);
markers.push([salaE001, "Sala E201","piso 2"])

var salaE002 = L.marker([2998, 624], riseOnHover = true, interactive = true);
markers.push([salaE002, "Sala E202","piso 2"])

var salaE003 = L.marker([3123, 593], riseOnHover = true, interactive = true);
markers.push([salaE003, "Sala E203", "piso 2"])

var lab_metro = L.marker([3239,562], riseOnHover = true, interactive = true);
markers.push([lab_metro, "Laboratorio Metrología", "piso 2"])

//Edificio A Piso 1
var dep_fis = L.marker([1281, 3355], riseOnHover = true, interactive = true);
markers.push([dep_fis, "Departamento de fisica","piso 1"])
var salaA016 = L.marker([1427,3367], riseOnHover = true, interactive = true);
markers.push([salaA016, "Sala A016","piso 1"])
var dep_mat = L.marker([1459, 3095], riseOnHover = true, interactive = true);
markers.push([dep_mat, "Departamento de Matematica","piso 1"])
var dep_eh = L.marker([1814, 3081], riseOnHover = true, interactive = true);
markers.push([dep_eh, "Departamento de Estudios humanisticos", "piso 1"])
var dep_qui = L.marker([1824, 2991], riseOnHover = true, interactive = true);
markers.push([dep_qui, "Departamento de Quimica","piso 1"])
var asem = L.marker([1525, 3680], riseOnHover = true, interactive = true);
markers.push([asem, "ASEM", "piso 1"])
var ingAmb = L.marker([1586, 3668], riseOnHover = true, interactive = true);
markers.push([ingAmb, "Ingieneria Civil Ambiental", "piso 1"])
var salaA025 = L.marker([1645, 3658], riseOnHover = true, interactive = true);
markers.push([salaA025, "Sala A-025", "piso 1"])
var salaA026 = L.marker([1701, 3640], riseOnHover = true, interactive = true);
markers.push([salaA026, "Sala A-026", "piso 1"])
var salaA027 = L.marker([1770, 3628], riseOnHover = true, interactive = true);
markers.push([salaA027, "Sala A-027", "piso 1"])
var salaA028 = L.marker([1829, 3609], riseOnHover = true, interactive = true);
markers.push([salaA028, "Sala A-028", "piso 1"])
var salaA029 = L.marker([1926, 3592], riseOnHover = true, interactive = true);
markers.push([salaA029, "Sala A-029", "piso 1"])
var sala130B = L.marker([1880, 3597], riseOnHover = true, interactive = true);
markers.push([sala130B, "Sala 130-B", "piso 1"])
var banoMiA = L.marker([1949, 3326], riseOnHover = true, interactive = true);
markers.push([banoMiA, "Baño", "piso 1"])
var salaA017 = L.marker([2000, 2989], riseOnHover = true, interactive = true);
markers.push([salaA017, "Sala A-017", "piso 1"])
var salaA001 = L.marker([2189,2950], riseOnHover = true, interactive = true);
markers.push([salaA001, "Sala A-001", "piso 1"])
var salaA002 = L.marker([2348,2917], riseOnHover = true, interactive = true);
markers.push([salaA002, "Sala A-002", "piso 1"])
var salaA003 = L.marker([2492,2887], riseOnHover = true, interactive = true);
markers.push([salaA003, "Sala A-003", "piso 1"])
var salaA008 = L.marker([2058,3301], riseOnHover = true, interactive = true);
markers.push([salaA008, "Sala A-008", "piso 1"])
var salaA009 = L.marker([2168,3264], riseOnHover = true, interactive = true);
markers.push([salaA009, "Sala A-009", "piso 1"])
var salaA010 = L.marker([2283,3237], riseOnHover = true, interactive = true);
markers.push([salaA010, "Sala A-010", "piso 1"])
var salaA011 = L.marker([2391,3228], riseOnHover = true, interactive = true);
markers.push([salaA011, "Sala A-011", "piso 1"])
var banoH = L.marker([2533,3161], riseOnHover = true, interactive = true);
markers.push([banoH, "Baño de Hombres", "piso 1"])
var banoM = L.marker([2562,3275], riseOnHover = true, interactive = true);
markers.push([banoM, "Baño de Mujeres", "piso 1"])
var caja = L.marker([2744,3410], riseOnHover = true, interactive = true);
markers.push([caja, "Caja de Pagos","piso 1"])
var PACE = L.marker([2653,3480], riseOnHover = true, interactive = true);
markers.push([PACE, "PACE","piso 1"])
var DGIIP = L.marker([2603,3486], riseOnHover = true, interactive = true);
markers.push([DGIIP, "DGIIP/UCP", "piso 1"])
var admin = L.marker([2554,3450], riseOnHover = true, interactive = true);
markers.push([admin, "Administrativos", "piso 1"])
var salaA015 = L.marker([2490,3458], riseOnHover = true, interactive = true);
markers.push([salaA015, "Sala A-015", "piso 1"])
var salaA014 = L.marker([2385,3488], riseOnHover = true, interactive = true);
markers.push([salaA014, "Sala A-014", "piso 1"])
var salaA013 = L.marker([2264,3517], riseOnHover = true, interactive = true);
markers.push([salaA013, "Sala A-013", "piso 1"])
var salaA012 = L.marker([2126,3542], riseOnHover = true, interactive = true);
markers.push([salaA012, "Sala A-012", "piso 1"])


//Edificio A Piso 1
var dep_fis = L.marker([1281, 3355], riseOnHover = true, interactive = true);
markers.push([dep_fis, "Departamento de fisica"])
var salaA016 = L.marker([1427,3367], riseOnHover = true, interactive = true);
markers.push([salaA016, "Sala A016"])
var dep_mat = L.marker([1459, 3095], riseOnHover = true, interactive = true);
markers.push([dep_mat, "Departamento de Matematica"])
var dep_eh = L.marker([1814, 3081], riseOnHover = true, interactive = true);
markers.push([dep_eh, "Departamento de Estudios humanisticos"])
var dep_qui = L.marker([1824, 2991], riseOnHover = true, interactive = true);
markers.push([dep_qui, "Departamento de Quimica"])
var asem = L.marker([1525, 3680], riseOnHover = true, interactive = true);
markers.push([asem, "ASEM"])
var ingAmb = L.marker([1586, 3668], riseOnHover = true, interactive = true);
markers.push([ingAmb, "Ingieneria Civil Ambiental"])
var salaA025 = L.marker([1645, 3658], riseOnHover = true, interactive = true);
markers.push([salaA025, "Sala A-025"])
var salaA026 = L.marker([1701, 3640], riseOnHover = true, interactive = true);
markers.push([salaA026, "Sala A-026"])
var salaA027 = L.marker([1770, 3628], riseOnHover = true, interactive = true);
markers.push([salaA027, "Sala A-027"])
var salaA028 = L.marker([1829, 3609], riseOnHover = true, interactive = true);
markers.push([salaA028, "Sala A-028"])
var salaA029 = L.marker([1926, 3592], riseOnHover = true, interactive = true);
markers.push([salaA029, "Sala A-029"])
var sala130B = L.marker([1880, 3597], riseOnHover = true, interactive = true);
markers.push([sala130B, "Sala 130-B"])
var banoMiA = L.marker([1949, 3326], riseOnHover = true, interactive = true);
markers.push([banoMiA, "Baño"])
var salaA017 = L.marker([2000, 2989], riseOnHover = true, interactive = true);
markers.push([salaA017, "Sala A-017"])
var salaA001 = L.marker([2189,2950], riseOnHover = true, interactive = true);
markers.push([salaA001, "Sala A-001"])
var salaA002 = L.marker([2348,2917], riseOnHover = true, interactive = true);
markers.push([salaA002, "Sala A-002"])
var salaA003 = L.marker([2492,2887], riseOnHover = true, interactive = true);
markers.push([salaA003, "Sala A-003"])
var salaA008 = L.marker([2058,3301], riseOnHover = true, interactive = true);
markers.push([salaA008, "Sala A-008"])
var salaA009 = L.marker([2168,3264], riseOnHover = true, interactive = true);
markers.push([salaA009, "Sala A-009"])
var salaA010 = L.marker([2283,3237], riseOnHover = true, interactive = true);
markers.push([salaA010, "Sala A-010"])
var salaA011 = L.marker([2391,3228], riseOnHover = true, interactive = true);
markers.push([salaA011, "Sala A-011"])
var banoH = L.marker([2533,3161], riseOnHover = true, interactive = true);
markers.push([banoH, "Baño de Hombres"])
var banoM = L.marker([2562,3275], riseOnHover = true, interactive = true);
markers.push([banoM, "Baño de Mujeres"])
var caja = L.marker([2744,3410], riseOnHover = true, interactive = true);
markers.push([caja, "Caja de Pagos"])
var PACE = L.marker([2653,3480], riseOnHover = true, interactive = true);
markers.push([PACE, "PACE"])
var DGIIP = L.marker([2603,3486], riseOnHover = true, interactive = true);
markers.push([DGIIP, "DGIIP/UCP"])
var admin = L.marker([2554,3450], riseOnHover = true, interactive = true);
markers.push([admin, "Administrativos"])
var salaA015 = L.marker([2490,3458], riseOnHover = true, interactive = true);
markers.push([salaA015, "Sala A-015"])
var salaA014 = L.marker([2385,3488], riseOnHover = true, interactive = true);
markers.push([salaA014, "Sala A-014"])
var salaA013 = L.marker([2264,3517], riseOnHover = true, interactive = true);
markers.push([salaA013, "Sala A-013"])
var salaA012 = L.marker([2126,3542], riseOnHover = true, interactive = true);
markers.push([salaA012, "Sala A-012"])


//! Placeholder para testeo, eventualmente se borrará/cambiará
var gimnasio = L.marker([2427,1605], riseOnHover = true, interactive = true);
markers.push([gimnasio, "Gimnasio", "piso 1"])

var currentMarker;
var currentName;

//Le asigna un popup con su respectivo nombre
//tambien las agrega a un layerGroup para poder esconder todas las salas de una
//hay que hacer uno de estos por grupo de marcadores, digase salas, baños, oficinas etc

for (var i = 0; i < markers.length; i++) { // salas
    currentMarker = markers[i][0];
    currentName = markers[i][1];
    
    currentMarker.bindPopup(currentName);
    
    salas_list.push(currentMarker)
}

var salas_layer = L.layerGroup(salas_list)
salas_layer.addTo(map)