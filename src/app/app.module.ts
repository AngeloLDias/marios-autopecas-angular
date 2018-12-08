import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICarouselModule } from "ui-carousel";
// import { UICarouselComponent } from '../../node_modules/ui-carousel/src/ui-carousel/ui-carousel.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactComponent } from './container/contact/contact.component';
import { WhoWeAreComponent } from './container/who-we-are/who-we-are.component';
import { SlickModule } from 'ngx-slick';
import { AdminComponent } from './container/admin/admin.component';
import { ListProductsComponent } from './container/list-products/list-products.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    WhoWeAreComponent,
    AdminComponent,
    ListProductsComponent,
    ModalEditComponent,
    // UICarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UICarouselModule,
    HttpClientModule,
    SlickModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
