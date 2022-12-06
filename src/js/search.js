//datos generados por los marcadores en cierto piso
var data = {}

/* Genera un objeto de la siguiente manera
{
    "piso x":{
        "Sala A001":[1245,1237]
        .
        .
        .
        lo ideal seria poner los baños en una sola entrada y poder mostrar uno al azar o ponerle nombres especificos
        "Baño":[[1231,1534],[1327,1237],.....]
    }
    .
    .
    .
    si no se define un piso quedará como undefined
}
*/
map._layers.forEach(mark => {
    var curMarker = mark[0]
    var curName = mark[1]
    var piso = mark[2]
    if(!(piso in data)){
        data[piso] = {}
    }
    if(!(curName in data[piso])){
        data[piso][curName] = []
    }
    if(curName === "Baño"){
        data[piso][curName].push([curMarker._latlng.lat,curMarker._latlng.lng])
    } else{
        data[piso][curName].push(curMarker._latlng.lat);
        data[piso][curName].push(curMarker._latlng.lng);
    }
});

console.log(data)

//barra de busqueda (input)
const searchInput = document.getElementById("searchInput");
//Al presionar el boton se realiza esta funcion que busca en el diccionario data si se encuentra exactamente el
//valor entregado en el input
function searching(){
    var val = searchInput.value;
    for(let piso in data){
        if(val in data[piso]){
            coords = data[piso][val]
            map.flyTo(coords, 1,{animate:true,duration:1});
        }
    }
}