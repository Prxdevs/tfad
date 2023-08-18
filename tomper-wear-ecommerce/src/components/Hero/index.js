import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroBcg from '../../assets/hero-bcg.jpeg';
import heroban from '../../assets/heroban.png';
import img1 from '../../assets/1.jpeg';
import img2 from '../../assets/2.jpeg';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className='hero-container'
      style={{ width: '100%', overflow: 'hidden', padding:"3% 3% 0 3%", backgroundColor:"var(--clr-grey-10)" }}
    >
       <style>
        {`
          @media (max-width: 861px) {
            .hero-container {
              height: 70%;
            }
          }
          
          @media (min-width: 862px) {
            .hero-container {
              height: 100%vh;
            }
          }
        `}
      </style>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000} // Set the desired auto-play interval
        stopOnHover={true}
        style={{ width: '100%', height: '100%', objectFit:"contain" }} // Fill width and height
      >
          <Link to='/products' >
        <div style={{cursor:"pointer"}}>
          <img
            src={img1}
            alt='Carousel 1'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          {/* <p className='legend'>Legend 1</p> */}
        </div>
          </Link>
          <Link to='/products' >
        <div style={{cursor:"pointer"}}>

          <a href='/products' ><img
            src={img2}
            alt='Carousel 2'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          /></a>
          {/* <p className='legend'>Legend 2</p> */}
        </div></Link>
        {/* <Link to='/products' >
        <div style={{cursor:"pointer"}}>

          <a href='/products' ><img
            src={heroban}
            alt='Carousel 3'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          /></a>
        </div>
        </Link> */}
      </Carousel>
     
    </div>
  );
};

export default Hero;
