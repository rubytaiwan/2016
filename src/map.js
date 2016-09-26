/**
 * Map
 */

const location = {lat: 25.0423, lng: 121.61455};

const contentString = `
    <div class="map-content">
        <h3 class="map-content__title">
            Academia Sinica, Taiwan<br />
            中央研究院 學術活動中心
        </h3>
        <p class="map-content__address">
            128 Academia Road, Section 2<br />
            Nankang, Taipei 11529, Taiwan
        </p>
        <p class="map-content__address is-zh">台北市南港區研究院路二段128號</p>
    </div>
    `

export default function initMap(selector) {
    let $map = document.querySelector(selector)

    let map = new google.maps.Map($map, {
        center: location,
        zoom: 15,
        streetViewControl: false,
        scrollwheel: false,
    });

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    let marker = new google.maps.Marker({
        position: location,
    });

    map.panBy(0,-100);
    marker.setMap(map);

    infowindow.open(map, marker);

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
