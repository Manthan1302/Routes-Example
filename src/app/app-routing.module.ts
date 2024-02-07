import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutcompanyComponent } from './aboutus/aboutcompany/aboutcompany.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { EditCartComponent } from './cart/edit-cart/edit-cart.component';
import { NewCartComponents } from './cart/edit-cart/new-cart/new-cart.component';
import { NewCartComponent } from './cart/new-cart/new-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-gurad.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SliderComponent } from './slider/slider.component';
import { SliderChildComponent } from './slider/slider-child/slider-child.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', component: AboutusComponent, children: [
      { path: '', component: AboutcompanyComponent },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'cart',
    // canActivate: [AuthGuard],
    canActivateChild:[AuthGuard],
    component: CartComponent, children: [

      {
        path: 'user', component: EditCartComponent, children: [
          { path: 'abc', component: NewCartComponents },
        ]
      },
      { path: 'admin', component: NewCartComponent },

    ]
  },
  { path: 'not-found', component: ErrorPageComponent ,data:{message:"page-not-Found"}},

  {path:'slider',component:SliderComponent,children:[
    {path:':id',component:SliderChildComponent}
  ]},
  { path: '**', redirectTo:'/not-found' },

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
