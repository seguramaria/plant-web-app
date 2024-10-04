import { useEffect, useState } from 'react';
import { data } from './data/data';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Grid from '@mui/material/Grid2';
import { CssBaseline, Box, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

function App() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const products = data.products;
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
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

  const clearCart = () => setCart([]);

  const getProductQuantity = (productId) => {
    const productInCart = cart?.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <>
      <CssBaseline />
      <Header
        cart={cart}
        clearCart={clearCart}
        decreaseQuantity={decreaseQuantity}
        icon={data.icon}
        increaseQuantity={increaseQuantity}
        name={data.name}
        removeProductFromCart={removeProductFromCart}
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
      <Footer icon={data.icon} name={data.name} />
    </>
  );
}

export default App;
