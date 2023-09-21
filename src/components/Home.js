import React, { useEffect } from 'react'
import Slider from './Slider'
import Categories from './Categories'
import Follow from './Follow'
import PopularCategories from './PopularCategories'
import LastBanner from './LastBanner'
import Background from './Background'
import Featured from './Featured'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scrolls 
  }, [])
  return (
    <div>
     
      <Slider />
      <Categories/>
      <Follow/>
      <PopularCategories/>
      <Featured/>
      <LastBanner/>
 <Background/>
    </div>
  )
}

export default Home