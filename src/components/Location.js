import L from 'leaflet';

const Location = new L.Icon({
    iconUrl: require('../images/icon-location-yellow.svg'),
    iconRetinaUrl: require('../images/icon-location-yellow.svg'),
    iconSize: [30, 41],
    iconAnchor: [15, 41],
    shadowSize: null,
    shadowAnchor: null,
    popupAnchor:  null
});

export { Location };