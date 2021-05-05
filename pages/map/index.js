
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Layout } from "../../component/Layout";
import { MapSection } from '../../component/MapSection'
import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl} from "react-map-gl";
import styles from "../../styles/Map.module.css";
import buttonStyle from "../../styles/MapButton.module.scss";
import { Menu } from "semantic-ui-react";
import { Button, Icon } from 'semantic-ui-react'


export default function map()  {  
  //button style

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
      const handleClick = async (e, {name}) => {
        const result = await Axios.get(
          `https://ie-animal-api.herokuapp.com/api3/${name}`
        );
    
        setData(result.data);
      };

    return(
      <Layout>
      <p> 
       <div className={buttonStyle.title}>
         Distribution map of the five feral animals     
       </div>  
        
      </p>  
{/*       
       
      <label className={buttonStyle.label}>
        <div className={buttonStyle.toggle}>
          <input className={buttonStyle.togglestate} id = "pig" type="checkbox" name="pig" value="pig" />
         <div class={buttonStyle.indicator}></div>
      </div>
      <div class={buttonStyle.labeltext}>Pig</div>
     </label> */}
     <div className={buttonStyle.container }> 
       <Button animated  color="red" name="pig" onClick={handleClick}>
      <Button.Content visible>Pig</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="twitter" name="fox" onClick={handleClick}>
      <Button.Content visible>Fox</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="yellow" name="rabbit" onClick={handleClick}>
      <Button.Content visible>Rabbit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="green" name="goat" onClick={handleClick}>
      <Button.Content visible>Goat</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="instagram" name="dog" onClick={handleClick}>
      <Button.Content visible>Dog</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </div>  

    
       {/* map  */}

       <div className={buttonStyle.containerMap}> 
       <MapSection data={data}>
       </MapSection> 

       </div>
      </Layout>

    );

} 



