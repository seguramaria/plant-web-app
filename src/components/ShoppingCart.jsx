import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ cart }) => {
  return (
    <>
      <h2>Your ShoppingCart</h2>
      {cart.length === 0 ? <p>No products in cart.</p> : null}
      {cart.map((product) => (
        <ShoppingCartItem key={product.id} product={product} />
      ))}
      <h2>Total: 0$</h2>
    </>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default ShoppingCart;
