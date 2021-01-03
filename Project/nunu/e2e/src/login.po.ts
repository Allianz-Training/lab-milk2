import { browser,by, element, logging } from 'protractor';

export class LoginPage {
  
    navigateTo(){
        return browser.get('/login');
    }

    getEmailTextBox(){
        return element(by.name('email'));
    }

    getPasswordTextBox(){
        return element(by.name('password'));
    }

    getLoginButton(){
        return element(by.buttonText('LOGIN'))
    }
    
}