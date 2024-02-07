import { NewCartComponents } from './cart/edit-cart/new-cart/new-cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutcompanyComponent } from './aboutus/aboutcompany/aboutcompany.component';
import { EditCartComponent } from './cart/edit-cart/edit-cart.component';
import { NewCartComponent } from './cart/new-cart/new-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthServices } from './auth.service';
import { AuthGuard } from './auth-gurad.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SliderComponent } from './slider/slider.component';
import { SliderChildComponent } from './slider/slider-child/slider-child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ProfileComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutcompanyComponent,
    EditCartComponent,
    NewCartComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SliderComponent,
    SliderChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule
  ],
  providers: [AuthServices,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
