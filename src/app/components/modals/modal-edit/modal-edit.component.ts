import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { Produto } from 'src/app/model/pruducts';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  public spinner: boolean;
  public produtosRef:any;
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;
  public photoProduct: any;

  constructor(private productsService: ProductsService, private storage: AngularFireStorage) {
    this.produtosRef = this.productsService.produtosRef

  }

  ngOnInit() {
  }

  add(key, _produto) {
    this.productsService.add(key, _produto)
  }


  uploadFile(event) {
    console.log(event)
    this.spinner = true;
    const file = event.target.files[0]
    let r = Math.random().toString(36).substring(7);
    const filePath = r;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.photoProduct = fileRef.getDownloadURL().subscribe(
        link => {
          this.photoProduct = link.toString()
          this.spinner = false;
          console.log('up feito com sucesso')
        }
      )
      ),
    )
      .subscribe()
  }
}
