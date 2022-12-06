//Salas de clases
//Esconde o muestra las salas como corresponde
L.easyButton('bi bi-person-video3', function(){
    var salas_layers = [salas_piso1_layer, salas_piso2_layer];
    salas_layers.forEach(layer => {
        if (map.hasLayer(layer)) {
            layer.remove();
        } else {
            layer.addTo(map);
        }
    });
}).addTo(map)


//Admins
//Esconde o muestra las oficinas como corresponde
L.easyButton('bi bi-building', function(){
    var admin_layers = [admin_piso1_layer];
    admin_layers.forEach(layer => {
        if (map.hasLayer(layer)) {
            layer.remove();
        } else {
            layer.addTo(map);
        }
    });
}).addTo(map)

var baseMaps = {
    "Piso 1": piso1_layer,
    "Piso 2": piso2_layer
};

L.control.layers(baseMaps).addTo(map);
