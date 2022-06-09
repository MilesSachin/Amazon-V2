import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
// logIn Method
  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token','hbjavdkajdnau');
      this.router.navigate(['./main'])
    }, err =>{
      alert('Something went Wrong');
      this.router.navigate(['./auth'])
    })
  }

  // logout Method
  logout(){
    this.fireauth.signOut().then(()=>{
      this.router.navigate(['/']);
      localStorage.setItem('token','')
    })
  }

  // SignUp Method
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('registration Succesful');
      this.router.navigate(['./auth'])
    },err=>{
      alert(err.message);
      this.router.navigate(['./register'])
    })
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token')
  }

}
