import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductsAsync } from '../slices/productsApiSlice'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Featured = () => {
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
    window.scrollTo(0, 0) // Scrolls to the top of the page on component mount
  }, [])

  // Filter products where the 'women' field is true
  const womenProducts = products.filter((product) => product.featured)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='shop'>
      <div className='title'>
        <h3>Couture Cool: Nos Coups de Cœur</h3>
      </div>
      <div className='products section-center'>
        {womenProducts.map((product) => {
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

export default Featured
