
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Layout } from "../../component/Layout";
import { MapSection } from '../../component/MapSection'
import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl} from "react-map-gl";
import styles from "../../styles/Map.module.css";
import { Menu } from "semantic-ui-react";
export default function map() {  

      //fetch data from API
    //   API url = "https://ie-animal-api.herokuapp.com/api3/pig";
    const [data, setData] = useState([]);

    useEffect(async () => {

        const result = await Axios.get(
          `https://ie-animal-api.herokuapp.com/api3/pig`
        );
        setData(result.data);
        //test print it out 
        // console.log(result.data.map(animal => (animal.lat)));

      }, []); 
      
      //console.log(data);
      //hand click 
      const handleClick = async (e, { name }) => {
        const result = await Axios.get(
          `https://ie-animal-api.herokuapp.com/api3/${name}`
        );
    
        setData(result.data);
      };

    return(
      <Layout>
        <Menu vertical className={styles.menu}>
        <Menu.Item name="fox" onClick={handleClick} />
        <Menu.Item name="pig" onClick={handleClick} />
        <Menu.Item name="goat" onClick={handleClick} />
        <Menu.Item name="rabbit" onClick={handleClick} />
        <Menu.Item name="dog" onClick={handleClick} />
      </Menu>

       <MapSection data={data}>
       </MapSection> 

      </Layout>

    );


} 



