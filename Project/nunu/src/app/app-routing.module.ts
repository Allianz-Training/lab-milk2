import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

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
  component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
