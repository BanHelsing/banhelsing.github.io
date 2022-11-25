// Array markers
var markers = []

// Plantilla Marker 
var VAR_MARCADOR = L.marker([0,0], {title:"Sala N123", riseOnHover: true, interactive: true});
markers.push(VAR_MARCADOR);
// ver el resto para usar de referencia);



//Aqui vamos separando los marcadores por tipo, los vamos creando cuando se necesiten
//asi podemos tener un boton para mostrar solo salas, solo baños y asi
salas_piso1 = [];
salas_piso2 = [];
baños_piso1 = [];
admin_piso1 = [];
deptos_piso1 = [];

salas = [salas_piso1, salas_piso2]

piso1 = [salas_piso1,baños_piso1,admin_piso1,deptos_piso1];
piso2 = [salas_piso2];

pisos = [piso1, piso2];

//Se crean manualmente los marcadores (no hay otra forma de hacer esto)
//luego se agregan junto con un string que representa su nombre real a una lista de listas

//Edificio E Piso 2
var salaE001 = L.marker([2869, 653], {title:"Sala E-201", riseOnHover: true, interactive: true});
salas_piso2.push(salaE001);
var salaE002 = L.marker([2998, 624], {title:"Sala E-202", riseOnHover: true, interactive: true});
salas_piso2.push(salaE002);
var salaE003 = L.marker([3123, 593], {title:"Sala E-203", riseOnHover: true, interactive: true});
salas_piso2.push(salaE003);
var lab_metro = L.marker([3239,562], {title:"Laboratorio Metrología", riseOnHover: true, interactive: true});
salas_piso2.push(lab_metro);

//Edificio A Piso 1
var dep_fis = L.marker([1281, 3355], {title:"Departamento de fisica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_fis)
var salaA016 = L.marker([1427,3367], {title:"Sala A016", riseOnHover: true, interactive: true});
salas_piso1.push(salaA016)
var dep_mat = L.marker([1459, 3095], {title:"Departamento de Matematica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_mat)
var dep_eh = L.marker([1814, 3081], {title:"Departamento de Estudios humanisticos", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_eh)
var dep_qui = L.marker([1824, 2991], {title:"Departamento de Quimica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_qui)
var asem = L.marker([1525, 3688], {title:"ASEM", riseOnHover: true, interactive: true});
salas_piso1.push(asem)
var ingAmb = L.marker([1586, 3675], {title:"Ingieneria Civil Ambiental", riseOnHover: true, interactive: true});
deptos_piso1.push(ingAmb)
var salaA025 = L.marker([1646, 3662], {title:"Sala A-025", riseOnHover: true, interactive: true});
salas_piso1.push(salaA025)
var salaA026 = L.marker([1702, 3649], {title:"Sala A-026", riseOnHover: true, interactive: true});
salas_piso1.push(salaA026)
var salaA027 = L.marker([1773, 3634], {title:"Sala A-027", riseOnHover: true, interactive: true});
salas_piso1.push(salaA027)
var salaA028 = L.marker([1831, 3621], {title:"Sala A-028", riseOnHover: true, interactive: true});
salas_piso1.push(salaA028)
var salaA029 = L.marker([1927, 3600], {title:"Sala A-029", riseOnHover: true, interactive: true});
salas_piso1.push(salaA029)
var sala130B = L.marker([1882, 3610], {title:"Sala 130-B", riseOnHover: true, interactive: true});
salas_piso1.push(sala130B)
var banoMiA = L.marker([1949, 3326], {title:"Baño", riseOnHover: true, interactive: true});
baños_piso1.push(banoMiA)
var salaA017 = L.marker([2000, 2989], {title:"Sala A-017", riseOnHover: true, interactive: true});
salas_piso1.push(salaA017)
var salaA001 = L.marker([2189,2950], {title:"Sala A-001", riseOnHover: true, interactive: true});
salas_piso1.push(salaA001)
var salaA002 = L.marker([2348,2917], {title:"Sala A-002", riseOnHover: true, interactive: true});
salas_piso1.push(salaA002)
var salaA003 = L.marker([2492,2887], {title:"Sala A-003", riseOnHover: true, interactive: true});
salas_piso1.push(salaA003)
var salaA008 = L.marker([2058,3301], {title:"Sala A-008", riseOnHover: true, interactive: true});
salas_piso1.push(salaA008)
var salaA009 = L.marker([2168,3264], {title:"Sala A-009", riseOnHover: true, interactive: true});
salas_piso1.push(salaA009)
var salaA010 = L.marker([2283,3237], {title:"Sala A-010", riseOnHover: true, interactive: true});
salas_piso1.push(salaA010)
var salaA011 = L.marker([2391,3228], {title:"Sala A-011", riseOnHover: true, interactive: true});
salas_piso1.push(salaA011)
var banoH = L.marker([2533,3161], {title:"Baño de Hombres", riseOnHover: true, interactive: true});
baños_piso1.push(banoH)
var banoM = L.marker([2562,3275], {title:"Baño de Mujeres", riseOnHover: true, interactive: true});
baños_piso1.push(banoM)
var caja = L.marker([2744,3410], {title:"Caja de Pagos", riseOnHover: true, interactive: true});
admin_piso1.push(caja)
var PACE = L.marker([2653,3480], {title:"PACE", riseOnHover: true, interactive: true});
admin_piso1.push(PACE)
var DGIIP = L.marker([2603,3486], {title:"DGIIP/UCP", riseOnHover: true, interactive: true});
admin_piso1.push(DGIIP)
var admin = L.marker([2556,3461], {title:"Administrativos", riseOnHover: true, interactive: true});
admin_piso1.push(admin)
var salaA015 = L.marker([2493,3475], {title:"Sala A-015", riseOnHover: true, interactive: true});
salas_piso1.push(salaA015)
var salaA014 = L.marker([2388,3498], {title:"Sala A-014", riseOnHover: true, interactive: true});
salas_piso1.push(salaA014)
var salaA013 = L.marker([2265,3526], {title:"Sala A-013", riseOnHover: true, interactive: true});
salas_piso1.push(salaA013)
var salaA012 = L.marker([2129,3555], {title:"Sala A-012", riseOnHover: true, interactive: true});
salas_piso1.push(salaA012)


//! Placeholder para testeo, eventualmente se borrará/cambiará
var gimnasio = L.marker([2427,1605], {title:"Gimnasio", riseOnHover: true, interactive: true});
salas_piso1.push(gimnasio)

//Le asigna un popup con su respectivo nombre
//tambien las agrega a un layerGroup para poder esconder todas las salas de una
//hay que hacer uno de estos por grupo de marcadores, digase salas, baños, oficinas etc

for (var k = 0; k < pisos.length; k++) {
    var curr_piso = pisos[k];
    
    for (var j = 0; j < curr_piso.length; j++) {
        var curr_markers = curr_piso[j]
        
        for (var i = 0; i < curr_markers.length; i++) {
            var currentMarker = curr_markers[i];
            
            console.log(currentMarker)

            currentMarker.bindPopup(currentMarker.options.title);
            currentMarker.on('mouseover', function () {this.openPopup();});
            currentMarker.on('mouseout', function () {this.closePopup();});
            //TODO
            //currentMarker.on('click', function () {alert('bruh');});
        }
    }
}



console.log(pisos)





var salas_piso1_layer = L.layerGroup(salas_piso1)
salas_piso1_layer.addTo(map)

var baños_piso1_layer = L.layerGroup(baños_piso1)
baños_piso1_layer.addTo(map)

var admin_piso1_layer = L.layerGroup(admin_piso1)
admin_piso1_layer.addTo(map)

var deptos_piso1_layer = L.layerGroup(deptos_piso1)
deptos_piso1_layer.addTo(map)


var piso1_layer = L.layerGroup(salas_piso1.concat(admin_piso1, deptos_piso1, baños_piso1))


var salas_piso2_layer = L.layerGroup(salas_piso2)
salas_piso2_layer.addTo(map)


var piso2_layer = L.layerGroup(salas_piso2)