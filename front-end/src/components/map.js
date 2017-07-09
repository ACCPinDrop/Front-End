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
        const gourpResponse = await makeRequest(events[i].event_group);
        const group = await gourpResponse.json();
        const organizers = [];              
        const categories = [];  

        for (var u=0; u < group.group_organizers.length; u++){
            const organizerResponse = await makeRequest(group.group_organizers[u]);
            const organizer = await organizerResponse.json();
            organizers.push(organizer);
        }
        for (var o=0; o < group.group_categories.length; o++){
            const categoryResponse = await makeRequest(group.group_categories[o]);
            const category = await categoryResponse.json();
            categories.push(category);
        }  
        combo.push({'event': events[i], 'location': location, 'group': group, 'organizers': organizers, 'categories': categories});
    }
    console.log(combo);
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
        // Define object with Leaflet.markercluster options
        const markerclusterOptions = {
            showCoverageOnHover: false,
            spiderfyDistanceMultiplier: 3,
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
        function getLeafletPopup(eventName, groupName) {
            return L.popup({minWidth: 200, closeButton: true})
            .setContent(`
                <div>
                    <h3>${ eventName }</h3>
                    <p>I am a ${ groupName } popup.</p>
                </div>
            `);
        }

        let markers = this.state.data.map((data) => {
            return {
                'lat': data.location.latitude, 
                'lng': data.location.longitude,
                popup: getLeafletPopup(data.event.event_name, data.group.group_name)
            }
        });

        return (
            <div>
                <Map  className="markercluster-map" center={[42.670083, -73.781158]} zoom={11} maxZoom={18}>
                    <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MarkerClusterGroup
                            markers={markers}
                            options={markerclusterOptions}
                            wrapperOptions={{enableDefaultStyle: true}}
                        />
                </Map>
            </div>
        );
    }
}

export default AppMap;