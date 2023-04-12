import BasePage from './base.page';

class SearchPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('h4') }

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async ingresarAlResultado() {
       await super.clickearElemento(this.resultado);
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
       return await this.resultado.getText();
   }

}

export default new SearchPage();