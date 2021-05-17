import * as React from 'react';
import style from "./MapButton.module.scss";

const camelPattern = /(^|[A-Z])[a-z]*/g;
function formatSettingName(name) {
  return  name.match(camelPattern).join(' ');
}

function Checkbox({name, value, onChange}) {
  return (
    <div className={style.cameraInputContainer} >
      
      <input type="checkbox" checked={value} onChange={evt => onChange(name, evt.target.checked)} />
      <div className={style.cameraLabel}> 
      <label>{formatSettingName(name)}</label>
      </div>
    </div>
  );
}

function NumericInput({name, value, onChange}) {
  return (
    <div className="input">
      <label>{formatSettingName(name)}</label>
      <input
        type="number"
        value={value}
        onChange={evt => onChange(name, Number(evt.target.value))}
      />
    </div>
  );
}

function ControlPanel(props) {
  const {settings, interactionState, onChange} = props;

  const renderSetting = (name, value) => {
    switch (typeof value) {
      case 'boolean':
        return <Checkbox key={name} name={name} value={value} onChange={onChange} />;
      case 'number':
        return <NumericInput key={name} name={name} value={value} onChange={onChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="control-panel">
      <h3 className={style.controlItem}>Limit Map Interaction</h3>
      <p className={style.controlItem}>Turn interactive features off/on.</p>
      <hr />

      {Object.keys(settings).map(name => renderSetting(name, settings[name]))}

      <hr />

      {/* <div>
        <div>
          <label>Dragging</label>
          <span>{interactionState.isDragging && 'Yes'}</span>
        </div>
        <div>
          <label>Transition</label>
          <span>{interactionState.inTransition && 'Yes'}</span>
        </div>
        <div>
          <label>Panning</label>
          <span>{interactionState.isPanning && 'Yes'}</span>
        </div>
        <div>
          <label>Rotating</label>
          <span>{interactionState.isRotating && 'Yes'}</span>
        </div>
        <div>
          <label>Zooming</label>
          <span>{interactionState.isZooming && 'Yes'}</span>
        </div>
      </div> */}
    </div>
  );
}

export default React.memo(ControlPanel);