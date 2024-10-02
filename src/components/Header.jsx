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

const Header = ({ cart }) => {
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
                backgroundColor: '#548954',
                borderColor: '#548954',
              },
            }}
          >
            ({cart.length})
          </Button>
          <Drawer
            anchor='right'
            open={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          >
            <ShoppingCart cart={cart} />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
