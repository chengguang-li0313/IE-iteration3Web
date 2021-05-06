import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl,FlyToInterpolator} from "react-map-gl";
import React, { useState, useEffect,useCallback,useRef} from "react";
import ControlPanel from "../styles/ControlPan.module.js";
import style from "../styles/MapButton.module.scss";
import CameraPanel from '../styles/Camera.module.js';
import Geocoder from "react-map-gl-geocoder";
import searchStyle from "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export const MapSection = (props) => {
     const { data } = props
     //token 
     const MAPBOX_TOKEN = "pk.eyJ1IjoiY2hlbmdndWFuZ2xpIiwiYSI6ImNrZWlhenhpczBpbTMycW9obWRqMnUyZm0ifQ.Tn7MwEjw8fxCGFNyJtqWsw";
       //markers
  const markers = React.useMemo(() => data.map(ani => (
    <Marker
     key={ani.id}
    latitude={ani.lat}
    longitude={ani.lon}
  > 

       <input type="image" src={ani.image} width="30px" height="30px" onClick={e => {
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
        latitude: -37.6706555,//-37.7277556, 
        longitude: 144.9579117,//145.1733946,
        bearing: 5,
        pitch: 60,
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
      transitionInterpolator: new FlyToInterpolator({speed: 0.5}),
      transitionDuration: 'auto'
    });
  }, []);

  
   //dark style of the map page
  //mapbox://styles/chengguangli/cko7r6w904er817msd1n9f8ao

  //Search function 
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
   // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
   const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );  
   
 

    return (
      <>
        <ReactMapGL 
         {...viewport} 
         {...settings}
         ref={mapRef}
         mapboxApiAccessToken={MAPBOX_TOKEN}
         mapStyle="mapbox://styles/chengguangli/ckobkmn3t16m917p8ajuissot"
        //  onViewportChange={viewport => {
        //     setViewport(viewport);
        //   }}
         onViewportChange={handleViewportChange}
          onInteractionStateChange={s => setInteractionState({...s})}
          width="100%"
          height="100%"
          
         >
         {/* <NavigationControl style={navControlStyle} />
         <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} /> */}


         
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
        

        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />

         </ReactMapGL>


    </>


    );

};