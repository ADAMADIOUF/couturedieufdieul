import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductsAsync } from '../slices/productsApiSlice'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Shop = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.data)
  const status = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsAsync())
    }
  }, [status, dispatch])
useEffect(() => {
  window.scrollTo(0, 0) // Scrolls to 
}, [])
  
  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error/>
  }
console.log(products);
  return (
    <div className='shop'>
      <div className='title'>
        <h3>Vêtements Élégants pour Tous</h3>
      </div>
      <div className='products section-center'>
        {products.map((product) => {
          return (
            <article className='product-card' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='image-container'>
                  <img className='product-image' src={product.img[0]} alt='' />
                  <img className='product-image' src={product.img[1]} alt='' />
                </div>
                <div className='product-card-details'>
                  <h3>{product.name}</h3>
                  <p>{product.price}CFA</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Shop
