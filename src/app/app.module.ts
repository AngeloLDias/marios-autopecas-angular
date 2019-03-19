import { UICarouselModule } from "ui-carousel";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { ProductsComponent } from './container/products/products.component';
import { ContactComponent } from './container/contact/contact.component';
import { WhoWeAreComponent } from './container/who-we-are/who-we-are.component';
import { SlickModule } from 'ngx-slick';
import { ListProductsComponent } from './container/list-products/list-products.component';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CartComponent } from './container/cart/cart.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/database";
import { ModalAddComponent } from './components/modals/modal-add/modal-add.component';
import { ModalEditComponent } from './components/modals/modal-edit/modal-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { AngularFireAuth } from "@angular/fire/auth";
import { ModalLoginComponent } from './components/modals/modal-login/modal-login.component';
import { CropperModule } from 'ngx-cropper';
import { BuyFormComponent } from './container/buy-form/buy-form.component';
import { AdmComponent } from './container/adm/adm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    WhoWeAreComponent,
    ListProductsComponent,
    CartComponent,
    ModalAddComponent,
    ModalEditComponent,
    ModalLoginComponent,
    BuyFormComponent,
    AdmComponent,
    
      
  ],
  entryComponents:[
    ModalAddComponent,
    ModalEditComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UICarouselModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    CropperModule,
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
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AngularFirestore, AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBGgHmDeD5_Q7Mh5sUPgaQKOtPE6vElSWA&callback=initMap 

