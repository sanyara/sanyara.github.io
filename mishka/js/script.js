var markerImg = '../img/icon-map-pin.svg';
//google map custom marker icon - .png fallback for IE
var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var markerImg = (is_internetExplorer11) ? '../img/marker.png' : '../img/icon-map-pin.svg';

var center = {lat: 59.93893743, lng: 30.32293928};
function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.93893743, lng: 30.32293928},
    scrollwheel: false,
    disableDefaultUI: true,
    zoomControl: true,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: {lat: 59.93858809, lng: 30.32291782},
    map: map,
    title: 'mishka',
    icon: markerImg
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
}
var lastCenter = {lat: 59.93858809, lng: 30.32291782};

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});