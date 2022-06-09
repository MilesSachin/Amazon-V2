import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { CartService } from 'src/app/CartService/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, public cartService: CartService, private auth:AuthService) { }

  ngOnInit(): void {
  }
  signin(){
    this.router.navigate(['/auth/signin'])
  }
  logout(){
    this.auth.logout()
  }
}
