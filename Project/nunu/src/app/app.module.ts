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
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { PayrateComponent } from './payrate/payrate.component';
import { HistoryPurchaseComponent } from './history-purchase/history-purchase.component';
import { YourProductComponent } from './your-product/your-product.component';
import { HistoryClaimComponent } from './history-claim/history-claim.component';
import { CartComponent } from './cart/cart.component';
import { LoginbuyComponent } from './loginbuy/loginbuy.component';
import { CartOrderComponent } from './cart-order/cart-order.component';
import { OrdersumComponent } from './ordersum/ordersum.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentconfirmComponent } from './paymentconfirm/paymentconfirm.component';
import { FaqComponent } from './faq/faq.component';
import { ConfirmcancelComponent } from './confirmcancel/confirmcancel.component';
import { HttpClientModule } from '@angular/common/http';
import { BuytologinComponent } from './buytologin/buytologin.component';


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
    Navbar3Component,
    PersonaldetailComponent,
    PetdetailComponent,
    PayrateComponent,
    HistoryPurchaseComponent,
    YourProductComponent,
    HistoryClaimComponent,
    CartComponent,
    LoginbuyComponent,
    CartOrderComponent,
    OrdersumComponent,
    InvoiceComponent,
    PaymentconfirmComponent,
    FaqComponent,
    ConfirmcancelComponent,
    BuytologinComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import form
    ReactiveFormsModule, 
    FormsModule,
    //
    //api
    HttpClientModule
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
