import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getOurProductButton() {
    return element(by.id('navtext'));
  }
  navigateToLogin() {
    return browser.get('localhost:4200/about');
  }
  getLoginButton() {
    return element(by.buttonText('LOGIN'));
  }

  getOurProductText(){
    return element(by.className('ourproduct'))
  }
  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
