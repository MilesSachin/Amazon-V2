import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SubtotalComponent } from './subtotal/subtotal.component';

const routes : Routes=[
  {path:'', component:CheckoutComponent}
]

@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    SubtotalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
