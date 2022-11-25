//Salas de clases
//Esconde o muestra las salas como corresponde
L.easyButton('bi bi-person-video3', function(){
    //map.removeLayer(salas_list);
    if (map.hasLayer(salas_layer)) {
        salas_layer.remove();
    } else {
        salas_layer.addTo(map);
    }
}).addTo(map)