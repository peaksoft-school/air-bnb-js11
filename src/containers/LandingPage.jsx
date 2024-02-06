import React from 'react'
import Header from '../layout/Header'
import Regions from '../components/landing/regions/Regions'
import PopularApartments from '../components/landing/apartment/PopularApartments'
import PopularHouse from '../components/landing/populars/PopularHouse'
import Footer from '../layout/footer/Footer'

const LandingPage = () => {
   return (
      <div>
         <Header />
         <Regions />
         <PopularApartments background />
         <PopularHouse />
         <PopularApartments />
         <Footer />
      </div>
   )
}

export default LandingPage
