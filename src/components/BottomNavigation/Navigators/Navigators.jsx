import React from 'react';
import './navigator.css';

const Navigators = ({icon, color}) => {
  return (
    <div className='navigator'>
        <i className={icon} style={{'color': color}}></i>
    </div>
  )
}

export default Navigators