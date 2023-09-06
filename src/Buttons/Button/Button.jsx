import React from 'react'
import './button.css';

const Button = ({icon, name}) => {
  return (
    <div className='btn__div'>
        <a href="#button" className="btn__link">
            <i className={icon}></i>
            <p className='btn__name'>{name}</p>
        </a>
        
    </div>
  )
}

export default Button