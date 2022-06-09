import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  productList:any = [];
  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res:any)=>{
      this.productList = res;
    })
  }



}
