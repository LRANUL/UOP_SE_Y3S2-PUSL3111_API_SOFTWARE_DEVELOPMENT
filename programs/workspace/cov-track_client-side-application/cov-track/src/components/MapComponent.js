import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as mapData from "../../data/mapData.json";
import { useStore } from '../stores/store';
import "../styles/map.css";
import { Image } from 'react-native';

export const MapComponent = ({ source }) => {
    const geoData = useStore(state => state.geoData);
    const setGeoData = useStore((state) => state.setGeoData);

    function SuccessfulLookup(pos) {
        var crd = pos.coords;
        setGeoData(crd);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        console.log(geoData);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    window.navigator.geolocation
        .getCurrentPosition(SuccessfulLookup, console.log);

    const position = [geoData.latitude, geoData.longitude];
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('lat: ' + geoData.latitude + ', ' + 'long: ' + geoData.longitude);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // Hook code
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "100%",
        height: "700px",
        zoom: 10
    });
    const [selectedSpot, setSelectedSpot] = useState(null);
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={'pk.eyJ1IjoidGV0aGVyaW5vIiwiYSI6ImNrbnRtenU2dTA0bGoyb29jazc0a2U0bHgifQ.INqUlvvCaUFnKFXA060yIA'}
                mapStyle="mapbox://styles/tetherino/cknlxdf5437tt17mi7gwiux8v"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {mapData.features.map((jsonObj) => (
                    <Marker
                        key={jsonObj.properties.PARK_ID}
                        latitude={jsonObj.geometry.coordinates[1]}
                        longitude={jsonObj.geometry.coordinates[0]}
                    >
                        <button class="marker-btn" onClick={(e) => {
                            e.preventDefault();
                            setSelectedSpot(jsonObj);
                        }}>
                            <img src='http://maps.google.com/mapfiles/kml/pal4/icon17.png' />
                            {/* <Image source={require('../assets/images/marker.svg')} /> */}
                        </button>
                    </Marker>
                ))}
            </ReactMapGL>
        </div>
    );
}
