import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl,Layer,FlyToInterpolator} from "react-map-gl";
import React, { useState, useEffect,useCallback} from "react";
import ControlPanel from "../styles/ControlPan.module.js";
import style from "../styles/MapButton.module.scss";
import CameraPanel from '../styles/Camera.module.js';

export const MapSection = (props) => {
     const { data } = props

       //markers
  const markers = React.useMemo(() => data.map(ani => (
    <Marker
     key={ani.id}
    latitude={ani.lat}
    longitude={ani.lon}
  >
     <img src={ani.image} alt="icon" width="20px" height="20px"></img>
</Marker>
  )
), [props.data]);
    
    //map config
    const [viewport, setViewport] = useState({
        latitude: -38.04569,
        longitude: 145.40121,

        zoom: 8
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
      // console.log(data);

      //limit the map interaction panel 
    const [interactionState, setInteractionState] = useState({});

  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    doubleClickZoom: true,
    // touchZoom: true,
    // touchRotate: true,
    // keyboard: true,
    // minZoom: 0,
    // maxZoom: 20,
    // minPitch: 0,
    // maxPitch: 85
  });

  const updateSettings = useCallback(
    (name, value) =>
      setSettings(s => ({
        ...s,
        [name]: value
      })),
    []
  );
   
   //camera panel
  const onSelectCity = useCallback(({longitude, latitude}) => {
    setViewport({
      longitude,
      latitude,
      zoom: 8,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    });
  }, []);

   

      //console.log(data);
    return (
      <>
        <ReactMapGL 
         {...viewport} 
         {...settings}
         mapboxApiAccessToken="pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw"
         mapStyle="mapbox://styles/chengguangli/cko7r6w904er817msd1n9f8ao"
         onViewportChange={viewport => {
            setViewport(viewport);
          }}
          onInteractionStateChange={s => setInteractionState({...s})}
          width="100%"
          height="80vh"

         >
         {/* <NavigationControl style={navControlStyle} />
         <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} /> */}



          {/* {data.map(ani => (
          <Marker
            key={ani.id}
            latitude={ani.lat}
            longitude={ani.lon}
          >
               <img src={ani.image} alt="icon" width="20px" height="20px"></img>
          </Marker>
        ))} */}
        {markers}

       
<div className={style.controlContainer}>  

  <ControlPanel 
    settings={settings}
    interactionState={interactionState}
    onChange={updateSettings}
     />
  </div>

   <div className={style.cameraContainer}> 
          <CameraPanel onSelectCity={onSelectCity} />

  </div>
         </ReactMapGL>


    </>


    );

};