import React from 'react'
import a from "../assets/pc1.png"
import b from '../assets/pc2.png'
import c from '../assets/pc3.png'
import d from '../assets/pc4.png'
import { Link } from 'react-router-dom'
const PopularCategories = () => {
  return (
    <div className='popular-categories'>
      <div className='title'>
        <h3>Découvrez nos catégories les plus en vogue ! </h3>
      </div>
      <div className='popular-categories-container section-center'>
        <article className='category'>
          <Link to={`/women`}>
            <div className='category-img'>
              <img src={a} alt='' />
            </div>
            <h3>femmes</h3>
          </Link>
        </article>
        <article className='category'>
          <Link to={`/men`}>
            <div className='category-img'>
              <img src={b} alt='' />
            </div>
            <h3>Hommes</h3>
          </Link>
        </article>
        <article className='category'>
          <Link to={`/tenue`}>
            <div className='category-img'>
              <img src={c} alt='' />
            </div>

            <h3>Nos Tenues</h3>
          </Link>
        </article>
        <article>
          <Link to={`/divers`}>
            <div className='category-img'>
              <img src={d} alt='' />
            </div>
            <h3>L'Art du Maillot</h3>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default PopularCategories