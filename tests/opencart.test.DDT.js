import HomePage from '../pages/home.page'; // importa la clase HomePage
import SearchPage from '../pages/search.page'; // importa la clase SearchPage
import { articulos } from '../data/articulos.json';
import { expect } from 'chai';



describe('Búsqueda DDT Allure', () => {
  articulos.forEach(articulo => {
  it(`Debería buscar ${articulo}`, async ()=> {
     await HomePage.abrir('/');
     await HomePage.buscar(articulo);
     expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
     expect(await SearchPage.obtenerNombreResultado()).to.equal(articulo);
  });
 });
});

