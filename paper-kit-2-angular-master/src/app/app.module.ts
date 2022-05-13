import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
// import { ExamplesModule } from './examples/examples.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
// import { PanierComponent } from './module/client/view/panier/panier.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { ProductsComponent } from './module/client/view/products/products.component';
// import { ProductCreateComponent } from './module/client/view/products/product-create/product-create.component';
// import { ProductListComponent } from './module/client/view/products/product-list/product-list.component';
import { AuthComponent } from './auth/auth.component';
import { DemoComponent } from './demo/demo.component';
// import { PagesComponent } from './pages/pages.component';
// import { UtilsComponent } from './utils/utils.component';
// import { ModuleComponent } from './module/module.component';


// import { ClientComponent } from './module/client/client.component';
// import { AdminComponent } from './module/admin/admin.component';
// import { VisitorComponent } from './module/visitor/visitor.component';
import { ViewComponent } from './module/admin/view/view.component';
import { FormationComponent } from './module/client/view/formation/formation.component';
import { ProduitBioComponent } from './module/client/view/produit-bio/produit-bio.component';
import { CongresComponent } from './module/client/view/congres/congres.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterComponent,
    // PanierComponent,
    // CheckoutComponent,
    // ProductsComponent,
    // ProductListComponent,
    // ProductCreateComponent,
    AuthComponent,
    DemoComponent,
    // PagesComponent,
    // UtilsComponent,
    // ModuleComponent,
    // ClientComponent,
    // AdminComponent,
    // VisitorComponent,
    ViewComponent,
    FormationComponent,
    ProduitBioComponent,
    CongresComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    // ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
