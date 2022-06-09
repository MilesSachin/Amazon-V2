import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/CartService/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products:any = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart(p:any){
    this.cartService.addProduct(p)
  }

}
