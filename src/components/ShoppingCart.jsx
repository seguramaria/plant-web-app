import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Stack, Typography } from '@mui/material';

const ShoppingCart = ({ cart, addToCart, removeProductFromCart }) => {
  return (
    <Stack
      sx={{
        height: '100%',
        padding: '1rem 1.5rem',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      {cart.length === 0 ? (
        <Stack
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6' paddingTop='0.75rem'>
            YOUR BASKET IS EMPTY
          </Typography>
        </Stack>
      ) : (
        <Stack
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6' paddingBottom='1rem'>
            Shopping Cart ({cart.length})
          </Typography>
          {cart.map((product) => (
            <ShoppingCartItem
              key={product.id}
              addToCart={addToCart}
              removeProductFromCart={removeProductFromCart}
              product={product}
            />
          ))}
        </Stack>
      )}
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '1.5rem',
        }}
      >
        <ShoppingBagOutlinedIcon fontSize='large' />
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography>Total:</Typography>
          <Typography>0$</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
