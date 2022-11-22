// Array markers
var markers = []

// Plantilla Marker 
var VAR_MARCADOR = L.marker([2427,1605], riseOnHover = true, interactive = true);
markers.push([ VAR_MARCADOR , "NOMBRE MARCADOR"]) // ver el resto para usar de referencia

salas_list = []

//Se crean manualmente los marcadores (no hay otra forma de hacer esto)
//luego se agregan junto con un string que representa su nombre real a una lista de listas
var salaE001 = L.marker([2869, 653], riseOnHover = true, interactive = true);
markers.push([salaE001, "Sala E201"])

var salaE002 = L.marker([2998, 624], riseOnHover = true, interactive = true);
markers.push([salaE002, "Sala E202"])

var salaE003 = L.marker([3123, 593], riseOnHover = true, interactive = true);
markers.push([salaE003, "Sala E203"])

var lab_metro = L.marker([3239,562], riseOnHover = true, interactive = true);
markers.push([lab_metro, "Laboratorio Metrología"])

//! Placeholder para testeo, eventualmente se borrará/cambiará
var gimnasio = L.marker([2427,1605], riseOnHover = true, interactive = true);
markers.push([gimnasio, "Gimnasio"])

console.log(markers)

var currentMarker;
var currentName;

//Le asigna un popup con su respectivo nombre
//tambien las agrega a un layerGroup para poder esconder todas las salas de una
//hay que hacer uno de estos por grupo de marcadores, digase salas, baños, oficinas etc

for (var i = 0; i < markers.length; i++) { // salas
    currentMarker = markers[i][0];
    currentName = markers[i][1];
    
    console.log(currentMarker)
    console.log(currentName)
    
    currentMarker.bindPopup(currentName);
    
    salas_list.push(currentMarker)
    console.log(salas_list)
}

var salas_layer = L.layerGroup(salas_list)
salas_layer.addTo(map)