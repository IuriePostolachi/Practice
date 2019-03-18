function initMap() {
    var uluru = {
        lat: 55.958563,
        lng: 37.245993
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}