import { assert } from 'chai';
import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';



describe('Búsqueda', () => {
  it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
    await browser.url('/');

    const barraDeBusqueda = await $('[name="search"]');
    await barraDeBusqueda.setValue('apple cinema');
    assert.equal(await barraDeBusqueda.getValue(),'apple cinema','Error: no se mostró el texto esperado en la barra de búsqueda');
    await barraDeBusqueda.keys('Enter');
    await browser.pause(5000);

    const resultadoDeBusqueda = await $('//div[2]/div/div/h1'); 
    assert.equal(await resultadoDeBusqueda.getText(),'Search - apple cinema', 'Error: no se mostro el texto esperado');
    await browser.pause(5000);

    const articulo = await $('/html/body/div[2]/div/div/div[3]/div/div/div[1]/a/img');
    await articulo.click();
    await browser.pause(5000);

    const selectColor = await $('#input-option217');
    const value = await selectColor.getValue();
    console.log(value);
    await selectColor.selectByAttribute('value', '3');
    await browser.pause(5000);
    console.log(await selectColor.getValue());
});
});

 