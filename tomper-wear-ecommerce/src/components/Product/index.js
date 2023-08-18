import React from 'react';
import Wrapper from './styles';
import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./styles";
import Stars from '../Stars';
import { useProductsContext } from '../../context/products_context';

const Product = ({ image, name, price, id }) => {

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    description,
    stock,
    rating: stars,
    numberOfReviews,
    reviews = [],
    _id: sku,
    company,
    images,
  } = product;

  const containerStyle = {
    height: '316px',
    width: '260px',
    objectFit: 'cover',
  };
  const containerStyle2 = {
    height: '316px',
    width: '260px',
    objectFit: 'cover',
    overflow:"hidden",
    margin:"0 auto",
  };
  const containerStyle1 = {
    width: '260px',
    margin:"5px auto",
    fontWeight: "normal",
  };
  return (
    <Wrapper>
      <div className='container' style={containerStyle2}>
        <img src={image} alt='main' style={containerStyle} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer style={containerStyle1} >
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
      {/* <Stars stars={stars} reviews={numberOfReviews} /> */}
    </Wrapper>
  );
};

export default Product;
