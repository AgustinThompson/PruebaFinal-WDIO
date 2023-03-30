import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import { addStep } from '@wdio/allure-reporter';

describe('Carrito Dos', () => {

  before(async () => {
    await homePage.abrir('/');
  });

  after(async () => {
    await homePage.cerrar();
  });

  it('Debería buscar iphone', async ()=> {
    const articulo = 'iPhone';
    addStep(`Buscar artículo "${articulo}"`);
    await homePage.buscar(articulo);
    expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
    expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
    addStep(`Se encontró el artículo "${articulo}"`);
  });
});
