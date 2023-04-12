/* 
describe('Carrito', () => { 
  
  it('Debería buscar apple cinema, ingresar al artículo y seleccionar el segundo color', async () => {
    await browser.url('/');
    const barraDeBusqueda = await $('[name="search"]'); //espera hasta que el elemento 'search' (barra de búsqueda) este cargado
    await barraDeBusqueda.setValue('apple cinema'); //setea el valor del elemento en este caso 'apple cinema'
    await barraDeBusqueda.keys('Enter'); //simula la tecla enter
    const dropDownColor = await $('select'); //espera hasta que el elemento 'select' este cargado
    await dropDownColor.selectByIndex(2); //selecciona el segundo color del producto
    await browser.pause(5000); //espera 5 segundos
    
    
  });
});
 */


