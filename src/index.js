import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Contact from './components/Contact';
import Shop from './pages/Shop';

import SingleShop from './pages/SingleShop';
import About from './components/About';
import Women from './pages/Women';
import Men from './pages/Men';
import Tenues from './pages/Tenues';
import Divers from './pages/Divers';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/product/:id' element={<SingleShop />} />
      <Route path='/women' element={<Women />} />
      <Route path='/men' element={<Men />} />
      <Route path='/tenue' element={<Tenues />} />
      <Route path='/divers' element={<Divers />} />

      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
