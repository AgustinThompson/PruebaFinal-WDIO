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
        addStep(`Buscar articulo: ${articulo}`)
        await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
        await this.barraDeBusqueda.keys('Enter');
    }
    /**
     * Obtener texto de la barra de búsqueda
     */
    async obtenerTextoBusqueda() {
        addStep('Obtener texto de la barra de busqueda')
        return await this.barraDeBusqueda.getValue();
    }
    /**
    * Obtener texto de la barra de bÃºsqueda
    */
   async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de busqueda')
    return await this.barraDeBusqueda.getValue();
}
/**
    * Escribe el artÃ­culo en el campo de bÃºsqueda y presiona Enter
    * @param {String} articulo que se buscarÃ¡
    */
async buscar(articulo) {
    addStep(`Buscar articulo: ${articulo}`)
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys('Enter');
}

/**
 * Obtener texto de la barra de busqueda
 */
async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de busqueda')
    return await this.barraDeBusqueda.getValue();
}

 
 
 }
 export default new HomePage(); // exporta la instancia de la clase HomePage a los tests que la requieran
