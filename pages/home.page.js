import BasePage from './base.page'; // importa la clase BasePage

class HomePage extends BasePage { // la clase HomePage hereda de la clase BasePage

    //WebElements
    get barraDeBusqueda(){ return $('[name="search"]') } // busca el elemento con el atributo name="search" y lo asigna a la variable barraDeBusqueda
 
    //-------------------------------------------------------------------------------------------------------//
 
    /**
     * Escribe el artículo en el campo de búsqueda y presiona Enter
     * @param {String} articulo que se buscará
     */
    async buscar(articulo) {
        await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);  // super llama al método de la clase padre (BasePage) y le envía los parámetros
    } 
    /**
     * Obtener texto de la barra de búsqueda
     */
    async obtenerTextoBusqueda() { // método para obtener el texto de la barra de búsqueda
        return await this.barraDeBusqueda.getValue(); //getValue() obtiene el valor del elemento
    }
 
 
 }
 export default new HomePage(); // exporta la instancia de la clase HomePage a los tests que la requieran