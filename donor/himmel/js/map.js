(function(){

ymaps.ready(init);
var myMap, 
    myPlacemark,
    htmlid = "map";

function init(){
  //http://dimik.github.io/ymaps/examples/location-tool/



    myMap = new ymaps.Map(htmlid, {
        center: [55.669869, 37.621546],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'  //?
    }); 





    myPlacemark2 = new ymaps.Placemark( [55.669869, 37.632646] , {
        hintContent: '',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref:  'img/map/map_icon.png',
        // Размеры метки.
        iconImageSize: [40, 47],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-20, -47  ]
    });
  
  
  
  //event 
  myPlacemark2.events
    // Можно слушать сразу несколько событий, указывая их имена в массиве.
    .add(['mouseenter', 'mouseleave'], function (e) {
        var target = e.get('target'),
            type = e.get('type');
        if (typeof target.getGeoObjects != 'undefined') {
            // Событие произошло на кластере.
            if (type == 'mouseenter') {
                target.options.set('preset', 'islands#invertedPinkClusterIcons');
                alert ('Навели на иконку');
            } else {
                target.options.set('preset', 'islands#invertedVioletClusterIcons');
            }
        } else {
            // Событие произошло на геообъекте.
            if (type == 'mouseenter') {
                
                target.options.set('iconImageHref', 'img/map/map_icon_brigh.png');
            } else {
                target.options.set('iconImageHref', 'img/map/map_icon.png');
            }
        }
    });





    //add
  myMap.geoObjects.add(myPlacemark2);



  var myGeoObject = new ymaps.GeoObject({
  // Тип геометрии - точка.
  type: 'Point',
  // Координаты точки.
  coordinates: [55.76, 37.64]
});
myMap.geoObjects.add(myGeoObject);




}//init
    
    
})();