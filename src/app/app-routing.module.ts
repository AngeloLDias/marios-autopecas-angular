import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { WhoWeAreComponent } from './container/who-we-are/who-we-are.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactComponent } from './container/contact/contact.component';
import { ListProductsComponent } from './container/list-products/list-products.component';
import { CartComponent } from './container/cart/cart.component';
import { BuyFormComponent } from './container/buy-form/buy-form.component';
import { AdmComponent } from './container/adm/adm.component';
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: WhoWeAreComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'lista-produtos', component: ListProductsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'dev-b', component: ListProductsComponent },
  { path: 'dev-a', component: BuyFormComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'login', component: ModalLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
