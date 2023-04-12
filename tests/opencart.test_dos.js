import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';


it('Debería buscar iphone', async ()=> {
  await HomePage.abrir('/');
  const articulo = 'iPhone';
  await HomePage.buscar(articulo);
  expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
  expect(await SearchPage.obtenerNombreResultado()).to.equal(articulo);
});
