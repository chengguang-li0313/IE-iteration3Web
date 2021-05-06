import * as React from 'react';

import DATA from '../data/map.json';
import style from "./MapButton.module.scss";


function ControlPanel(props) {
  return (
    <div className="control-panel">
     
      <h3 className={style.cameraItem} >Camera Transition</h3>
      <p className={style.cameraItem}>Smooth animate of the viewport.</p>
      <hr />

      {DATA.filter(city => city.state === 'VIC').map((city, index) => (
        <div key={`btn-${index}`} className={style.cameraItem} >
          <input 
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === 'Center'}
            onClick={() => props.onSelectCity(city)}
            
          />
          <label htmlFor={`city-${index}`} >{city.city}</label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);