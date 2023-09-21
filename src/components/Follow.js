import React, { useState } from 'react'
import{FaInstagram} from "react-icons/fa"
const Follow = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const images = [
    'https://i.pinimg.com/474x/8b/47/74/8b4774ff6cb003e214199ec149b6d1ae.jpg',
    'https://i.pinimg.com/474x/0d/61/19/0d6119ef2da6f29be6e275e6d9b1d3d1.jpg',
    'https://i.pinimg.com/474x/8d/4a/e7/8d4ae7893c3460235fc325d055857892.jpg',
    'https://i.pinimg.com/474x/cb/95/13/cb9513faac2b513d45b3ea4060337e0b.jpg',
    'https://i.pinimg.com/474x/89/8b/56/898b56a208f7e2410085d726b61d4503.jpg',
    'https://i.pinimg.com/474x/ee/68/18/ee6818f6dab9d55ad3152a2f40f80f73.jpg',
    'https://i.pinimg.com/474x/a3/b1/5f/a3b15f53c22384cb3ff8a84245949e22.jpg',
    'https://i.pinimg.com/474x/a0/ac/d2/a0acd2eff3a8ccae09dce116c82e2674.jpg',
    'https://i.pinimg.com/474x/7e/3a/aa/7e3aaa7b71222447fb82de6db846a0e1.jpg',
    'https://i.pinimg.com/474x/cf/13/f5/cf13f51a8e1f154adf578dce9df970a2.jpg',
    'https://i.pinimg.com/474x/39/0e/cf/390ecfa326a65fb2c56d87271bcd9304.jpg',
    'https://i.pinimg.com/474x/b6/63/09/b663093d8ff3d18573cebcad0d44e7c5.jpg',
  ]

  const openImage = (index) => {
    setSelectedImage(index)
    setModalOpen(true)
  }

  const closeImage = () => {
    setSelectedImage(null)
    setModalOpen(false)
  }

  const nextImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='follow'>
      <div className='title'>
        <h3>SUIVEZ-NOUS SUR INSTAGRAM</h3>
      </div>
      <div className='follow-container'>
        {images.map((imageUrl, index) => (
          <article key={index} className={`f${index + 1}`}>
            <img
              src={imageUrl}
              alt=''
              onClick={() => openImage(index)}
              style={{ cursor: 'pointer' }}
            />
            <h2>SUIVEZ-NOUS SUR INSTAGRAM</h2>
          </article>
        ))}
      </div>

      {modalOpen && (
        <div className='image-modal'>
          <div className='modal-content'>
            <div className='container-modal'>
              <img src={images[selectedImage]} alt='' className='modal-image' />
              <article className='modal-info'>
                <h3>SUIVEZ-NOUS SUR INSTAGRAM</h3>
                <span className='icons-follow-us'>
                  <FaInstagram />
                </span>
                <hr />
                <p>
                  Restez connectés avec nous ! Suivez-nous sur Instagram pour
                  découvrir nos dernières créations, nos coulisses et bien plus
                  encore. Rejoignez notre communauté et partagez votre passion
                  pour la mode avec nous. Cliquez sur 'Suivre' dès maintenant
                  pour ne rien manquer !
                </p>
                <p>
                  Plongez dans notre monde de style et de créativité en nous
                  suivant sur Instagram. Explorez nos tendances les plus
                  chaudes, nos inspirations de mode et nos looks exclusifs.
                  N'oubliez pas de cliquer sur 'Suivre' pour rejoindre notre
                  communauté de passionnés de la mode !
                </p>
              </article>
            </div>
            <div className='navigation'>
              <button onClick={prevImage}>Précédente</button>
              <button onClick={nextImage}>Suivante</button>
              <button onClick={closeImage}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Follow
