import React from 'react';
import './buttons.css';
import Button from './Button/Button';

const Buttons = () => {
  return (
    <div className='btn-container'>
        <div className="buttons">
            <Button icon={'uil uil-phone-volume btn__icon'} name={'Airtime'} />

            <Button icon={'uil uil-signal btn__icon'} name={'Data'} />

            <Button icon={'uil uil-lightbulb btn__icon'} name={'Electricity'} />
        </div>

        <div className="buttons">
            <Button icon={'uil uil-apple-alt btn__icon'} name={'Eat'} />

            <Button icon={'uil uil-signal btn__icon'} name={'Goods'} />

            <Button icon={'uil uil-setting btn__icon'} name={'Service'} />
        </div>

        <div className="buttons">
            <Button icon={'uil uil-swimmer btn__icon'} name={'Activities'} />

            <Button icon={'uil uil-globe btn__icon'} name={'Nearby'} />

            <Button icon={'uil uil-users-alt btn__icon'} name={'Connect'} />
        </div>
        
    </div>
  )
}

export default Buttons