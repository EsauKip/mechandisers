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
import { ManagerComponent } from './manager/manager.component';
import { LoginmechComponent } from './loginmech/loginmech.component';
import { RegistermechComponent } from './registermech/registermech.component';
import { MechandiserComponent } from './mechandiser/mechandiser.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { MechComponent } from './mech/mech.component';
import { RoutesComponent } from './routes/routes.component';
import { DatePipe } from './date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    HomedetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ManagerComponent,
    LoginmechComponent,
    RegistermechComponent,
    MechandiserComponent,
    AboutComponent,
    ServiceComponent,
    FooterComponent,
    MechComponent,
    RoutesComponent,
    DatePipe
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