import BasePage from './base.page';


class SearchPage extends BasePage { // la clase SearchPage hereda los métodos de la clase BasePage

   //Elementos Web
get resultado(){ return $("//h2[@class='product-name']//a[1]") } // busca el elemento con el tag  y lo asigna a la variable resultado - Esta variable  se usa en el test

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async ingresarAlResultado() { // método para hacer click en el resultado de la búsqueda
       await super.clickearElemento(this.resultado); // super llama al método de la clase padre (BasePage) y le envía los parámetros - en este caso el elemento a clickear
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {  // método para obtener el texto del resultado de la búsqueda
       return await this.resultado.getText(); // retorna el texto del resultado de la búsqueda
   }
   
}

export default new SearchPage(); // exporta la instancia de la clase SearchPage a los tests que la requieran