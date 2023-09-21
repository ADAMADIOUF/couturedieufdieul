import React from 'react'
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdAccessTime,
  MdDateRange,
} from 'react-icons/md'
import Map from './Map'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='about-banner'>
        <h2>Contactez-Nous</h2>
      </div>
      <div className='contact-bg'>
        <div className='contact-container section-center'>
          <article>
            <h3 className='contact-details'>Dieuf Dieul Couture</h3>
            <p>
              Nous sommes heureux de répondre à toutes vos questions et
              demandes. N'hésitez pas à nous contacter pour discuter de vos
              besoins en matière de vêtements sur mesure, de tenues scolaires,
              de maillots de football, ou pour toute autre demande.
            </p>

            <p>
              Pour toute question, suggestion ou collaboration, vous pouvez nous
              joindre de plusieurs façons :
            </p>
          </article>
          <article>
            <>
              <h3 className='contact-details'>Coordonnées de Contact</h3>
              <p>
                <MdLocationOn className='icon-contact' /> Tivaoune Peulh, Safco
              </p>
              <p>
                <MdPhone className='icon-contact' /> +221 77-925-85-08
              </p>
              <p>
                <MdEmail className='icon-contact' /> dieufdieulcouture@gmail.com
              </p>
            </>
            <div className='contact-details'>
              <h3>Horaires de Travail</h3>
              <p>
                <MdDateRange className='icon-contact' /> <span>Lun-Sam : </span>{' '}
                <MdAccessTime className='icon-contact' /> 8h-21h
              </p>
              <p>
                <MdDateRange className='icon-contact' /> <span>Dim : </span>{' '}
                <MdAccessTime className='icon-contact' /> Fermé
              </p>
            </div>
          </article>
        </div>
        <div className='map'>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Contact
