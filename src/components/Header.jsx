import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box
          sx={{
            flexBasis: { xs: '100%', md: '25%' },
            textAlign: 'center',
            mb: 2,
          }}
        >
          <Link href='index.html' width='40px'>
            <CardMedia component='img' src='./img/logo.svg' alt='logo' />
          </Link>
        </Box>
        <Box
          sx={{
            flexBasis: { xs: '100%', md: '70%' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <IconButton
            aria-controls='shopping-cart-menu'
            aria-haspopup='true'
            onClick={handleCartClick}
            color='inherit'
          >
            <ShoppingCartIcon />
          </IconButton>
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

export default Header;
