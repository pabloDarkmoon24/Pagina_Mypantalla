import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import img from '../../public/mypantalla.con.png'

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
         <h1 className="logo"> <img src={img} alt="mypantalla" className="mypantalla-logo" />MyPantalla</h1>
          
        <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><Link to="/Mypantalla/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/Mypantalla/estrella" onClick={closeMenu}>Estrella</Link></li>
          <li><Link to="/Mypantalla/comando" onClick={closeMenu}>Comando</Link></li>
        </ul>
      </div>
    </nav>
  );
};