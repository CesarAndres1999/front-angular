import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
cartQuantity=0
constructor(cartService:CartService){
  cartService.getCartObservable().subscribe((newCart)=>{
    this.cartQuantity=newCart.totalCount;
  })

}


}
