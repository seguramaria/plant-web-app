import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ cart }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(cart);
  return (
    <AppBar
      position='static'
      sx={{
        py: 5,
        backgroundImage: `url('./img/header.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Box
          sx={{
            width: '14rem',
            mb: 2,
          }}
        >
          <CardMedia component='img' src='./img/logo.svg' alt='logo' />
        </Box>
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
            onClick={handleCartClick}
            sx={{
              '&:hover': {
                backgroundColor: '#548954',
                borderColor: '#548954',
              },
            }}
          >
            (0)
          </Button>
          <Menu
            id='shopping-cart-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem key='1'>
              <Box display='flex' justifyContent='space-between' width='100%'>
                <CardMedia
                  component='img'
                  height='50'
                  image={`./img/image_1.webp`}
                  alt={'monstera'}
                />

                <Typography>Monstera</Typography>
                <Typography>30</Typography>
                <Box display='flex' alignItems='center'>
                  <IconButton size='small'>-</IconButton>
                  <Typography>1</Typography>
                  <IconButton size='small'>+</IconButton>
                </Box>
                <IconButton size='small' color='error'>
                  X
                </IconButton>
              </Box>
            </MenuItem>

            <MenuItem>
              <Typography>Total: 30$</Typography>
            </MenuItem>
            <MenuItem>
              <Button variant='text'>Empty cart</Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
