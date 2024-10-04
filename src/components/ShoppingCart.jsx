import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Button, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const ShoppingCart = ({
  cart,
  clearCart,
  close,
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
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <Stack
      sx={{
        width: isDesktop ? 400 : '100vw',
        height: '100%',
        padding: '1.5rem',
        paddingBottom: '0.25rem',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {!isDesktop && (
        <IconButton
          variant='text'
          color='text.secondary'
          onClick={() => close()}
          sx={{
            top: '0.25rem',
            right: '0.5rem',
            position: 'absolute',
          }}
        >
          <CloseIcon size='small' />
        </IconButton>
      )}
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
            width: '100%',
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
          width: '100%',
          marginTop: '1.5rem',
          paddingBottom: '1rem',
        }}
      >
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
            sx={{ margin: '0 0 0.3rem 0.5rem' }}
          />
        </Stack>
        {!isEmpty && (
          <Button
            variant='outlined'
            color='inherit'
            onClick={() => clearCart()}
            sx={{ width: '100%', marginTop: '0.75rem' }}
          >
            Clear Cart
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
