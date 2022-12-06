var popup = L.popup();

function getlatlng(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

var pointer_active = false;
L.easyButton('bi bi-cursor-fill', function(e) {
    
    if (pointer_active) {
        map.off('click', getlatlng);
        pointer_active = false;
        swal({title:"Pointer deactivated"})
    } else {
        map.on('click', getlatlng);
        pointer_active = true;
        swal({title:"Pointer activated"})
    };    
}).addTo(map)