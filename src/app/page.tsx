import BannerHome from '@/components/sections/BannerHome'
import GetInTouch from '@/components/sections/GetInTouch'
import PortfolioHome from '@/components/sections/PortfolioHome'
import ServicesHome from '@/components/sections/ServicesHome'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import DottedBackground from '@/components/ui/DottedBackground'
import GridBackground from '@/components/ui/GridBackground'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
        <GridBackground className="z-0" />
        <BannerHome />
      </div>

      <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
        <ServicesHome />
      </div>
      <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
        <DottedBackground className='z-0' />
        <WhyChooseUs />
      </div>
      <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
        <PortfolioHome />
      </div>
      <div className='relative w-full h-fit px-6 md:px-12 lg:px-20'>
        <GridBackground className="z-0" />
        <GetInTouch />
      </div>

    </>
  )
}

export default Home