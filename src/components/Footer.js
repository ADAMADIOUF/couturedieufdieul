import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container section-center'>
        <div className='logo'>
          <img src={logo} alt='Dieuf Dieul Couture' />
        </div>
        <div className='footer-links'>
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/shop'>Boutique</Link>
            </li>
            <li>
              <Link to='/about'>À Propos de Nous</Link>
            </li>
            <li>
              <Link to='/contact'>Contactez-nous</Link>
            </li>
          </ul>
        </div>
        <div className='footer-shipping'>
          <h4>Livraison & Retour</h4>
          <p>
            Retrouvez des informations sur nos politiques de livraison et de
            retour ici.
          </p>
          <Link to='/'>Politique de Livraison</Link>
          <Link to='/'>Politique de Retour</Link>
        </div>
        <div className='footer-social'>
          <h4>Suivez-nous</h4>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/dieufdieulcouture'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/dieufdieulcouture'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/dieufdieul'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Dieuf Dieul Couture. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
