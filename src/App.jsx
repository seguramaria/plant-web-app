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
    return setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeProductFromCart = (product) => {
    const updateCart = cart.filter((item) => item.id !== product.id);
    setCart(updateCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const getProductQuantity = (productId) => {
    const productInCart = cart?.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <>
      <CssBaseline />
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        removeProductFromCart={removeProductFromCart}
        decreaseQuantity={decreaseQuantity}
      />
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
            addToCart={addToCart}
            product={product}
            quantity={getProductQuantity(product.id)}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default App;
