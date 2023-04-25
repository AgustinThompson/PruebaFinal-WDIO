import BasePage from "./base.page";




class AppleCPage extends BasePage {

    

    //WebElements

    get resultado(){ 
        return $('//div[@class="caption"]//a[1]') }    

    //-------------------------------------------------------------------------------------------------------//

    /**
     * Click en el elemento seleccion de color
    * */
    async selecionarColor() {
        await super.clickearElemento(this.color);
    }

}
export default new AppleCPage();