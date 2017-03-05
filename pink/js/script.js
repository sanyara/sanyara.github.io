var center = {lat: 59.9362, lng: 30.3213};
var icon = '../img/icon-map-marker.svg'
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        scrollwheel: false,
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true
    });
    
    var marker = new google.maps.Marker({
        position: {lat: 59.9362, lng: 30.3213},
        map: map,
        icon: icon,
        title: 'Click to zoom'
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

var mainNav = document.querySelector('.main-nav');
var mainNavBtn = document.querySelector('.main-nav__btn');
var pageHeader = document.querySelector('.page-header__wrapper');
mainNav.classList.remove('main-nav--nojs');

mainNavBtn.addEventListener('click', function() {
    if(mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
        pageHeader.classList.add('page-header__wrapper--opened');
    }else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        pageHeader.classList.remove('page-header__wrapper--opened')
    }
});

var sendFormBtn = document.getElementById('sendFormBtn');
var storyFormInputs = document.querySelectorAll('.story-form input:not([type="checkbox"]):not([type="radio"])');
var popupOk = document.querySelector('.form-popup--ok');
var popupFailure = document.querySelector('.form-popup--failure');
var closeBtns = document.querySelectorAll('.form-btn--close');
function validate() {
    for(var i = 0; i < storyFormInputs.length; i++) {
 
        if(!storyFormInputs[i].value) {
            popupFailure.classList.add('form-popup--show');
            return false;
        }
    }   
}
if(popupOk) {
    popupOk.classList.add('form-popup--show');
    for(var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', function() {
            popupOk.classList.remove('form-popup--show');
            popupFailure.classList.remove('form-popup--show');
        });
    }
}
