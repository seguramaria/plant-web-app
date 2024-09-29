const Header = () => {
  return (
    <header className='py-5 header'>
      <div className='container-xl'>
        <div className='row justify-content-center justify-content-md-between'>
          <div className='col-8 col-md-3'>
            <a href='index.html'>
              <img className='img-fluid' src='./img/logo.svg' alt='logo' />
            </a>
          </div>
          <nav className='col-md-6 a mt-5 d-flex align-items-start justify-content-end'>
            <div className='shopping-cart'>
              <img
                className='img-fluid'
                src='./img/shopping-cart.png'
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
                          src='./img/plant_2.webp'
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
  );
};

export default Header;
