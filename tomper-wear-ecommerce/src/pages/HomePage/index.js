import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';
import bann from '../../assets/bann.jpg';
import { Image } from 'react-bootstrap';

const HomePage = () => {
  useEffect(() => {
    document.title = 'PRX Wear | Home';
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      {/* <Image width={"100%"} src={bann}></Image> */}
      {/* <Services /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default HomePage;
