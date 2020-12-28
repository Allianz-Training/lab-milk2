import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { BelowhomeComponent } from './belowhome/belowhome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { BottompageComponent } from './bottompage/bottompage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Navbar3Component } from './navbar3/navbar3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdvertiseComponent,
    BelowhomeComponent,
    AboutUsComponent,
    OurproductComponent,
    ContactusComponent,
    LoginComponent,
    Navbar2Component,
    BottompageComponent,
    RegisterComponent,
    ProfileComponent,
    Navbar3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import form
    ReactiveFormsModule, 
    FormsModule
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
