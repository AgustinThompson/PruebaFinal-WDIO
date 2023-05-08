import RegisterPage from "../pages/register.page";
import { users } from "../data/user_data.json";
import urls from "../data/urls.json";
import { expect } from "chai";
import allure from '@wdio/allure-reporter';

describe("Register Page", () => {
  let registeredUser;

  before(async () => {
    await RegisterPage.open(urls.registerUrl);
  });

  after(async () => {
  });

  const user = users[0];

  it(`Should register a new user: ${user.firstName} ${user.lastName}`, async () => {
    // Fill the registration form and submit
    await RegisterPage.registerForm(
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.confirmPassword
    );

    // Check if the email is already registered
    const emailAlreadyRegisteredLocator = $('//span[contains(text(),"There is already an account with this email address")]');
    const isEmailAlreadyRegistered = await emailAlreadyRegisteredLocator.isDisplayed();

    if (isEmailAlreadyRegistered) {
      //If Email is already registered, fail the test
      const errorMessage = await emailAlreadyRegisteredLocator.getText();
      throw new Error(`Registration failed. Email is already registered. Error message: ${errorMessage}`);
    }

    // Verify successful registration by checking the URL
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include(urls.successUrl);

    // Verify the success message is displayed
    const successMessageLocator = $(`li[class="success-msg"] ul li`);
    await successMessageLocator.waitForDisplayed();
    const successMessageText = await successMessageLocator.getText();
    expect(successMessageText).to.include("Thank you for registering with Madison Island.");

    registeredUser = user;

    allure.addStep(`Registered a new user: ${user.firstName} ${user.lastName}`);
    allure.addStep('Filled the registration form');
    allure.addStep('Submitted the form');
    allure.addStep('Checked if the email is already registered');
    allure.addStep('Verified the successful registration URL');
    allure.addStep('Verified the success message is displayed');
  }).timeout(15000);

  afterEach(() => {
    if (registeredUser) {
      console.log(`User ${registeredUser.firstName} ${registeredUser.lastName} registered successfully!`);
    }
  });
});