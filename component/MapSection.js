import ReactMapGL, { Marker, Popup,FullscreenControl,ScaleControl,GeolocateControl,FlyToInterpolator} from "react-map-gl";
import React, { useState, useEffect,useCallback,useRef} from "react";
import ControlPanel from "../styles/ControlPan.module.js";
import style from "../styles/MapButton.module.scss";
import CameraPanel from '../styles/Camera.module.js';
import Geocoder from "react-map-gl-geocoder";
import searchStyle from "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useLoading, Bars } from '@agney/react-loading';
import styles from "../styles/MapLoading.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MapSection = (props) => {
     const { data } = props

      // loading part ----------------------
     const { containerProps, indicatorEl } = useLoading({
       loading: true,
       indicator: <Bars width="100" />,

     }); 

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
    //  onClose={() => {
    //   setSelectedPark(null);
    // }}
  >
    <div>
    <a href='/animals'> <h5>Scientific Name:   {selectedPark.scientificName}</h5> </a> 
      <hr/>
      <p>Number :  {selectedPark.count}</p>
      <p>Local Gov :  {selectedPark.localGov} </p>
      <p>Regions :  {selectedPark.regions} </p>
      <p>Geolocation : [ {selectedPark.lat}, {selectedPark.lon} ]</p>
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
      

      //geoLocation Control 
      //can get the user's geolocation and display it on Map

      // console.log(data);

      //limit the map interaction panel 
    const [interactionState, setInteractionState] = useState({});

  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: false,
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
      const geocoderDefaultOverrides = { transitionDuration: 3000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );  
  // funscreen control 
  const fullscreenControlStyle= {
    right: 10,
    top: 170
  };

   //geolocate control
   const geolocateControlStyle= {
    right: 40,
    top: 170
  };
   //ScaleControl style
   const scaleControlStyle= {
    right: 10,
    top: 230
  };
  ////------------------notification------------
   




    return (
      <>
        <ReactMapGL 
         {...viewport} 
         {...settings}
         ref={mapRef}
         mapboxApiAccessToken={MAPBOX_TOKEN}
          //mapStyle="mapbox://styles/chengguangli/ckobkmn3t16m917p8ajuissot"
         mapStyle='mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g'
        //  onViewportChange={viewport => {
        //     setViewport(viewport);
        //   }}
         onViewportChange={handleViewportChange}
         onInteractionStateChange={s => setInteractionState({...s})}
         width="100%"
         height="100%"
         >

         {/* <NavigationControl style={navControlStyle} />*/}
                
        {/* --------------------- loading part---------------------------------------------- */}
        {
          data.length == 0 ? (
          <div className={styles.loading}>

            {indicatorEl} {/* renders only while loading */}
          </div>) : (            
               [markers]
           )}

        {pops}                    
   <div className={style.controlContainer}>  

    <ControlPanel 
     settings={settings}
     interactionState={interactionState}
     onChange={updateSettings}
     />
        <div className={style.cameraContainer}> 
          <CameraPanel onSelectCity={onSelectCity} />
             <FullscreenControl style={fullscreenControlStyle} />

             {/* user current location  */}
         <GeolocateControl
           style={geolocateControlStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          fitBoundsOptions={{maxZoom: 13}}
          showUserLocation={true}
          // showAccuracyCircle={false}
          label="My Current Location"
          // auto
          />

<ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />  
       
     </div>
  </div>


        
        {/* search button  */}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          language="en"
          clearOnBlur={true}
          // collapsed={true}
          zoom={10}
          countries="Au"
          placeholder="Enter Location"
        />
       
       


         </ReactMapGL>


    </>


    );

};