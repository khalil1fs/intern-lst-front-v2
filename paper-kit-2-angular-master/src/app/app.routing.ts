import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {PanierComponent} from './panier/panier.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProductsComponent} from './products/products.component';
import {ProductCreateComponent} from './products/product-create/product-create.component';
import {ViewComponent} from './module/admin/view/view.component';
import {AdminComponent} from './module/admin/admin.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'login',           component: LoginPageComponent },
    { path: 'panier',          component: PanierComponent },
    { path: 'products',          component: ProductsComponent },
    { path: 'checkout',          component: CheckoutComponent },
    { path: 'product-create',          component: ProductCreateComponent },
    { path: 'module',          component: ViewComponent },
    { path: 'register',          component: RegisterComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
