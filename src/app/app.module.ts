import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
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
import { LoginComponent } from './container/login/login.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

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
    LoginComponent,

    // UICarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UICarouselModule,
    SlickModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA&callback',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
