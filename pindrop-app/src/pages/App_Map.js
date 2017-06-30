
import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';



const stamenTonerTiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';



const markers = [
    {lat: 51.785039, lng: -2.275221},
    {lat: 52.2297, lng: 21.0122},
    {lat: 51.5074, lng: -0.0901}
  ];


class AppMap extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    
    return (
            <Map  className="markercluster-map" center={[51.785039, -2.275221]} zoom={10} maxZoom={18}>
                <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles}/>
                <MarkerClusterGroup
                    markers={markers}
                    wrapperOptions={{enableDefaultStyle: true}}
                />
            </Map>       
    );
  }
}

export default AppMap;

