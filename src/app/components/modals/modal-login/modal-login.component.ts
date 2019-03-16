import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }


  loginEmailAndPassword(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(()=>{
      alert('Login feito com sucesso')
    })
  }

  LoginGoogle(){
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }
  LoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    
  }
}
