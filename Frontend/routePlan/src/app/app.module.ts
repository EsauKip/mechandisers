import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MerchandiserComponent } from './merchandiser/merchandiser.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginmechComponent } from './loginmech/loginmech.component';
import { RegistermechComponent } from './registermech/registermech.component';
import { MechandiserComponent } from './mechandiser/mechandiser.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    HomedetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    MerchandiserComponent,
    ManagerComponent,
    LoginmechComponent,
    RegistermechComponent,
    MechandiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }