import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleProductAsync } from '../slices/productsApiSlice'
import Error from '../components/Error'
import Loading from '../components/Loading'
import WhatsAppWidget from '../components/WhatsApp'
import 'react-whatsapp-widget/dist/index.css'
const SingleShop = () => {
  const { id: productId } = useParams()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)

  const dispatch = useDispatch()
  const product = useSelector((state) =>
    state.products.data.find((p) => p.id === productId)
  )
  const status = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (status === 'idle' || product?._id !== productId) {
      dispatch(fetchSingleProductAsync(productId))
    }
  }, [status, dispatch, productId, product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAddToCart = () => {
    console.log('handleAddToCart appelé')

    const message = `je veux acheter ${product.name} - Taille : ${selectedSize}, Couleur : ${selectedColor}`
    const url = `https://wa.me/+221779258508?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  if (!product) {
    return <h1>Produit non trouvé</h1>
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className='single-products section-center'>
      <div className='single-products-links'>
        <span>
          <Link to={`/`}>Accueil/</Link>
        </span>
        <span>
          <Link to={`/shop`}>Boutique/</Link>
        </span>
        <span>{product.name}</span>
      </div>
      <div className='single-product-container'>
        <article className='big-img'>
          <img src={product.img[currentImageIndex]} alt='' />
          <div className='single-img-gallery'>
            {product.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Miniature ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                className={currentImageIndex === index ? 'active' : ''}
              />
            ))}
          </div>
        </article>
        <article className='add-to-cart'>
          <h3>{product.name}</h3>
          <p>{product.price}CFA</p>
          <div className='colors'>
            <h3>Couleur : Naturelle</h3>
            <div className='col color-container'>
              {product.colors &&
                product.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: color,
                    }}
                    className={`color-badge ${
                      selectedColor === color ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedColor(color)}
                  ></span>
                ))}
            </div>
            <div>
              <h3>Taille</h3>
              <select
                className='size-container'
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizes &&
                  product.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <button onClick={handleAddToCart} className='btn btn-add-to-cart'>
            Acheter maintenant
          </button>
          {showWhatsAppWidget && (
            <WhatsAppWidget
              phoneNumber='+221777081351'
              message={`je veux acheter ${product.name}`}
            />
          )}
          <p>{product.desc}</p>
          <hr />
          <h3>Informations d'achat</h3>
          <div className='shopping-info-contact'>
            <span>
              <FaWhatsapp />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SingleShop
