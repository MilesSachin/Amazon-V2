import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() checkout_product:any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }
  removeItem(p:any){
    // delete this.checkout_product[p]
    this.cartService.removeItem(p)
    this.deleteEvent.emit(p)
  }
}
