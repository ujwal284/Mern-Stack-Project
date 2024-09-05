import React from 'react'
import Navbar from '../Components/Navbar'
import Vehicles from '../Components/Vehicles'
import Footer from '../Components/Footer'


function Vehicless() {
  
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Vehicles/>
    </div>
    <Footer/>

    </>
  )
}

export default Vehicless
