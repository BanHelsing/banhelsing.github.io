//Marcadores del Layer General
edificios= []
const EdificioA = L.marker([0,0], {title:"Edificio A", riseOnHover: true, interactive: true});
edificios.push(EdificioA);
const EdificioB = L.marker([1,0], {title:"Edificio B", riseOnHover: true, interactive: true});
edificios.push(EdificioB);
const EdificioC = L.marker([2,0], {title:"Edificio C", riseOnHover: true, interactive: true});
edificios.push(EdificioC);
const EdificioF= L.marker([3,0], {title:"Edificio D", riseOnHover: true, interactive: true});
edificios.push(EdificioF);
const EdificioE= L.marker([4,0], {title:"Edificio F", riseOnHover: true, interactive: true});
edificios.push(EdificioE);
const EdificioConstruccion= L.marker([5,0], {title:"Edificio Construccion", riseOnHover: true, interactive: true});
edificios.push(EdificioConstruccion);
//Imprime en consola los edificisios Obtenidos
console.log(edificios);
//Definicion de Layer General
const General_Layer = L.layerGroup(edificios);