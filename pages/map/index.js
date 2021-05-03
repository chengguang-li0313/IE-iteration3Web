import { Layout } from "../../component/Layout";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
export default function map() {
    const [viewport, setViewport] = useState({
        latitude: -38.04569,
        longitude: 145.40121,
        width: "100%",
        height: "92vh",
        zoom: 10
      });

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
      

             </ReactMapGL>

       </Layout>
    );

} 