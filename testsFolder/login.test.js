import LoginPage from '../pages/login.page';
import WelcomePage from '../pages/welcome.page';
import urls from '../data/urls.json';
import { expect } from 'chai';
import userData from '../data/user_data.json';

describe('Login Page', () => {
  let userEmail;

  before(async () => {
    await LoginPage.open(urls.loginUrl);
  });

  afterEach(async () => {
    if (userEmail) {
      console.log(`The user with email ${userEmail} has been logged in successfully!`);
    }
  });

  it('Should log in and validate welcome message', async () => {
    const user = userData.loginUsers[0];

    await LoginPage.login(user.email, user.password);

    userEmail = user.email;

    const welcomeMessage = await WelcomePage.getWelcomeMessageText();

    expect(welcomeMessage).to.include('MY DASHBOARD');

    console.log(`The user with email ${userEmail} has been logged in successfully!`);
  });
// test para validar que el usuario puede desloguearse una vez logueado correctamente, utilizando el locator de account y logout
  it('Should log out', async () => {

    await WelcomePage.clickAccountLocator();
    await WelcomePage.clickLogoutLocator();
 //esperar 3 segundos
 await browser.pause(5000);
    expect(await browser.getUrl()).to.equal(urls.homeUrl);
   
    
   
   
   


    
  }
  );

});
