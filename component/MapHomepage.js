import * as React from 'react';
import {useState, useEffect, useMemo, useRef} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer} from 'react-map-gl';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from '../styles/ClusterMap.modules.js';
import Axios from "axios";
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw'; // Set your mapbox token here


export const MapHomepage = () => { 

  const [viewport, setViewport] = useState({
    latitude: -37.4903228,
    longitude: 144.1233123,
    zoom: 6,
    bearing: 0,
    pitch: 0
  });


  
  const [data, setData] = useState([]);
  useEffect(async () => {

    const result = await Axios.get(
      `https://ie-animal-api.herokuapp.com/api3/rabbit`
    );
    setData(result.data);
    //test print it out 
    // console.log(result.data.map(animal => (animal.lat)));

  }, []);  
   
//   convert the array to geojson data 
   const makeGeoJson = (sourceData)=> {
     return{
       type: 'animalCollection',
       features: sourceData.map(feature => { 
         return {
             'type': "Feature",
              "properties":{
                  "id": feature.id,
                  "value": feature.scientificName,                  
              },
              "geometry":{
                  "type": "Point",
                  "coordinates": [feature.lon,feature.lat]
              }
         }
         
       }) 

     }
   };

  const newGeoJSONData = makeGeoJson(data);
  console.log(newGeoJSONData);

  /////////////////////////////////////////////////
  const mapRef = useRef(null);

  const onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.id;

    const mapboxSource = mapRef.current.getMap().getSource('animal');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      setViewport({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };



  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="90vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        // onClick={onClick}
        ref={mapRef}
      >
       <Source
          id="animal"
          type="geojson"
          data={newGeoJSONData}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={10}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>

      </MapGL>

    </>
  );
};
