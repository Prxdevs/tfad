import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import Error from '../Error/';
import Loading from '../Loading/';
import Product from '../Product/';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2 className='featuredd' style={{fontFamily:"Poppins"}}>FEATURED PRODUCTS</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured' style={{alignItems:"center"}}>
        {featured.map((product) => {
          return <Product key={product.id} {...product} style={{alignItems:"center"}}/>;
        })}
      </div>
      <Link to='/products' className='btn'>
        Show More...
      </Link>
    </Wrapper>
  );
};

export default FeaturedProducts;
