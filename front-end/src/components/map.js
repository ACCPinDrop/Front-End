import React, { Component } from 'react';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';


function getEvents() {
    return fetch('http://199.101.49.43/events/');
}
function makeRequest(url){
    return fetch(url);
}

async function getCombo() {
    const eventsResponse = await getEvents();
    const events = await eventsResponse.json();
    const combo = [];
    for (var i=0; i < events.length; i++) {
        const locationResponse = await makeRequest(events[i].event_location);
        const location = await locationResponse.json(); 
        combo.push({'event': events[i], 'location': location});
    }
    // console.log(combo);
    return combo;
}


class AppMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {

    }
    componentDidMount() {
        async function req () {
            return await getCombo();          
        };

        req().then((res) => {
            this.setState({data: res});
        });

    }



    render() {  
        const wrapperOptions = {
            enableDefaultStyle: true,
            disableDefaultAnimation: false,
            removeDuplicates: true
        };
        // Define object with Leaflet.markercluster options
        const markerclusterOptions = {
            showCoverageOnHover: true,
            spiderfyDistanceMultiplier: 2,
            // Setting custom icon for clustere group
            // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
            iconCreateFunction: (cluster) => {
                return L.divIcon({
                html: `<span>${cluster.getChildCount()}</span>`,
                className: 'marker-cluster-custom',
                iconSize: L.point(40, 40, true)
                });
            },
        };

        // that function returns Leaflet.Popup
        function getLeafletPopup(event_name, event_start_time, event_date, event_location) {
            return L.popup({minWidth: 200, closeButton: true})
            .setContent(`
                <div id="popupDiv">
                    <h4 id="popupName"><a href="/event/${ event_name }:$${ event_location }:$${ event_date }:$${ event_start_time }" 
                    id="popupLink">${ event_name }</a></h4>
                    <p>${ event_location }</p>
                    <p>Date: ${ event_date }</p>
                    <p>Start Time: ${ event_start_time }</p>
                </div>
            `);
        }

        let markers = this.state.data.map((data) => {
            return {
                'lat': data.location.latitude, 
                'lng': data.location.longitude,
                popup: getLeafletPopup(data.event.event_name, data.event.event_start_time, data.event.event_date, data.location.address)
            }
        });

        return (
            <div>
                <Map  className="markercluster-map" center={[42.675888, -73.817893]} zoom={12} maxZoom={18}>
                    <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MarkerClusterGroup
                            markers={markers}
                            options={markerclusterOptions}
                            // onMarkerClick={(marker) => console.log(marker)}
                            // onClusterClick={(cluster) => console.log(cluster, cluster.getAllChildMarkers())}
                            // onPopupClose={(popup) => console.log(popup, popup.getContent())}
                            wrapperOptions={wrapperOptions}
                        />
                </Map>
            </div>
        );
    }
}

export default AppMap;