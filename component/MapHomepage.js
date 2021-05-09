import * as React from 'react';
import {useState, useEffect, useMemo, useRef} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer,FullscreenControl,NavigationControl,GeolocateControl} from 'react-map-gl';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer,
    HeroTitle,
    HeroText,
    HeroBtn,
    ArrowForward,
    ArrowRight,
    TextContent}   from '../styles/ClusterMap.modules.js';
import Axios from "axios";
import styles from "../styles/MapHome.module.css"
import Link from 'next/link'
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw'; // Set your mapbox token here


export const MapHomepage = (props) => { 
  const { data } = props

  const [viewport, setViewport] = useState({
    latitude: -37.4903228,
    longitude: 144.1233123,
    zoom: 2,
    bearing: 0,
    pitch: 0
  });

  // const [data, setData] = useState([]);
  // useEffect(async () => {

  //   const result = await Axios.get(
  //     `https://ie-animal-api.herokuapp.com/api3/rabbit`
  //   );
  //   setData(result.data);
  //   //test print it out 
  //   // console.log(result.data.map(animal => (animal.lat)));

  // }, []);  
   
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

       // funscreen control 
       const fullscreenControlStyle= {
        right: 10,
        top: 130
      };
    // nativavtion control 
    const navControlStyle= {
        right: 10,
        top: 10
      };
      //geolocate control
      const geolocateControlStyle= {
        right: 10,
        top: 100
      };

  return (
    <div className={styles.backgroundDiv} id='map'> 
     <div className={styles.container}> 
       <div className={styles.containerText}> 
        <div className={styles.containerContent}> 
             <h2>  Do you want to explore more ? </h2>
         </div>
         <Link href='/map'> 
                <button className={styles.button}>
                    Start
                </button>
                </Link>
       </div>
        
       <div className={styles.containerMap}>        
      <MapGL
        {...viewport}
        width="100%"
        height="90vh"
         mapStyle="mapbox://styles/mapbox/dark-v9"
        //mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={viewport => {
                setViewport(viewport);
               }

        }
        mapboxApiAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        scrollZoom= {false}
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
        <TextContent>
         
          <HeroText>
            Distribution of Pest Animals in VIC.
          </HeroText>
          {/* <HeroBtn>
          <a href='#impact'> <Button primary dark to="Info" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button> </a> 
          </HeroBtn> */}
          {/* <a href='#impact'><BiDownArrowCircle size={40} color={'green'}/></a>  */}
          </TextContent>
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navControlStyle} />

          <GeolocateControl
           style={geolocateControlStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          fitBoundsOptions={{maxZoom: 8}}
          showUserLocation={false}
          label="Zoom In"
          // auto
          />
      </MapGL>
      </div>
      </div>
      </div>
  );
};
