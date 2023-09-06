import React from 'react'
import './header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <a href="index.html" className="nav__logo">9:41</a>
                <ul className="nav__list">

                <li className="nav__item">
                        <a href='#link' className="nav__link active-link">
                            <i className="uil uil-signal nav__icon"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#link" className="nav__link active-link">
                            <i className="uil uil-wifi nav__icon"></i>
                        </a>
                    </li> 

                    <li className="nav__item">
                        <a href="#link" className="nav__link active-link">
                            <i className="uil uil-battery-empty nav__icon"></i>
                        </a>
                    </li>
                    

                   
                </ul>
        </nav>
        
    </header>
  )
}

export default Header