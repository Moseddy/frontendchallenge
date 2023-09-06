import React from 'react'
import './bottom-nav.css';
import Navigators from './Navigators/Navigators';

const BottomNavigation = () => {
  return (
    <div>
        <div className="bottom__nav">
            <Navigators icon={'uil uil-plus-circle'} color={'#b0b0b0'}/>

            <Navigators icon={'uil uil-tv-retro'} color={'#b0b0b0'}/>


            <Navigators icon={'uil uil-list-ul'} color={'#008cff'}/>


            <Navigators icon={'uil uil-intercom'} color={'#b0b0b0'}/>

        </div>
    </div>
  )
}

export default BottomNavigation