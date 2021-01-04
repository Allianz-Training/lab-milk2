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

    it('wrong password', () => {
        page.navigateTo();
        page.getEmailTextBox().sendKeys('User1');
        page.getPasswordTextBox().sendKeys('1234567');
        page.getLoginButton().click();
        expect(browser.getCurrentUrl()).not.toContain('profile');
      });
      it('wrong username', () => {
        page.navigateTo();
        page.getEmailTextBox().sendKeys('User2');
        page.getPasswordTextBox().sendKeys('45632');
        page.getLoginButton().click();
        expect(browser.getCurrentUrl()).not.toContain('profile');
      });
      it('username and password are correct', () => {
        page.navigateTo();
        page.getEmailTextBox().sendKeys('User3');
        page.getPasswordTextBox().sendKeys('45632');
        page.getLoginButton().click();
        expect(browser.getCurrentUrl()).toContain('Profile');
      });

    // xit('form invalid when empty',()=>{
    
    // });
})
