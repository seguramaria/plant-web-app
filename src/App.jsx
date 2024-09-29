import Header from './components/Header';
import Product from './components/Product';
import { useEffect, useState } from 'react';
import data from './data/data';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <>
      <Header />
      <main className='container-xl mt-5'>
        <h2 className='text-center'>Our Happy Plants</h2>
        <div className='row mt-5'>
          {products?.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </main>

      <footer className='bg-dark mt-5 py-5'>
        <div className='container-xl'>
          <p className='text-white text-center fs-4 mt-4 m-md-0'>
            My Plants Shop
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
