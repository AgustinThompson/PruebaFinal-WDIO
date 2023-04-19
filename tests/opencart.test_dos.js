import HomePage from '../pages/home.page'; // importa la clase HomePage
import SearchPage from '../pages/search.page'; // importa la clase SearchPage
const { expect } = require('chai'); // esto es para usar el expect de chai 

  describe('Carrito', () => {
    it('Debería buscar apple cinema y seleccionar el segundo color', async () => {
        await browser.url('/');
        const barraDeBusqueda = await $('[name="search"]');
        await barraDeBusqueda.setValue('apple cinema');
        await barraDeBusqueda.keys('Enter');
        await browser.pause(5000);
        
        const articulo = await $('//div[@class="caption"]//a[1]');
        await articulo.click();
        await browser.pause(5000);


        const selectColor = await $('#input-option217');
        const value = await selectColor.getValue(); //obtiene el valor del color seleccionado
        console.log(value); //imprime el valor del color seleccionado
        await selectColor.selectByAttribute('value', '3');
        await browser.pause(5000);
        console.log(await selectColor.getValue());

        //validar que el color seleccionado sea el correcto
        expect(await selectColor.getValue()).to.equal('3');


    });
 
  });
