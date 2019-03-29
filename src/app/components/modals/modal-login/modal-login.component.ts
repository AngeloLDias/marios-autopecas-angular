import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(
      private afAuth: AngularFireAuth,
      private router:Router
    ) { }

  ngOnInit() {
    this.afAuth.idToken.subscribe(console.log)
  }


  loginEmailAndPassword(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(()=>{
      // alert('Login feito com sucesso')
      this.router.navigate(['/adm'])
    })
  }

  LoginGoogle(){
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }
  LoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
