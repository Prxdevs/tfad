import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'PRX Wear | About';
  }, []);

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>Unique clothing store</h2>
            <div className='underline'></div>
          </div>
          <p>
          TFAD is your gateway to a fashion adventure like no other. We redefine shopping with our exclusive series-based approach, featuring captivating collections like the superhero series and glitch series. Immerse yourself in trendsetting styles that resonate with your passions. Elevate your wardrobe with TFAD, where fashion meets storytelling.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
