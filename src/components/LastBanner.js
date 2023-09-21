import React from 'react'
import a from "../assets/last-b1.png"
import b from '../assets/last-b2.png'
import { Link } from 'react-router-dom'

const LastBanner = () => {
  return (
    <div className='last-banner'>
      <article className='last-banner-f1'>
        <img src={a} alt='' />
        <div className='last-banner-f1-info'>
          <h3>Création de Tenues Scolaires Élégantes</h3>
          <p>
            Découvrez notre collection exceptionnelle de tenues scolaires,
            conçues avec soin pour offrir à vos enfants un look élégant et
            professionnel tout au long de l'année scolaire. Des uniformes de
            haute qualité pour l'éducation de demain.
          </p>
          <Link to={`/tenue`}>
            <button className='btn'>Acheter Maintenant</button>
          </Link>
        </div>
      </article>
      <article className='last-banner-f2'>
        <img src={b} alt='' />
        <div className='last-banner-info-f2'>
          <h3>Mode Hommes et Femmes Uniques</h3>
          <p>
            Explorez notre gamme de vêtements pour hommes et femmes, où la
            créativité et l'élégance se rencontrent. Chez Dieuf Dieul Couture,
            nous concevons des vêtements uniques qui reflètent votre style et
            votre personnalité, pour que vous puissiez briller dans toutes les
            occasions.
          </p>
          <Link to={`/shop`}>
            <button className='btn'>Acheter Maintenant</button>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default LastBanner