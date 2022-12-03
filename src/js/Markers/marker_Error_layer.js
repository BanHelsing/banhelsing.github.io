//Marcadores del Layer General
errorMarkers= []
const errorMark = L.marker([2200, 2680], {title:"Error de Carga", riseOnHover: true, interactive: true});
errorMarkers.push(errorMark);
//Imprime en consola los edificisios Obtenidos
console.log(errorMarkers);
//Definicion de Layer General
const General_Layer = L.layerGroup(errorMarkers);