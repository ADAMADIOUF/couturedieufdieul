import React from 'react'
import a from "../assets/bg.png"
import { Link } from 'react-router-dom'
const Background = () => {
  return (
    <div className='bg'>
      <img src={a} alt='' />
      <div className='bg-details'>
        <h3>Créativité et Élégance Couture</h3>
        <p>
          Notre passion est de donner vie à votre style à travers des créations
          de couture exceptionnelles. Chez Dieuf Dieul Couture, nous mettons en
          œuvre la créativité et l'artisanat pour vous offrir des vêtements sur
          mesure qui expriment votre individualité et votre élégance. Découvrez
          l'art de la couture avec nous.
        </p>
        <Link to={`/shop`}>
          <button className='btn'>Acheter Maintenant</button>
        </Link>
      </div>
    </div>
  )
}

export default Background