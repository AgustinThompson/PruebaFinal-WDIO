import HomePage from '../pages/home.page'; // importa la clase HomePage
import SearchPage from '../pages/search.page'; // importa la clase SearchPage
const { expect } = require('chai'); // esto es para usar el expect de chai 

describe ('Carrito', () => { // "describe" es un bloque que agrupa tests

it('Debería buscar iphone', async ()=> { // "it" es un test que se ejecuta dentro del bloque "describe"
  await browser.url('/'); // abre la página de inicio de OpenCart 
  const articulo = 'iPhone';  // variable para el artículo a buscar
  await HomePage.buscar(articulo); // buscar es un método de la clase HomePage que envía el artículo a buscar
  expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo); // verifica que el texto de búsqueda sea igual al artículo
  expect(await SearchPage.obtenerNombreResultado()).to.equal(articulo); // verifica que el nombre del resultado sea igual al artículo
});

});
