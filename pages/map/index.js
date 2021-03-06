
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Layout } from "../../component/Layout";
import { MapSection } from '../../component/MapSection'
import ReactMapGL, { Marker, Popup,NavigationControl,ScaleControl,GeolocateControl} from "react-map-gl";
import styles from "../../styles/Map.module.css";
import buttonStyle from "../../styles/MapButton.module.scss";
import { Menu } from "semantic-ui-react";
import { Button, Icon } from 'semantic-ui-react'
import { MapHero } from '../../component/MapHero'
import { Footer } from '../../component/Footer' 
import ScrollToTop from "react-scroll-up";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function map()  {  
  //button style

      //fetch data from API
    //   API url = "https://ie-animal-api.herokuapp.com/api3/pig";
    const [data, setData] = useState([]);

    const Msg = ({ closeToast, toastProps }) => (
      <div>
        <p> 
         πΊοΈ Map is ready    
        </p>
        <p> 
        π¦ You are in Mel. on the map. 
        </p> 
      </div>
    )
   
    const Panel = ({closeToast,toastProps} ) => (
       <div>
         <p> 
          π You can set these switches on the Interactive limit panel so that you can have a better experience.π
         </p>
          
        <p> You can turn up the scroll zoom button,so that You can zoom in or zoom out the map</p>  
       </div>
    )

    useEffect(async () => {

        const result = await Axios.get(
          `https://ie-animal-api.herokuapp.com/api3/goat`
        );
        setData(result.data);
        //test print it out 
        // console.log(result.data.map(animal => (animal.lat)));
        toast(<Msg/>);
        toast(<Panel/>,{
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }, []); 
      
      //console.log(data);
      //hand click 
      const handleClick = async (e, {name}) => {
        const result = await Axios.get(
          `https://ie-animal-api.herokuapp.com/api3/${name}`
        );
    
        setData(result.data);
      };

      //notication 
      

    return(
      <>
      {/* <Layout> */}
     <MapHero> </MapHero>
      <ToastContainer/>
    <div className={buttonStyle.containerMap}> 
        {/* <p> 
       <div className={buttonStyle.title}>
         Distribution map of the five feral animals     
       </div>  
        
      </p>   */}
      {/* title  */}
      {/* <div className={buttonStyle.body}>                   
               Feral Animals' Distribution Map            
      </div> */}
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
      <Button.Content visible>Feral Pig</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="twitter" name="fox" onClick={handleClick}>
      <Button.Content visible>Red Fox</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="yellow" name="rabbit" onClick={handleClick}>
      <Button.Content visible>European Rabbit</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="green" name="goat" onClick={handleClick}>
      <Button.Content visible>Feral Goat</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated  color="instagram" name="dog" onClick={handleClick}>
      <Button.Content visible>Dingo</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </div>  
      {/* notification  */}
     
       {/* map  */}

       
       <MapSection data={data}>
       </MapSection> 

       </div>
      {/* </Layout> */}
      <ScrollToTop 
    showUnder={160}
    easing="linear"
    duration={3000}
    cursor="pointer"
     >    
    <img src="/upup.svg" width="30px" height="30px"/> 
  </ScrollToTop> 

       <Footer></Footer>
       </>
    );

} 



