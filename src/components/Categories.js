import React from 'react'
import a from "../assets/c1.png"
import b from '../assets/c2.png'
import c from '../assets/c3.png'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories section-center'>
      <article className='categories-details'>
        <Link to={`/men`}>
          <img src={a} alt='' />
          <div className='categories-info'>
            <h3>hommes</h3>
          </div>
        </Link>
      </article>
      <article className='categories-details'>
        <Link to={`/women`}>
          <img src={b} alt='' />
          <div className='categories-info'>
            <h3>Femmes</h3>
          </div>
        </Link>
      </article>
      <article className='categories-details'>
        <Link to={`/tenue`}>
          <img src={c} alt='' />
          <div className='categories-info'>
            <h3>Tenues</h3>
          </div>
        </Link>
      </article>
    </div>
  )
}

export default Categories