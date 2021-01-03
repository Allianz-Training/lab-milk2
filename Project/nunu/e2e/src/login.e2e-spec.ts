import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { LoginPage } from './login.po';

describe('Login test',()=>{
    let page: LoginPage;

    beforeEach(()=>{
        page = new LoginPage();
        page.navigateTo();
    })

    it('Login with button',() =>{
        page.getEmailTextBox().sendKeys('user1@email.com');
        page.getPasswordTextBox().sendKeys('1234');
        page.getLoginButton().click();
    })

    it('form invalid when empty',()=>{
        page.getEmailTextBox().invalid;
        page.getPasswordTextBox().invalid;
        expect(
        


    })
})
