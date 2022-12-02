//Establece las layers disponibles y las habilita al mapa
var baseMaps = {
    "Piso 1": piso1_layer,
    "Piso 2": piso2_layer,
    "Piso 3": piso_3_Layer,
    "Piso 4": piso_4_Layer,
    "Piso -1": piso_0_Layer,
    "General": General_Layer
};
L.control.layers(baseMaps).addTo(map);

//Agregado de ImagenOverlay solo eliminando las anteriores necesarias
function newOverlay(url,bounds){
    console.log("Observando capas existentes en el mapa")
    var counter= 0;
    map.eachLayer(function (layer) { 
        if(Object.hasOwn(layer, '_url')){
            var name= layer._url;
            console.log("OverlayImage "+counter+": "+name);
            if(name != "./src/img/mapa.jpeg"){
                console.log("Sacando layer incesesaria")
                map.removeLayer(layer);
            }
            counter+=1;
        }
    });
    var overlay= L.imageOverlay(url, bounds).addTo(map);
    var outer= L.imageOverlay("./src/img/map_overlay_img/s.png", bounds).addTo(map);
    map.fitBounds(bounds);
};

//Evento: Cambia el overlay cuado se la capa actual en el mapa
map.on('baselayerchange', function(event)
{
    var bounds = [[0,0], [4828,5360]];
    var url_layer= "";
    console.log("Cambiado a Capa: " + event.name);
    if ( event.name == "Piso -1"){
        console.log("Activando capa del piso -1");
        url_layer= "./src/img/map_overlay_img/e.png";
    };
    if ( event.name == "Piso 1"){
        console.log("Activando capa del piso 1");
        url_layer= "./src/img/map_overlay_img/e.png";
    };
    if ( event.name == "Piso 2"){
        console.log("Activando capa del piso 2");
        url_layer= "./src/img/map_overlay_img/e.png";
    };
    if ( event.name == "Piso 3"){
        console.log("Activando capa del piso 3");
        url_layer= "./src/img/map_overlay_img/e.png";
    };
    if ( event.name == "Piso 4"){
        console.log("Activando capa del piso 4");
        url_layer= "./src/img/map_overlay_img/e.png";
    };
    if (event.name == "General"){
        console.log("Utilizando Imagen en General");
        url_layer= "./src/img/map_overlay_img/g.png";
    };
    newOverlay(url_layer,bounds);
});

//Verifica si tiene seteado una capa y si no pone la general
map.eachLayer(function (layer) { 
    if(Object.hasOwn(layer, '_url')){
        var name= layer._url;
        var counter= 0;
        console.log("OverlayImage "+counter+": "+name);
        if(name == "./src/img/mapa.jpeg"){
            console.log("Agrega Incial como piso 1")
            var overlay= L.imageOverlay("./src/img/map_overlay_img/e.png", bounds).addTo(map);
        }
        counter+=1;
    }
});