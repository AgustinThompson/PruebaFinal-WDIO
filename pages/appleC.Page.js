import BasePage from "./base.page";


class AppleCPage extends BasePage {

    

    //WebElements

    get resultado(){ 
        return $('//div[@class="caption"]//a[1]') }    

    //-------------------------------------------------------------------------------------------------------//

    // Click en el resultado de la búsqueda

    async ingresarAlResultado() {
        await super.clickearElemento(this.resultado);  // super llama al método de la clase padre (BasePage) y le envía los parámetros - en este caso el elemento a clickear
    }

    // Obtener texto del resultado de la búsqueda

    async obtenerNombreResultado() {
        return await this.resultado.getText();  // getText() obtiene el texto del elemento - en este caso el nombre del resultado de la búsqueda
    }

    //Seleccionar el color del producto

    async seleccionarColor(color){  // método para seleccionar el color del producto
        
        const dropDownColor = await $('select'); //busca el elemento con el tag select y lo asigna a la variable dropDownColor
        await dropDownColor.selectByIndex(2); //selecciona el color del producto
        console.log(await dropDownColor.getValue()); //imprime el valor del color seleccionado
        await browser.pause(5000); //espera 5 segundos
    }
 
}