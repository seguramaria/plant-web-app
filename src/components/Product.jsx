import PropTypes from 'prop-types';

const Product = ({ name, description, image, price }) => {
  return (
    <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
      <div className='col-4'>
        <img
          className='img-fluid'
          src={`./public/img/${image}.webp`}
          alt='plant image'
        />
      </div>
      <div className='col-8'>
        <h3 className='text-black fs-4 fw-bold text-uppercase'>{name}</h3>
        <p>{description}</p>
        <p className='fw-black text-primary fs-10'>{price}$</p>
        <button type='button' className='btn btn-dark w-100'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
