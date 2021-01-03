import { browser,by, element, logging } from 'protractor';

export class LoginPage {
  
    navigateTo(){
        return browser.get('/login');
    }

    navigateToProfile(){
        return browser.get('/profile')
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
    getLogoutButton(){
        return element(by.className('btn btn-outline-warning'))
    }


    
}