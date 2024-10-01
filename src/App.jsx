import { useEffect, useState } from 'react';
import data from './data/data';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Grid from '@mui/material/Grid2';
import { CssBaseline, Box, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const addToCart = (product) => {
    const isProductAdded = cart.findIndex((item) => item.id === product.id);

    if (isProductAdded >= 0) {
      const updatedCart = [...cart];
      updatedCart[isProductAdded].quantity++;
      setCart(updatedCart);
    } else {
      product.quantity = 1;
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <>
      <CssBaseline />
      <Header cart={cart} />
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 5,
          backgroundImage: `url('./img/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            width: '14rem',
            mb: 2,
          }}
        >
          <CardMedia component='img' src='./img/logo.svg' alt='logo' />
        </Box>
      </Stack>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        p={5}
        spacing={2}
      >
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default App;
