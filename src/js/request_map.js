ymaps.ready(init);
function init() {
  var myMap;
  $('#map').hover(function () {
    if (!myMap) {
      myMap = new ymaps.Map('map', {
          center: [55.958563, 37.245993],
          zoom: 13
        }, {
          searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: [55.958563, 37.245993]
          },
          properties: {
            iconContent: 'Ремонт квартир',
            hintContent: 'Приходите к нам по всем вопросам ремонта'
          }
        }, {
          preset: 'islands#blackStretchyIcon'
        });
      myMap.geoObjects
        .add(myGeoObject)
    }
  });
};