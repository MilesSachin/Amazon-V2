import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/CartService/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items:any;
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }
  getShoppingCart(){
    this.items = this.cartService.getShoppingItem();
  }
  deleteEventHandler(p:any){
    console.log("event handled")
    this.getShoppingCart()
  }
}

