import { UICarouselModule } from "ui-carousel";
// import { UICarouselComponent } from '../../node_modules/ui-carousel/src/ui-carousel/ui-carousel.component'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactComponent } from './container/contact/contact.component';
import { WhoWeAreComponent } from './container/who-we-are/who-we-are.component';
import { SlickModule } from 'ngx-slick';
import { AdminComponent } from './container/admin/admin.component';
import { ListProductsComponent } from './container/list-products/list-products.component';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { LoginComponent } from './container/login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { CartComponent } from './container/cart/cart.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalConfirmProductComponent } from './container/modal-content/modal-confirm-product/modal-confirm-product.component';
import { ButtonComponent } from './components/button/button.component';
import { CadastroComponent } from './container/cadastro/cadastro.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/database";
import { ModalAddComponent } from './container/modal-add/modal-add.component';
import { ModalEditComponent } from './container/modal-edit/modal-edit.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';


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
    LoginComponent,
    CartComponent,
    ModalComponent,
    ModalConfirmProductComponent,
    ButtonComponent,
    CadastroComponent,
    ModalAddComponent,
    ModalEditComponent,
      
  ],
  entryComponents:[
    ModalAddComponent,
    ModalEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UICarouselModule,
    HttpClientModule,
    MatDialogModule,
    SlickModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    ImageCropperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'fcc-produtos-trading'),
    MatButtonModule,
    MatInputModule
  ],
  providers: [AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA&callback=initMap 

