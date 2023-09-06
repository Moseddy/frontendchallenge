import React from 'react'
import "./user.css";
import Edwin  from "../../edwinmoses.png";

const User = () => {
  return (
    <div className='user'>
        <div className="user__content">
            <div className="name">Hi Edwin,</div>
            <ul className="user__items">
                <li className="user__item">
                    <a href="#link" className="user__link">
                        <i className="uil uil-qrcode-scan user__icon"></i>
                    </a>
                </li>

                <li className="user__item">
                    <a href="#link" className="user__link">
                        <i className="uil uil-bell user__icon"></i>
                    </a>
                </li>

                <li className="user__item">
                    <div className="img">
                        <img src={Edwin} alt="Edwin" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default User