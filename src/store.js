// store.js
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsApiSlice'
import singleProductReducer from './slices/productsApiSlice' // Assuming you have a separate reducer for single products

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer, // Include the single product reducer here
  },
})

export default store
