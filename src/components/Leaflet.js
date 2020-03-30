import React from 'react';
import BreweriesList from './BreweriesList';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Location } from './Location';

class Leaflet extends React.Component {
  render() {
    const accessToken = 'pk.eyJ1IjoiYWxlY2hlcnJ5eSIsImEiOiJjanVrZjg2b3cwN2IyM3ltcDB2eTd2amJiIn0.vB56jfo1YpJoBZqnY3Y-Ng';
    let stamenTonerTiles = 'https://api.mapbox.com/styles/v1/alecherryy/cjysuxg450pv91cmxgsplvsjh/tiles/256/{z}/{x}/{y}?access_token=' + accessToken;
    const stamenTonerAttr = 'tapsie.io';
    const mapCenter = [47.606838, -122.340022];
    const zoomLevel = 10;

    var markers = BreweriesList.map(function(marker) {
      return (
        <Marker icon={ Location } key={marker.id} position={marker.coordinates} />
      );
    });

    return (
      <div className="leaflet__container">
        <Map className="leaflet__map" maxZoom={20} center={mapCenter} zoom={zoomLevel}>
          <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
          {markers}
        </Map>
      </div>
    )
  }
}

export default Leaflet;