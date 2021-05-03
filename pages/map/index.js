import { Layout } from "../../component/Layout";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl} from "react-map-gl";
export default function map() {
    const [viewport, setViewport] = useState({
        latitude: -38.04569,
        longitude: 145.40121,
        width: "100%",
        height: "92vh",
        zoom: 10
      });
      //navigationControl style
      const navControlStyle= {
        right: 10,
        top: 40
      };
      //ScaleControl style
      const scaleControlStyle= {
        right: 20,
        bottom: 130
      };
      //geoLocation Control 
      //can get the user's geolocation and display it on Map
      const geolocateControlStyle= {
        right: 10,
        top: 10,
      };
    return(
        <Layout> 
            <ReactMapGL 
             {...viewport} 
             mapboxApiAccessToken="pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw"
             mapStyle="mapbox://styles/chengguangli/cko7r6w904er817msd1n9f8ao"
             onViewportChange={viewport => {
                setViewport(viewport);
              }}
             >
             <NavigationControl style={navControlStyle} />
             <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />

             <GeolocateControl
              style={geolocateControlStyle}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
              fitBoundsOptions={{maxZoom: 10}}
              label={'My Current Location'}
              showUserLocation={true}
               auto={true}
             />
             </ReactMapGL>

       </Layout>
    );

} 