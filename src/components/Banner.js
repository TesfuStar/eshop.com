import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Banner = () => {
  return (
    <div className='relative z-10 '>
      <div  className='absolute w-full h-32 
      bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
     
        >
            <div>
            <img src="https://links.papareact.com/gi1" alt="banner one"   />
            </div>
            <div>
            <img src="https://links.papareact.com/6ff" alt="banner two"  />
            </div>
            {/* <div>
            
            </div> */}

        </Carousel>
    </div>
  )
}

export default Banner