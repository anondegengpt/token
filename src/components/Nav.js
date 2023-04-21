import './Nav.css';
import { SlArrowDown } from 'react-icons/sl';
import { MdNotes, MdClose } from "react-icons/md";
import React, { useState, useEffect } from 'react';


export default function Nav() {
  const [showButton, setShowButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="nav-container">
      <h2>DegenGPT</h2>
      {showButton ? (
        <div>
          <button className="buy-ins-bg" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
              <MdClose style={{ fontSize: '25px' }} />
            ) : (
              <MdNotes style={{ fontSize: '25px' }} />
            )}
          </button>

          <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list-show">
              <li onClick={() => handleClick('body')}>
                <span className="nav-item-text-show">Home</span>
              </li>
              <li onClick={() => handleClick('meet')}>
                DegenGPT Token
              </li>
              <li onClick={() => handleClick('how')}>Revenue</li>
              <li onClick={() => handleClick('chad')}>Chad</li>
              <li className="buy-ins" onClick={() => handleClick('roadmap')}>
                <span className="buy-word">Roadmap</span>
              </li>
            </ul>
          </div>
        </div>

      ) : (

        <ul className="nav-list">
          <li onClick={() => handleClick('body')}>
            <span className="nav-item-text">Home</span>
            <div className="arrow">
              <SlArrowDown
                className="arrow-down"
                color="grey"
                size={10}
              />
            </div>
          </li>
          <li onClick={() => handleClick('meet')}>
            DegenGPT Token
            <div className="arrow">
              <SlArrowDown
                className="arrow-down"
                color="grey"
                size={10}
              />
            </div>
          </li>
          <li onClick={() => handleClick('how')}>Revenue</li>
          <li onClick={() => handleClick('chad')}>Chad</li>
          <li className="buy-ins" onClick={() => handleClick('roadmap')}>
            <span className="buy-word">Roadmap</span>
          </li>
        </ul>
      )}
    </div>
  )
}