import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import axios from 'axios';

const stamenTonerTiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';




class AppMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    
    componentDidMount() {
        axios.get('http://199.101.49.43/locations/')
        .then(res => {
            const posts = res.data.map(obj => obj);
            this.setState({ posts });
        });
    }

    render() { 
        return (
        	<Map  className="markercluster-map" center={[42.670083, -73.781158]} zoom={11} maxZoom={18}>
                <TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles}/>
                
                <MarkerClusterGroup
                    markers={this.state.posts.map(post => [{'lat': post.latitude, 'lng': post.longitude}][0])}
                    wrapperOptions={{enableDefaultStyle: true}}
                />

            </Map>   
        );
    }
}

export default AppMap;



    