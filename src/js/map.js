const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const token = 'pk.eyJ1IjoibGlsaXRoNmxhbWJlciIsImEiOiJja3R3dHR2NnIwbmx1MnBwamNjbDh5aGp1In0.wgqCLbHhiP1YeFMJeriXCQ';

function mapbox() {
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-73.952332, 40.746399],
        zoom: 16
    });

    const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'address': '47-02 Vernon Blvd, Long Island City',
                    'phone': '+17187292800'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-73.95341260432426, 40.74530722337626]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'address': '11-18 46th Rd, Queens',
                    'phone': '+17187294602'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-73.95017550643627, 40.7455698945471]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'address': '11-49 47th Ave, Long Island City',
                    'phone': '+17187342788'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-73.94907043625668, 40.74477331320747]
                }
            }
        ]
    };

    for (const marker of geojson.features) {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url('./img/icons/marker-icon.png')`;
        el.style.width = `47px`;
        el.style.height = `47px`;
        el.style.backgroundSize = '100%';

        const popupHTML = `
            <p class="address">${marker.properties.address}</p>
            <a class="tel" href="tel:${marker.properties.phone}">${marker.properties.phone}</a>
            <dl>
                <dt class="days">Monday - Saturday</dt>
                    <dd class="hours">12:00 am - 10:30 pm</dd>
                    <dt class="days">Sunday</dt>
                    <dd class="hours">12:00 am - 9:00 pm</dd>
                </dt>
            </dl>
        `;

        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(popupHTML))
            .addTo(map);
    }


    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
}

mapbox();