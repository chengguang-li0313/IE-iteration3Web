import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl,FlyToInterpolator} from "react-map-gl";
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

       <input type="image" src={ani.image} width="20px" height="20px" onClick={e => {
                e.preventDefault();
                setSelectedPark(ani);
              }}>
        
        </input>

</Marker>
  )
), [props.data]);
   //pop up message 
   const [selectedPark, setSelectedPark] = useState(null);

   useEffect(() => {
     const listener = e => {
       if (e.key === "Escape") {
         setSelectedPark(null);
       }
     };
     window.addEventListener("keydown", listener);
 
     return () => {
       window.removeEventListener("keydown", listener);
     };
   }, []);
 
 const pops = React.useMemo(() => selectedPark ? (
  <Popup
    latitude={selectedPark.lat}
    longitude={selectedPark.lon}
    onClose={() => {
      setSelectedPark(null);
    }}
  >
    <div>
      <h5>Name:  {selectedPark.scientificName}</h5>
      <p>Number:  {selectedPark.count}</p>
      <p>Local Gov:  {selectedPark.localGov} </p>
      <p>Regions:  {selectedPark.regions} </p>
      <p>Geolodation:  {selectedPark.lat}, {selectedPark.lon}</p>
    </div>
  </Popup>
) : null,[selectedPark] );
  
    
    //map config
    const [viewport, setViewport] = useState({
        latitude: -37.7277556,
        longitude: 145.1733946,

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
      zoom: 9,
      transitionInterpolator: new FlyToInterpolator({speed: 1.2}),
      transitionDuration: 'auto'
    });
  }, []);

  
   //dark style of the map page
  //mapbox://styles/chengguangli/cko7r6w904er817msd1n9f8ao
      //current style
     // 
   
 

    return (
      <>
        <ReactMapGL 
         {...viewport} 
         {...settings}
         mapboxApiAccessToken="pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw"
         mapStyle="mapbox://styles/chengguangli/ckobkmn3t16m917p8ajuissot"
         onViewportChange={viewport => {
            setViewport(viewport);
          }}
          onInteractionStateChange={s => setInteractionState({...s})}
          width="100%"
          height="100%"

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

        {/* pop up message  */}
        {pops}

       
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