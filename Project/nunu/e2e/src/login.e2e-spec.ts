import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { browser } from 'protractor';
import { LoginPage } from './login.po';

describe('Login test',()=>{
    let page: LoginPage;

    beforeEach(()=>{
        page = new LoginPage();
        page.navigateTo();
    })

    it('Login with submitbutton',() =>{
        page.getEmailTextBox().sendKeys('user1@email.com');
        page.getPasswordTextBox().sendKeys('1234');
        page.getLoginButton().click();
    })

    it('It should redirect user to Profile page', ()=>{
        page.getLoginButton().click()
        expect(browser.getCurrentUrl()).toBe(page.navigateToProfile())
    });

    it('Redirect user to Home when logout', ()=>{
        page.getLogoutButton().click()
        expect(browser.getCurrentUrl()).toBe(browser.get('/profile'))
    });

    // xit('form invalid when empty',()=>{
    
    // });
})
