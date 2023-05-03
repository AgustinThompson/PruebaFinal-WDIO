import HomePage from '../pages/home.page'; // importa la clase HomePage
import SearchPage from '../pages/search.page'; // importa la clase SearchPage
import { articulos } from '../data/articulos.json';
import { expect } from 'chai';



describe('Búsqueda DDT', () => {
  articulos.forEach(articulo => {
  it('Debería buscar ${articulo}', async ()=> {
     await HomePage.abrir('/');
     articulo=articulo.toUpperCase();
     //buscar articulo en mayusculas
       await HomePage.buscar(articulo);
       expect(await HomePage.obtenerTextoBusqueda()).to.include(articulo);
       expect(await SearchPage.obtenerNombreResultado()).to.include(articulo);
     

  });
 });
});

