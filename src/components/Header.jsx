import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from './ShoppingCart';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

const Header = ({
  cart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClickOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <AppBar position='sticky' color='inherit'>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant='text'
          color='inherit'
          endIcon={<YardOutlinedIcon />}
          onClick={() => console.log('click')}
        >
          <Typography component='div' variant='h5'>
            Happy Plants
          </Typography>
        </Button>

        <Box
          sx={{
            flexBasis: { xs: '100%', md: '70%' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button
            variant='outlined'
            color='inherit'
            startIcon={<ShoppingCartIcon />}
            onClick={handleClickOpenCart}
            sx={{
              '&:hover': {
                color: 'white',
                backgroundColor: '#373330',
                borderColor: '#373330',
              },
            }}
          >
            ({cart?.length})
          </Button>
          <Drawer
            anchor='right'
            open={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          >
            <ShoppingCart
              cart={cart}
              clearCart={clearCart}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeProductFromCart={removeProductFromCart}
            />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default Header;
