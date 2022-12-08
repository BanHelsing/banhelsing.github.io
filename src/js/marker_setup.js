// Array markers
var markers = []

// Plantilla Marker 
const VAR_MARCADOR = L.marker([0,0], {title:"Sala N123", riseOnHover: true, interactive: true});
markers.push(VAR_MARCADOR);
// ver el resto para usar de referencia);



//Aqui vamos separando los marcadores por tipo, los vamos creando cuando se necesiten
//asi podemos tener un boton para mostrar solo salas, solo banos y asi
salas_piso1 = [];
salas_piso2 = [];
banos_piso1 = [];
admin_piso1 = [];
deptos_piso1 = [];
labs_piso1 = [];
kiosco_piso1 = [];

salas = [salas_piso1, salas_piso2]

piso1 = [salas_piso1,banos_piso1,admin_piso1,deptos_piso1,labs_piso1,kiosco_piso1];
piso2 = [salas_piso2];

pisos = [piso1, piso2];

//Se crean manualmente los marcadores (no hay otra forma de hacer esto)
//luego se agregan junto con un string que representa su nombre real a una lista de listas

//Edificio E Piso 2
const salaE001 = L.marker([2869, 653], {title:"Sala E-201", riseOnHover: true, interactive: true});
salas_piso2.push(salaE001);
const salaE002 = L.marker([2998, 624], {title:"Sala E-202", riseOnHover: true, interactive: true});
salas_piso2.push(salaE002);
const salaE003 = L.marker([3123, 593], {title:"Sala E-203", riseOnHover: true, interactive: true});
salas_piso2.push(salaE003);
const lab_metro = L.marker([3239,562], {title:"Laboratorio Metrología", riseOnHover: true, interactive: true});
salas_piso2.push(lab_metro);

//Edificio E piso 1
const LabAltaTension = L.marker([2743, 804], {title:"Laboratorio de Alta Tension", riseOnHover: true, interactive: true});
labs_piso1.push(LabAltaTension);

//Edificio A Piso 1
const dep_fis = L.marker([1281, 3355], {title:"Departamento de fisica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_fis)
const salaA016 = L.marker([1455,3359], {title:"Sala A-016", riseOnHover: true, interactive: true});
salas_piso1.push(salaA016)
const salaA004 = L.marker([1576,3332], {title:"Sala A-004", riseOnHover: true, interactive: true});
salas_piso1.push(salaA004)
const salaA005 = L.marker([1698,3311], {title:"Sala A-005", riseOnHover: true, interactive: true});
salas_piso1.push(salaA005)
const salaA006 = L.marker([1800,3288], {title:"Sala A-006", riseOnHover: true, interactive: true});
salas_piso1.push(salaA006)
const salaA007 = L.marker([1914,3256], {title:"Sala A-007", riseOnHover: true, interactive: true});
salas_piso1.push(salaA007)
const dep_mat = L.marker([1459, 3095], {title:"Departamento de Matematica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_mat)
const dep_eh = L.marker([1814, 3081], {title:"Departamento de Estudios humanisticos", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_eh)
const dep_qui = L.marker([1824, 2991], {title:"Departamento de Quimica", riseOnHover: true, interactive: true});
deptos_piso1.push(dep_qui)
const asem = L.marker([1521, 3646], {title:"ASEM", riseOnHover: true, interactive: true});
salas_piso1.push(asem)
const ingAmb = L.marker([1586, 3634], {title:"Ingieneria Civil Ambiental", riseOnHover: true, interactive: true});
deptos_piso1.push(ingAmb)
const salaA025 = L.marker([1662, 3617], {title:"Sala A-025", riseOnHover: true, interactive: true});
salas_piso1.push(salaA025)
const salaA026 = L.marker([1745, 3600], {title:"Sala A-026", riseOnHover: true, interactive: true});
salas_piso1.push(salaA026)
const salaA027 = L.marker([1820, 3579], {title:"Sala A-027", riseOnHover: true, interactive: true});
salas_piso1.push(salaA027)
const salaA028 = L.marker([1892, 3566], {title:"Sala A-028", riseOnHover: true, interactive: true});
salas_piso1.push(salaA028)
const salaA029 = L.marker([1968, 3547], {title:"Sala A-029", riseOnHover: true, interactive: true});
salas_piso1.push(salaA029)
const sala130B = L.marker([2057, 3528], {title:"Sala 130-B", riseOnHover: true, interactive: true});
salas_piso1.push(sala130B)
const banoMiA = L.marker([2058,3301], {title:"Baño", riseOnHover: true, interactive: true});
banos_piso1.push(banoMiA)
const salaA017 = L.marker([2000, 2989], {title:"Sala A-017", riseOnHover: true, interactive: true});
salas_piso1.push(salaA017)
const salaA001 = L.marker([2189,2950], {title:"Sala A-001", riseOnHover: true, interactive: true});
salas_piso1.push(salaA001)
const salaA002 = L.marker([2348,2917], {title:"Sala A-002", riseOnHover: true, interactive: true});
salas_piso1.push(salaA002)
const salaA003 = L.marker([2492,2887], {title:"Sala A-003", riseOnHover: true, interactive: true});
salas_piso1.push(salaA003)
const salaA008 = L.marker([2168,3264], {title:"Sala A-008", riseOnHover: true, interactive: true});
salas_piso1.push(salaA008)
const salaA009 = L.marker([2283,3237], {title:"Sala A-009", riseOnHover: true, interactive: true});
salas_piso1.push(salaA009)
const salaA010 = L.marker([2391,3228], {title:"Sala A-010", riseOnHover: true, interactive: true});
salas_piso1.push(salaA010)
const salaA011 = L.marker([2508,3204], {title:"Sala A-011", riseOnHover: true, interactive: true});
salas_piso1.push(salaA011)
const banoH = L.marker([2578,3123], {title:"Baño de Hombres", riseOnHover: true, interactive: true});
banos_piso1.push(banoH)
const banoM = L.marker([2605,3233], {title:"Baño de Mujeres", riseOnHover: true, interactive: true});
banos_piso1.push(banoM)
const bano2 = L.marker([2068,3574], {title:"Baño", riseOnHover: true, interactive: true});
banos_piso1.push(bano2)
const caja = L.marker([2744,3410], {title:"Caja de Pagos", riseOnHover: true, interactive: true});
admin_piso1.push(caja)
const PACE = L.marker([2653,3480], {title:"PACE", riseOnHover: true, interactive: true});
admin_piso1.push(PACE)
const DGIIP = L.marker([2603,3486], {title:"DGIIP/UCP", riseOnHover: true, interactive: true});
admin_piso1.push(DGIIP)
const admin = L.marker([2556,3461], {title:"Administrativos", riseOnHover: true, interactive: true});
admin_piso1.push(admin)
const salaA015 = L.marker([2493,3475], {title:"Sala A-015", riseOnHover: true, interactive: true});
salas_piso1.push(salaA015)
const salaA014 = L.marker([2388,3498], {title:"Sala A-014", riseOnHover: true, interactive: true});
salas_piso1.push(salaA014)
const salaA013 = L.marker([2265,3526], {title:"Sala A-013", riseOnHover: true, interactive: true});
salas_piso1.push(salaA013)
const salaA012 = L.marker([2129,3555], {title:"Sala A-012", riseOnHover: true, interactive: true});
salas_piso1.push(salaA012)

//Edificio B
const labminas = L.marker([2980,1519], {title:"Laboratorio de Ing. civil en Minas", riseOnHover: true, interactive: true});
labs_piso1.push(labminas);
const labquimica = L.marker([3466,1344], {title:"Laboratorio de Quimica", riseOnHover: true, interactive: true})
labs_piso1.push(labquimica);
const labprocesos = L.marker([3393,1076], {title:"Laboratorio de Procesos", riseOnHover: true, interactive: true})
labs_piso1.push(labprocesos);
const labinfo = L.marker([3084,1805], {title:"Laboratorio de informatica (LDS)", riseOnHover: true, interactive: true})
labs_piso1.push(labinfo);

const deptoarqui = L.marker([3680,2102], {title:"Departamento de Arquitectura", riseOnHover: true, interactive: true})
deptos_piso1.push(deptoarqui);

const audi = L.marker([3488,2040], {title:"Sala B-022 (Auditorio)", riseOnHover: true, interactive: true})
salas_piso1.push(audi)
const salab003 = L.marker([3882,2044], {title:"Sala B-003", riseOnHover: true, interactive: true})
salas_piso1.push(salab003)
const salab004 = L.marker([3848,1918], {title:"Sala B-004", riseOnHover: true, interactive: true})
salas_piso1.push(salab004)
const salab005 = L.marker([3844,1810], {title:"Sala B-005", riseOnHover: true, interactive: true})
salas_piso1.push(salab005)
const salab006 = L.marker([3820,1700], {title:"Sala B-006", riseOnHover: true, interactive: true})
salas_piso1.push(salab006)
const salab007 = L.marker([3804,1592], {title:"Sala B-007", riseOnHover: true, interactive: true})
salas_piso1.push(salab007)
const salab008 = L.marker([3756,1482], {title:"Sala B-008", riseOnHover: true, interactive: true})
salas_piso1.push(salab008)
const salab009 = L.marker([3764,1314], {title:"Sala B-009", riseOnHover: true, interactive: true})
salas_piso1.push(salab009)
const salab010 = L.marker([3718,1206], {title:"Sala B-010", riseOnHover: true, interactive: true})
salas_piso1.push(salab010)
const salab038 = L.marker([3176,1606], {title:"Sala B-038", riseOnHover: true, interactive: true})
salas_piso1.push(salab038)
const salab049 = L.marker([3361,1579], {title:"Sala B-049", riseOnHover: true, interactive: true})
salas_piso1.push(salab049)
const salab036 = L.marker([3098,1633], {title:"Sala B-036", riseOnHover: true, interactive: true})
salas_piso1.push(salab036)
const salab033 = L.marker([3098,1638], {title:"Sala B-033", riseOnHover: true, interactive: true})
salas_piso1.push(salab033)
const salab032 = L.marker([3026,1655], {title:"Sala B-032", riseOnHover: true, interactive: true})
salas_piso1.push(salab032)

const banoB = L.marker([3611,1670], {title:"Baño", riseOnHover: true, interactive: true})
banos_piso1.push(banoB)
//Edificio C
const fablab = L.marker([2066,2765], {title:"FabLab", riseOnHover: true, interactive: true});
salas_piso1.push(fablab);
const deptoingdp = L.marker([1970,2785], {title:"Departamento de Ing. DP", riseOnHover: true, interactive: true});
deptos_piso1.push(deptoingdp);
const kiosco1 = L.marker([1824,2776], {title:"Kiosco", riseOnHover: true, interactive: true});
kiosco_piso1.push(kiosco1);//cambiar por el nombre del negocio del tio y la tia :D

//Edificio F Piso 1
const auditorio = L.marker([2684,2856], {title:"Auditorio", riseOnHover: true, interactive: true});
salas_piso1.push(auditorio);
const bano_F1 = L.marker([2700,3040], {title:"Baño", riseOnHover: true, interactive: true});
banos_piso1.push(bano_F1);
const banoD_F1 = L.marker([2724,3060], {title:"Baño", riseOnHover: true, interactive: true});
banos_piso1.push(banoD_F1);
const comedor = L.marker([2780,2336], {title:"Comedor", riseOnHover: true, interactive: true});
salas_piso1.push(comedor);


//Edificio CIAC por colocarle un nombre
const CIAC = L.marker([4089,2851], {title:"CIAC", riseOnHover: true, interactive: true});
salas_piso2.push(CIAC);
const NOAC = L.marker([4102,2929], {title:"NOAC", riseOnHover: true, interactive: true});
salas_piso1.push(NOAC);
const salaB014 = L.marker([3992,2536], {title:"Sala B-014", riseOnHover: true, interactive: true});
salas_piso1.push(salaB014);
const salaB015 = L.marker([3972,2442], {title:"Sala B-015", riseOnHover: true, interactive: true});
salas_piso1.push(salaB015);
const salaB001 = L.marker([3938,2283], {title:"Sala B-001", riseOnHover: true, interactive: true});
salas_piso1.push(salaB001);
const salaB002 = L.marker([3922,2204], {title:"Sala B-002", riseOnHover: true, interactive: true});
salas_piso1.push(salaB002);
const bano_ciac1 = L.marker([3966,2369], {title:"Baño", riseOnHover: true, interactive: true});
banos_piso1.push(bano_ciac1); //cambiar nombre si es necesario

//! Placeholder para testeo, eventualmente se borrará/cambiará
const gimnasio = L.marker([2444,1725], {title:"Gimnasio", riseOnHover: true, interactive: true});
salas_piso1.push(gimnasio)

//Le asigna un popup con su respectivo nombre
//tambien las agrega a un layerGroup para poder esconder todas las salas de una
//hay que hacer uno de estos por grupo de marcadores, digase salas, banos, oficinas etc

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


const salas_piso1_layer = L.layerGroup(salas_piso1)

const banos_piso1_layer = L.layerGroup(banos_piso1)

const admin_piso1_layer = L.layerGroup(admin_piso1)

const deptos_piso1_layer = L.layerGroup(deptos_piso1)

const labs_piso1_layer = L.layerGroup(labs_piso1)

const kiosco_piso1_layer = L.layerGroup(kiosco_piso1)


const piso1_layer = L.layerGroup(salas_piso1.concat(admin_piso1, deptos_piso1, banos_piso1, labs_piso1,kiosco_piso1))
piso1_layer.addTo(map)




const salas_piso2_layer = L.layerGroup(salas_piso2)


const piso2_layer = L.layerGroup(salas_piso2)




const all_layer = L.layerGroup(piso1,piso2)