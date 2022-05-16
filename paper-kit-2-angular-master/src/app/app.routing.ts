import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {ProduitBioComponent} from './module/client/view/produit-bio/produit-bio.component';
import {FormationComponent} from "./module/client/view/formation/formation.component";
import {CongresComponent} from "./module/client/view/congres/congres.component";


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'login',           component: LoginPageComponent },
    { path: 'products',          component: ProduitBioComponent },
    { path: 'formation',          component: FormationComponent },
    { path: 'register',          component: RegisterComponent },
    { path: 'congres',          component: CongresComponent },

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
