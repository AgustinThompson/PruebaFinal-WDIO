
const PAGE_TIMEOUT = 10000 // variable que define el tiempo de espera para que un elemento sea clickeable

export default class BasePage {


   /**
    * Abrir página
    * @param {String} ruta a la cual acceder // 
    */
   async abrir(ruta) { // método para abrir una página  
       await browser.url(`${ruta}`);  // abre la página con la ruta que se le envía que en este caso está definida en el test
   }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} elemento a clickear
    */
   async clickearElemento(elemento) { // método para hacer click en un elemento
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT }); // espera a que el elemento sea clickeable
       await elemento.click(); // hace click en el elemento
   }


   /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar  
    */
   async vaciarCampoYEnviarTexto(elemento, texto){ // método para vaciar un campo  de texto y enviar texto
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT }); // espera a que el elemento sea clickeable - 
       await elemento.clearValue(); // borra el valor del campo de texto
       await elemento.click(); // hace click en el campo de texto
       await elemento.keys(texto); // envía el texto al campo de texto
   }


}