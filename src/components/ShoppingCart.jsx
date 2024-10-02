import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

const ShoppingCart = ({
  cart,
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
}) => {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      ),
    [cart]
  );

  return (
    <Stack
      sx={{
        height: '100%',
        padding: '1rem 1.5rem',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      {isEmpty ? (
        <Stack
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6' paddingTop='0.75rem'>
            YOUR CART IS EMPTY
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
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              product={product}
              removeProductFromCart={removeProductFromCart}
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
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography>Total:</Typography>
          <Typography>{cartTotal}$</Typography>
        </Stack>
        <ShoppingBagOutlinedIcon
          fontSize='medium'
          sx={{ marginBottom: '0.25rem' }}
        />
      </Stack>
    </Stack>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
