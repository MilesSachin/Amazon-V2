import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/CartService/cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.css']
})
export class SubtotalComponent implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

}
