import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from "../assets/logo1.png"
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='navbar'>
      <div className='nav-header'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className='logo'>
          <Link to={`/`}>
            <img src={logo} alt='' />
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to={`/`}>
            {' '}
            <li className='nav-item' onClick={handleItemClick}>
              accueil
            </li>
          </Link>
          <Link to={`/shop`}>
            <li className='nav-item' onClick={handleItemClick}>
              boutique
            </li>
          </Link>
          <Link to={`/women`}>
            <li className='nav-item' onClick={handleItemClick}>
              Femmes
            </li>
          </Link>
          <Link to={`/men`}>
            <li className='nav-item' onClick={handleItemClick}>
              Hommes
            </li>
          </Link>
          <Link to={`/tenue`}>
            <li className='nav-item' onClick={handleItemClick}>
              nos tenues
            </li>
          </Link>
          <Link to={`/divers`}>
            <li className='nav-item' onClick={handleItemClick}>
              L'Art du Maillot
            </li>
          </Link>
          <Link to={`/about`}>
            <li className='nav-item' onClick={handleItemClick}>
              À Propos de Nous
            </li>
          </Link>
          <Link to={`/contact`}>
            <li className='nav-item' onClick={handleItemClick}>
              Contactez-nous
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
