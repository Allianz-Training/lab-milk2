import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HistoryClaimComponent } from './history-claim/history-claim.component';
import { HistoryPurchaseComponent } from './history-purchase/history-purchase.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginbuyComponent } from './loginbuy/loginbuy.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { PayrateComponent } from './payrate/payrate.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { YourProductComponent } from './your-product/your-product.component';
import { from } from 'rxjs';
import { PaymentconfirmComponent } from './paymentconfirm/paymentconfirm.component';
import { FaqComponent } from './faq/faq.component';
import { ConfirmcancelComponent } from './confirmcancel/confirmcancel.component';
import { BuytologinComponent } from './buytologin/buytologin.component';
import { ClaimComponent } from './claim/claim.component';
import { ThankComponent } from './thank/thank.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {path: 'about',
  component: AboutUsComponent 
}, {path: 'ourproduct',
  component: OurproductComponent
}, {path: 'contactus',
  component: ContactusComponent
}, {path: 'login',
  component: LoginComponent
},{path: 'register',
  component: RegisterComponent
},{path: 'profile',
  component: ProfileComponent
},{path: 'payrate',
  component: PayrateComponent
},{path: 'historyPurchase',
  component: HistoryPurchaseComponent
},{path: 'yourProduct',
  component: YourProductComponent
},{path: 'historyClaim',
  component: HistoryClaimComponent
},{path: 'cart',
  component: CartComponent
},{path: 'loginbuy',
  component: LoginbuyComponent
},{path: 'paymentconfirm',
  component: PaymentconfirmComponent
},{path: 'faq',
  component: FaqComponent
},{path: 'confirmcancel',
  component: ConfirmcancelComponent
},{path: 'buytologin',
  component: BuytologinComponent
},{path: 'claim',
  component: ClaimComponent
},{path: 'thank',
  component: ThankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
