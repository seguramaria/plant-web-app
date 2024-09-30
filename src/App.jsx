import { useEffect, useState } from 'react';
import data from './data/data';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Grid from '@mui/material/Grid2';
import { CssBaseline } from '@mui/material';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        p={5}
        spacing={2}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default App;
