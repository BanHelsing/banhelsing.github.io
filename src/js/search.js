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

var salas_data1 = {}
salas_piso1.forEach(sala => {
    name_sala = sala.options.title.toLowerCase();
    coords = [sala._latlng.lat,sala._latlng.lng];
    salas_data1[name_sala] = coords;
});


var salas_data2 = {}
salas_piso2.forEach(sala => {
    name_sala = sala.options.title.toLowerCase();
    coords = [sala._latlng.lat,sala._latlng.lng];
    salas_data2[name_sala] = coords;
})

var baños_data1 = {}
baños_piso1.forEach(baño => {
    name_baño = baño.options.title.toLowerCase();
    coords = [baño._latlng.lat,baño._latlng.lng];
    baños_data1[name_baño] = coords;
    if(!("all" in baños_data1)) baños_data1["all"] = [];
    baños_data1["all"].push(coords);
})

var admin_data1 = {}
admin_piso1.forEach(admin =>{
    name_admin = admin.options.title.toLowerCase();
    coords = [admin._latlng.lat,admin._latlng.lng];
    admin_data1[name_admin] = coords;
})

var depto_data1 = {}
deptos_piso1.forEach(depto => {
    name_depto = depto.options.title.toLowerCase();
    coords = [depto._latlng.lat,depto._latlng.lng];
    depto_data1[name_depto] = coords;
})

function fly(coords){
    map.flyTo(coords, 1,{animate:true,duration:1});
}

//barra de busqueda (input)
const searchInput = document.getElementById("searchInput");
//Al presionar el boton se realiza esta funcion que busca en el diccionario data si se encuentra exactamente el
//valor entregado en el input
function searching(){
    let val = searchInput.value.toLowerCase();
    if(val.startsWith("sala") || val.startsWith("laboratorio")){
        if(val in salas_data1){
            fly(salas_data1[val])
        }
        else if(val in salas_data2){
            fly(salas_data2[val])
        }
        else{
            swal({title:"Sala no encontrada"})
        }
    }
    else if(val.startsWith("departamento") || val.startsWith("ingenieria")){
        if(val in depto_data1){
            fly(depto_data1[val])
        }
        else{
            swal({title:"Departamento no encontrado"})
        }
    }
    else{
        if(val in admin_data1){
            fly(admin_data1[val])
        }
        else{
            swal({title:"No encontrado"})
        }
    }
}