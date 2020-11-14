$(document).ready(function () {
    AOS.init();
    
    const menuSlider = $('#menu-slider').bxSlider({
        pager: false,
        controls: false
    });

    $('#nav-trigger').click(function (e) { 
        e.preventDefault();
        $('#main-nav').toggleClass('active');
        
    });

    $('#menu-prev').click(function () {
        menuSlider.goToPrevSlide();
        return false;
    });
    $('#menu-next').click(function () {
        menuSlider.goToNextSlide();
        return false;
    });

    drawMap();
});

let nav = $('#top-nav'),
    sticky = nav.offset().top;

function navScroll() {
    if (window.pageYOffset > sticky) {
        nav.addClass('sticky');
    } else {
        nav.removeClass('sticky');
    }
}
$(window).scroll(function () {
    navScroll();
});

function drawMap() {
    let map = L.map('map', {
        scrollWheelZoom: false,
        zoomsliderControl: true,
        zoomControl: false
    }).setView([40.746399, -73.952332], 16);

    let myFilter = [
        'grayscale:90%',
        'contrast:70%',
        'brightness:110%'
    ];

    L.tileLayer = L.tileLayer.colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        filter: myFilter
    }).addTo(map);

    L.control.pan().addTo(map);

    let mapIcon = L.icon({
        iconUrl: './img/marker-icon.png',
        shadowUrl: './img/marker-shadow.png',

        iconSize: [47, 47], // size of the icon
        shadowSize: [67, 67], // size of the shadow
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0], // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([40.746585, -73.951752], {
        icon: mapIcon
    }).addTo(map);

}