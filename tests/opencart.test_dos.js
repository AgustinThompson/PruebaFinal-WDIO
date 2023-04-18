import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';
const { expect } = require('chai');

describe ('Carrito', () => {

it('Debería buscar iphone', async ()=> {
  await browser.url('/');
  const articulo = 'iPhone';
  await HomePage.buscar(articulo);
  expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
  expect(await SearchPage.obtenerNombreResultado()).to.equal(articulo);
});

});
