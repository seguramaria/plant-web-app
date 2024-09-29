function App() {
  return (
    <>
      <header className='py-5 header'>
        <div className='container-xl'>
          <div className='row justify-content-center justify-content-md-between'>
            <div className='col-8 col-md-3'>
              <a href='index.html'>
                <img
                  className='img-fluid'
                  src='./public/img/logo.svg'
                  alt='logo'
                />
              </a>
            </div>
            {/* TODO FIX SHOPPING CART */}
            <nav className='col-md-6 a mt-5 d-flex align-items-start justify-content-end'>
              <div className='shopping-cart'>
                <img
                  className='img-fluid'
                  src='./public/img/shopping-cart.png'
                  alt='imagen shopping-cart'
                />

                <div id='shopping-cart' className='bg-white p-3'>
                  <p className='text-center'>Empty</p>
                  <table className='w-100 table'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quanty</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className='img-fluid'
                            src='./public/img/plant_2.webp'
                            alt='plant image'
                          />
                        </td>
                        <td>KOKEDAMA</td>
                        <td className='fw-bold'>30$</td>
                        <td className='flex align-items-start gap-4'>
                          <button type='button' className='btn btn-dark'>
                            -
                          </button>
                          1
                          <button type='button' className='btn btn-dark'>
                            +
                          </button>
                        </td>
                        <td>
                          <button className='btn btn-danger' type='button'>
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p className='text-end'>
                    Total: <span className='fw-bold'>30$</span>
                  </p>
                  <button className='btn btn-dark w-100 mt-3 p-2'>
                    Empty cart
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className='container-xl mt-5'>
        <h2 className='text-center'>Our Happy Plants</h2>

        <div className='row mt-5'>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_1.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Monstera
              </h3>
              <p>
                Known as the Swiss cheese plant, features large, perforated
                leaves that create a stunning visual. It thrives indoors,
                needing bright, indirect sunlight and regular watering, making
                it a popular choice for home decor.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_2.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Kokedama
              </h3>
              <p>
                A traditional Japanese plant arrangement, consists of a root
                ball wrapped in moss, showcasing vibrant greenery. This unique
                style requires minimal care, thriving in indirect light and
                regular misting, making it an elegant addition to any space.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_3.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Rubber Plant
              </h3>
              <p>
                Ficus elastica, commonly known as the Rubber Plant, features
                large, glossy leaves that add a touch of elegance to any indoor
                space. This resilient plant thrives in bright, indirect light
                and can grow tall, making it a perfect choice for both homes and
                offices.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_4.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Areca Palm
              </h3>
              <p>
                known for its feathery, arching fronds, is a popular indoor
                plant that brings a tropical feel to any environment. This
                low-maintenance palm thrives in bright, indirect sunlight and
                enjoys regular watering, helping to purify the air around it.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_5.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                French Lavender
              </h3>
              <p>
                French Lavender, or Lavandula dentata, is celebrated for its
                fragrant purple flowers and silver-green foliage. This hardy
                plant thrives in sunny gardens and well-drained soil, attracting
                bees and butterflies while adding a lovely aroma to outdoor
                spaces.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_6.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                ZZ Plant
              </h3>
              <p>
                ZZ Plant, scientifically known as Zamioculcas zamiifolia, is a
                hardy houseplant with glossy, dark green leaves. It thrives in
                low light and requires minimal watering, making it ideal for
                beginners and busy individuals looking to enhance their indoor
                decor.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_7.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Pachira aquatica
              </h3>
              <p>
                It is a popular indoor plant known for its braided trunk and
                lush green leaves. It symbolizes good fortune and prosperity,
                thriving in bright, indirect light while requiring regular
                watering, making it an attractive and meaningful addition to
                homes.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_8.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'> Pilea</h3>
              <p>
                Chinese Money Plant, or Pilea peperomioides, is a trendy
                houseplant recognized for its round, coin-shaped leaves. This
                unique plant prefers bright, indirect light and moderate
                watering, making it a delightful and stylish choice for modern
                interiors.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_9.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Calathea orbifolia
              </h3>
              <p>
                Calathea orbifolia, often referred to as the Orbifolia Prayer
                Plant, features large, round leaves with striking patterns. This
                tropical beauty thrives in humidity and indirect light, making
                it a stunning addition to any indoor plant collection.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_10.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Peperomia angulata
              </h3>
              <p>
                Peperomia angulata, known as the Radiator Plant, showcases its
                textured, heart-shaped leaves with a unique pattern. This
                compact and low-maintenance plant thrives in bright, indirect
                light and requires infrequent watering, making it perfect for
                small spaces.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_11.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Lemon Lime Pothos
              </h3>
              <p>
                Lemon Lime Pothos, or Epipremnum aureum, is known for its
                vibrant green and yellow variegated leaves. This fast-growing
                vine thrives in various lighting conditions, making it an
                easy-to-care-for plant that adds a splash of color to any room.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
            <div className='col-4'>
              <img
                className='img-fluid'
                src='./public/img/plant_12.webp'
                alt='plant image'
              />
            </div>
            <div className='col-8'>
              <h3 className='text-black fs-4 fw-bold text-uppercase'>
                Satin Pothos
              </h3>
              <p>
                It is admired for its silvery, satin-like leaves that create a
                striking visual effect. This low-maintenance vine prefers
                bright, indirect light and thrives in a range of humidity
                levels, making it a fantastic choice for indoor greenery.
              </p>
              <p className='fw-black text-primary fs-3'>30$</p>
              <button type='button' className='btn btn-dark w-100'>
                Add to cart
              </button>
            </div>
          </div>
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
