import { addStep } from '@wdio/allure-reporter';
import { expect } from 'chai';
import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';


describe('Carrito Dos', () => {

  before(async () => {
    await HomePage.abrir('/');
  });

  after(async () => {
    await HomePage.cerrar();
  });

  it('Debería buscar iphone', async ()=> {
    const articulo = 'iPhone';
    addStep(`Buscar artículo "${articulo}"`);
    await HomePage.buscar(articulo);
    expect(await HomePage.obtenerTextoBusqueda()).to.equal(articulo);
    expect(await SearchPage.obtenerNombreResultado()).to.equal(articulo);
    addStep(`Se encontró el artículo "${articulo}"`);
  });
});
