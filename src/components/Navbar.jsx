import { MdMenu, MdClose, MdHome, MdInfoOutline, MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import './navbar.css';
import { useState } from 'react';


const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  
  return (
    <aside className={`sidebar ${clicked?"clicked":""}`}>
      <div className="logo">
        <span onClick={() => setClicked(!clicked)} id="menu-icon">{clicked ? <MdClose/> : <MdMenu />}</span>
        <img src={logo} alt="Logo" className={`${clicked?"display-block":"display-none"}`} />
      </div>
      <ul className="links">
        <li>
            <span><MdHome/></span>
            <Link to="/" className={`${clicked ? "display-block": "display-none"}`}>Home</Link>
        </li>
        <li>
            <span><MdInfoOutline/></span>
            <Link to="/about" className={`${clicked ? "display-block": "display-none"}`}>About</Link>
        </li>
        <li>
            <span><MdContactMail/></span>
            <Link to="/contact" className={`${clicked ? "display-block": "display-none"}`}>Contact</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Navbar
