import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { LoginmechComponent } from './loginmech/loginmech.component';
import { RegistermechComponent } from './registermech/registermech.component';
import { MechandiserComponent } from './mechandiser/mechandiser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'homedetails', component: HomedetailsComponent},
  { path: 'loginmech', component: LoginmechComponent},
  { path: 'registermech', component: RegistermechComponent},
  { path: 'mechandiser', component: MechandiserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
