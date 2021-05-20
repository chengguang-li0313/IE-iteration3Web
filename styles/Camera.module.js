import * as React from 'react';

import DATA from '../data/map.json';
import style from "./MapButton.module.scss";


function ControlPanel(props) {
  return (
    <div className="control-panel">
     
      <h3 className={style.cameraItem} >Map View Angle</h3>
      <p className={style.cameraItem}>Choose which region of the map you’d like to focus on:</p>
      <hr />

      {DATA.filter(city => city.state === 'VIC').map((city, index) => (
        <div key={`btn-${index}`} className={style.cameraInputContainer} >
          <input 
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === 'Center'}
            onClick={() => props.onSelectCity(city)}            
          /> 
          <div className={style.cameraLabel}> 
          <label htmlFor={`city-${index}`} >{city.city} of VIC</label>
          </div>   
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);