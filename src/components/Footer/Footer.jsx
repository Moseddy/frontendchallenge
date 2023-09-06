import React from 'react';

import './footer.css';
import { Data } from '../../Data.js';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { SwiperSlide, Swiper as SwiperComponent } from 'swiper/react';




import Robot from '../../robot.jpg';
 const Footer = () => {   
  return (
    <div className="footer">
    <SwiperComponent
      loop={true}
      autoplay={true}
      pagination={{
        clickable: true
      }}
      grabCursor={true}
    >
        {Data.map(({id, heading, text, background}) => {
          return (
            <SwiperSlide key={id} className='footer__swiper'>
              <div className="footer__wrapper" style={{'backgroundColor': background}}>
              <div className="footer__text">
                <h2>{heading}</h2>
                <p>{text}</p>
              </div>
              <div className="footer__img">
                <img src={Robot} alt="" />
              </div>
              </div>
              

            </SwiperSlide>
          )
        })}
    </SwiperComponent>
    </div>
  )
}

export default Footer;