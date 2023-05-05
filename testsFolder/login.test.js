import LoginPage from '../pages/login.page';
import WelcomePage from '../pages/welcome.page';
import urls from '../data/urls.json';
import { expect } from 'chai';
import userData from '../data/user_data.json';
import allure from '@wdio/allure-reporter';

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

    console.log(`The user with email ${user.email} has been logged in successfully!`);

    allure.addStep(`Logged in with email: ${user.email}`);
    allure.addStep('Validated welcome message');
  });

  it('Should log out and validate', async () => {
    await WelcomePage.clickAccountLocator();
    await WelcomePage.clickLogoutLocator();
    await browser.pause(5000);

    expect(await browser.getUrl()).to.equal(urls.homeUrl);

    console.log(`The user with email ${userEmail} has been logged out successfully!`);

    allure.addStep(`Logged out user with email: ${userEmail}`);
    allure.addStep('Clicked account locator');
    allure.addStep('Clicked logout locator');
    allure.addStep('Validated logout');
  });
});
