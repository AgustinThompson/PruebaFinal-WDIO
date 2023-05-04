describe('Comparación de imágenes con página de WebdriverIO', () => {
 it('Comparación de imágenes con página de WebdriverIO', async () => { 
    // Abrir la página de WebdriverIO
   await browser.url('/');
   await $(".navbar--fixed-top").waitForDisplayed(); // Esperar a que se cargue la barra de navegación
   expect(
       await browser.checkElement(await $(".navbar--fixed-top"), "wdio-headerContainer", {  // Comparar la barra de navegación con la imagen de referencia
           /* opciones de configuración para el elemento */
       }),
       "Error: la barra de navegación de WebdriverIO no coincide con la original"
   ).equal(0); // El valor 0 indica que no hay diferencias entre las imágenes
 });
 // ----------------------------------------------------------

 it('Comparación de imágenes con página de WebdriverIO', async () => {
    await browser.url('https://webdriver.io');
    await $(".navbar--fixed-top").waitForDisplayed(); // Esperar a que se cargue la barra de navegación
    expect(
        await browser.checkElement(await $(".navbar--fixed-top"),  "wdio-headerContainer", { // Comparar la barra de navegación con la imagen de referencia

            /* opciones de configuración para el elemento */
        }),
        "Error: la barra de navegación de WebdriverIO no coincide con la original"
    ).equal(0);
 
    await browser.url('https://webdriver.io/blog/');
    await $('.navbar--fixed-top').waitForDisplayed();
    expect(await browser.checkElement(await $('.navbar--fixed-top'), 'wdio-headerContainer', {})).equal(0); 
 });

});

