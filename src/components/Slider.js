import React, { useEffect, useState } from 'react'
import{Link} from "react-router-dom"
const Slider = () => {
  const slides = [
    {
      imageSrc: '/images/a.png',
      altText: `Créations Sur-Mesure`,
      desc: `Chez Dieuf Dieul Couture, nous croyons en la personnalisation. Contactez-nous pour des créations sur-mesure qui répondent à vos besoins spécifiques. Créez la tenue parfaite pour chaque occasion.`,
    },
    {
      imageSrc: '/images/a1.png',
      altText: 'Créations Élégantes pour la Femme Moderne',
      desc: 'Découvrez notre collection exquise de tenues pour femmes, conçues pour mettre en valeur la beauté et le style de la femme moderne. Chez Dieuf Dieul Couture, nous vous offrons des créations uniques pour chaque occasion.',
    },
    {
      imageSrc: '/images/a2.png',
      altText: `L'École, le Confort et le Style`,
      desc: 'Nos tenues scolaires sont conçues avec soin pour assurer le confort des écoliers tout en ajoutant une touche de style à leur tenue. Optez pour la qualité et le bien-être de vos enfants avec Dieuf Dieul Couture.',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlide = (currentSlide + 1) % slides.length
      setCurrentSlide(nextSlide)
    }, 5000)

    return () => {
      clearInterval(interval) // Clear the interval when the component unmounts
    }
  }, [currentSlide, slides.length])

  return (
    <div className='slider-container'>
      <div className='slider'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `rotateY(${index - currentSlide}turn)`,
              transition: 'transform 1s',
            }}
          >
            <img
              src={slide.imageSrc}
              alt={slide.altText}
              className='slide-image'
            />

            <div className='slider-details'>
              <p className='slide-description'>{slide.desc}</p>
              <h3 className='slide-title'>{slide.altText}</h3>
              <Link to={`/shop`}>
                <button className=' btn'>Acheter Maintenant</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
