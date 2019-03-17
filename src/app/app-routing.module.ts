import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { WhoWeAreComponent } from './container/who-we-are/who-we-are.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactComponent } from './container/contact/contact.component';
import { ListProductsComponent } from './container/list-products/list-products.component';
import { CartComponent } from './container/cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: WhoWeAreComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'lista-produtos', component: ListProductsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'dev-b', component: ListProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
