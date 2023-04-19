import './Nav.css'; 
import {SlArrowDown} from 'react-icons/sl';


export default function Nav () {

  function handleClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="nav-container">
      <h2>DegenGPT</h2>
      <ul className="nav-list">
        <li onClick={() => handleClick('body')}>
          <span className="nav-item-text" >Home</span>
          <div className="arrow">      
              <SlArrowDown
                className="arrow-down"
                color="grey"
                size={10}
              />
          </div>
         
        </li>
        <li onClick={() => handleClick('meet')}>DegenGPT Token
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
    </div>
  )
}